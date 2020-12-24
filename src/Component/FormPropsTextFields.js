import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style1.css'
import { Container } from '@material-ui/core';
import { Check } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const [userName,setUsername]=useState('')

  const[passWord, setPassword]=useState('')

/*function usernameHandler(){
  setUsername(user_in)
  
}*/
 
 function check_form() {
  
 
  
  if (userName!=='' && passWord!==''){
    fetch("http://localhost:9090/login", {method:"POST", body: JSON.stringify({username:userName,
    password:passWord})}).then(r => r.json()).then(d => {console.log(d)});
   }
   
  else {

    alert("لطفا فیلد های ستاره دار را پر کنید");
  } 
}


const classes = useStyles();
  
  return (
    <div className='container'>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField required id="stdusername" label="user name " onChange={(e)=> setUsername(e.target.value)}
          fullWidth />   

          <TextField
          required id="stdpasswd"
          label="Password"
          required='true'
          type="password"
          autoComplete="current-password"
          onChange={(b)=> setPassword(b.target.value)}
          fullWidth
          />
        </div>

        <div> 
          <Button variant="contained" style={{marginTop:'30px'} } color="primary"
           fullWidth onClick={check_form}   >LOG IN</Button>
        </div>
      </form>
    </div>
  );
}