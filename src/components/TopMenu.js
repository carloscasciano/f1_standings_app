import React from 'react'
import YearSelector from "./YearSelector"

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'




const useStyles = makeStyles({
    topMenu: {
        width: "100%",
        height: 80,
        display: "grid",
        justifyItems: "center",
        alignItens: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    yearSelectorStyle: {
        margin: 30,
        paddingLeft: 40,
        paddingRight: 40
    },
    personalInfoStyle: {
        display: "flex",
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
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    <div className={classes.personalInfoStyle}>
                        <Typography variant="body1">coded by carlos casciano</Typography>
                        <Link href="https://github.com/carloscasciano/" >
                            <GitHubIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/in/carloscasciano/" >
                            <LinkedInIcon />
                        </Link>   
                    </div>
                     <YearSelector 
                        props={props} 
                        className={classes.yearSelectorStyle}
                    />
                    

                </Grid>
                
            </Paper>
            
        </>
    )
}

export default TopMenu