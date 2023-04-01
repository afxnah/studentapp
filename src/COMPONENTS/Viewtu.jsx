import { AppBar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const Viewtu = () => {
    var[update,setupdate]=useState(false)
    var[selected,setSelected]=useState([])
    var[students,setStudents]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:3006/student")
      .then(Response=>{setStudents(students=Response.data)
     console.log(students)
    })
    .catch(error=>console.log(error))
    },[])
    const deleteValue=(id)=>{
     console.log(id)
     axios.delete("http://localhost:3006/student/"+id)
     .then(response=>{
        alert("successfully deleted")
        Window.location.reload(false)
     })
     .catch(err=>console.log(err))
    }
    const updateValue=(value)=>{
        setSelected(value)
        setupdate(true)
    }
    var finaljsx= <TableContainer>
    <Table>
        <TableHead>
        <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Grade</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value,index)=>{
                return<TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(value.id)}>delete</Button></TableCell>
                    <TableCell><Button onClick={()=>updateValue(value)}>update</Button></TableCell>
                </TableRow>
})}
        </TableBody>
    </Table>
</TableContainer>
if(update)
finaljsx=<Add data={selected}method='put'/>
  return (
   finaljsx
  )
}

export default Viewtu
