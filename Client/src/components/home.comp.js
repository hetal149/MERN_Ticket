import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles= makeStyles({
    h2:{
        color: '#482880',
        fontSize:'40px',
        fontWeight:'bold',
        fontStyle:'italic',
        marginTop:"290px",
        marginLeft:"10px",
        
        
    },
    home:{
        width: '100%',
        height: '672px',
    
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex:999
    },
    back:{
     
        backgroundRepeat:'no-repeat',
        backgroundSize:'Cover',
        width: '100',
        height: '672px',
        position: 'relative',
        color: 'white',
        textAlign: 'center',
    },
   img:{ 
       width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex:99,
    }

})
export const Home = () => {
    const classes = useStyles();
  return (
  <div className={classes.back} >
      <img  className={classes.img} src="https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?size=626&ext=jpg&ga=GA1.2.108315330.1652957572"/>
  <div className={classes.home} >
      
     <h2 className={classes.h2}> Welcome to the Ticket System </h2></div>
      </div>
  )
}
