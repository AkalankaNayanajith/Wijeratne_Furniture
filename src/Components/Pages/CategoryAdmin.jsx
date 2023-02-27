import React from 'react'
// import PersistentDrawerLeft from '../../../components/AdminComponent/AppBar/PersistentDrawerLeft'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import axios, * as others from 'axios';
import CategoryTable from './CategoryTable';

function CategoryAdmin() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const [categoryName, setCategoryname] = useState();


    const onSubmit = async () => {
      window.alert('Data Successfully Saved')
    
        let res = await axios.post('http://localhost:9191/saveCategory',{
           categoryName : categoryName
        })
    
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  

  return (
    <div className='mx-5'>
        {/* <PersistentDrawerLeft/> */}
        <div className='flex justify-center'><h1>Categories</h1></div>
        <div>
        <div className='ml-32'><Button variant="contained" onClick={handleClickOpen}>
                                    + Add New Category
                                </Button>
                                </div>
                                <Dialog open={open} onClose={handleClose} maxWidth={800}>
                                <DialogTitle>Add New Category</DialogTitle>
                                <DialogContent>
                                {/* <DialogContentText>
                                    Add new category
                                </DialogContentText> */}
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="categoryName"
                                        label="Category Name"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        onChange={(e)=>{setCategoryname(e.target.value)}}
                                    />
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={onSubmit}>Add</Button>
                                </DialogActions>
                                </Dialog>
        </div>
        <div className='mx-auto'><CategoryTable/></div>
    </div>
  )
}

export default CategoryAdmin