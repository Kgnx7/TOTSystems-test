import React from 'react'
import { useSelector } from 'react-redux'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../Header'
import { DRAWER_WIDTH, BAR_HEIGHT } from '../../utils/constants'

const useStyles = makeStyles((theme) => ({
    main: {
        flexGrow: 1,
        // display: 'flex',
        marginTop: BAR_HEIGHT,
        padding: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            marginLeft: DRAWER_WIDTH,
        },
    },
}))

export default function Profile() {
    const classes = useStyles()

    const currentUser = useSelector((state) => state.auth.user)

    return (
        <>
            <Header />
            <main className={classes.main}>
                <Typography
                    variant="h4"
                    align="center"
                    style={{ display: 'block' }}
                    gutterBottom
                >
                    Твой профиль 👦🏻👧🏽😺
                </Typography>
                <Typography variant="body2">Логин: </Typography>
                <Typography variant="body1">
                    <strong>{currentUser.login}</strong>
                </Typography>
            </main>
        </>
    )
}
