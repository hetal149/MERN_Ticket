import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import {makeStyles} from '@material-ui/core'
import { addTicket } from '../service/api';
import { Home1 } from './dash.comp';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({

  add:{
    backgroundColor:'#0a0a29',
  }
})
export const Ticket = (props) => {

  const[open,setOpen] =useState(false);
   
    const[userold ,setUserold] =useState(JSON.parse(localStorage.getItem('profile')));
    const[user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const[ticket,setTicket] = useState({
    uid : '',
    ticket_des : '',
    name :userold?.result.username,
    fname:userold?.result.fname,
    creator:userold?.result._id
  });
  const navigate = useNavigate();
    const addTicketdetails = async() => {
        await addTicket(ticket);
        setOpen(false);
        window.location.reload()
       
      }
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      useEffect(()=>{
        if(!user)
        {
          navigate('/')
        }
      })
      const classes = useStyles();
 
  return (
    <>
  
    <div>
      <br></br>
    <Button className={classes.add} variant="contained" color="info" onClick={handleClickOpen}>
    Add Ticket
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" align="center" fontSize="30px" color="#2c387e" fontWeight="bold">
        {"Add Ticket Here"}
      </DialogTitle>
    
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <TextField  sx={{
                width: 500,
                maxWidth: "100%",
                marginTop: "30px",
              }}
              disabled
              name="name"
              id="outlined-disabled"
              label=" USERNAME"
              value={ticket.name}

            /><br/><br/>
        <TextField  sx={{
                width: 500,
                maxWidth: "100%",
                marginTop: "30px",
              }}
              disabled
              name="fname"
              id="outlined-disabled"
              label=" NAME"
              value={ticket.fname}

            /><br/><br/>

        <TextField sx={{
                width: 500,
                maxWidth: "100%",
                marginTop: "30px",
              }}  id="outlined-basic" label="Ticket Description" name="ticket_des"
              value={ticket.ticket_des} onChange={(e) =>
                  setTicket({ ...ticket, ticket_des: e.target.value})}   />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="success" disabled={ticket.ticket_des==0} onClick={e => addTicketdetails(e)}>Submit</Button>
        <Button color="error" onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  <br></br>
  <Home1 itemsPerPage={10} />
  </>
  )
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(ticket.comp)