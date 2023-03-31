import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = () => {
    var[input,setinput]=useState({
        name:'',
        grade:''
    });
    const inputhandler1 = (e) =>{
        const {name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readValues=()=>{
      console.log("clicked")
      axios.post(" http://localhost:3006/student",input)
      .then(Response=>{
        alert("successfully added")
      })

    }
   
  return (
    <div>
   <p></p>
      <TextField   variant="outlined" onChange={inputhandler1} label='name'
      name='name' value={input.name}> </TextField>  <p></p>
       <Typography>{input.fname}</Typography>
      <TextField id="outlined-basic" label="grade" variant="outlined" onChange={inputhandler1} 
      name='grade' value={input.grade} /><p></p>
       <Typography>{input.grade}</Typography>
      <Button variant="contained"onClick={readValues}> save</Button><p></p>
    </div>
  )
}

export default Add