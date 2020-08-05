import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import { fetchMessages, sendMessage } from '../../features/chat/chatSlice'

import Header from '../../components/Header'
import Main from '../../components/Main'
import Message from './Message'
import InputMessage from './InputMessage'

const useStyles = makeStyles((theme) => ({
    root: {
        // border: '1px solid coral',
        position: 'relative',
    },
    paper: {
        height: '75vh',
        padding: theme.spacing(1),
        paddingBottom: theme.spacing(5),
        overflowY: 'scroll',
    },
    inputMessage: {
        width: '100%',
    },
    scrollAnchor: {
        marginTop: 100,
    },
}))

export default function Chat() {
    const { title } = useParams()
    const classes = useStyles()
    const dispatch = useDispatch()
    const messages = useSelector((state) => state.chat.chats[title])

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleMessageSend = (newMessage) => {
        dispatch(sendMessage(newMessage))
        scrollToBottom()
    }

    useEffect(() => {
        dispatch(fetchMessages())
    }, [])

    return (
        <>
            <Header />
            <Main>
                <Container maxWidth="md" className={classes.root}>
                    <Paper className={classes.paper}>
                        {messages &&
                            messages.map((message) => (
                                <Message message={message} />
                            ))}
                        <div
                            ref={messagesEndRef}
                            className={classes.scrollAnchor}
                        />
                    </Paper>
                    <InputMessage
                        className={classes.inputMessage}
                        chatTitle={title}
                        onSubmit={handleMessageSend}
                    />
                </Container>
            </Main>
        </>
    )
}
