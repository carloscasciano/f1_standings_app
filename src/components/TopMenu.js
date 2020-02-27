import React from 'react'
import YearSelector from "./YearSelector"
import TwitterArea from "./TwitterArea"

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Link from '@material-ui/core/Link'


const useStyles = makeStyles({
    topMenu: {
        width: "100%",
        height: 80,
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-between"
        
    },
    yearSelectorStyle: {
        
        margin: 300
    },
    personalInfoStyle: {
        display: "flex",
        gridColumn: "1/4",
        paddingLeft: 40
        
    },
    iconStyle: {
        paddingLeft: 4,
        paddingRight: 2
    }
})

const TopMenu = (props) => {
    const classes = useStyles()
    return (
        <>  
            <Paper
                elevation={5}
                className={classes.topMenu}
            >   
                    <div className={classes.personalInfoStyle}>
                        <Typography variant="body1">coded by carlos casciano</Typography>
                        <Link href="https://github.com/carloscasciano/" >
                            <GitHubIcon className={classes.iconStyle} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/carloscasciano/" >
                            <LinkedInIcon />
                        </Link>   
                    </div>
                    <YearSelector 
                        props={props} 
                        className={classes.yearSelectorStyle}
                    />
                    <TwitterArea />
            </Paper> 
        </>
    )
}

export default TopMenu