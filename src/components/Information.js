import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: "white",
      padding: "20 20",
      paddingLeft: 40,
      paddingRight: 30
      
    }
  }));

const Information = () => {
    
    const classes = useStyles()
    const handleOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <div>
                <IconButton
                    onClick={handleOpen}
                >
                    <InfoIcon />
                </IconButton>

            <Modal
                
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2>Extra Information:</h2>
                    <p>This app was made for study purposes only and does not intend to have commercial value.</p>
                    <p>I do not own or intend to own any of the information or images displayed here. They are probably FIA coprighted.</p>
                    <p>Further details on <a target="_blank" rel="noopener noreferrer" href="https://github.com/carloscasciano/f1_standings_app">github project</a>.</p>
                </div>
                </Fade>
            </Modal>
            </div>
 
            
        </>
    )
}

export default Information




