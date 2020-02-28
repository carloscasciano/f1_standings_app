import React from 'react'
import TweetsList from './TweetsList'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TwitterIcon from '@material-ui/icons/Twitter'
import Drawer from '@material-ui/core/Drawer'
import { useMediaQuery } from 'react-responsive'


const useStyles = makeStyles({
    fullTweetsListStyle: {
        width: "100%"
    },
    buttonStyle: {
        width: 200,
        margin: 30
    },
    paperStyle: {
        width: 500
    },
    buttonStyleSmall: {
        paddingRight: 5
    }
})

const TwitterArea = () => {

    const classes = useStyles()
    const [state, setState] = React.useState({
        left: false
      });
    
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      }

    const fullList = side => (
    <div
        className={classes.fullTweetsListStyle}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
    >
        <TweetsList />
    </div>
    )

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})    
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)'})


    return(
        <>
            {isDesktopOrLaptop && 
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.buttonStyle}
                    startIcon={<TwitterIcon />}
                    onClick={toggleDrawer('left', true)}
                >
                    Last News
                 </Button>
            
            }

            {isTabletOrMobile && 
                <IconButton
                    color="primary"
                    className={classes.smallButtonStyle}
                    onClick={toggleDrawer('left', true)}
                >
                    <TwitterIcon />
                </IconButton>

                          
            }

            <Drawer 
                anchor="left" 
                open={state.left} 
                onClose={toggleDrawer('left', false)}
                transitionDuration={500}       
            >
                {fullList('left')}  
            </Drawer>
        </>
    )
} 

export default TwitterArea