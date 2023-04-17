import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import { Image } from '@mui/icons-material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  
  {
    field: 'image64',
    headerName: 'Image',
    width: 130,
    renderCell: (params) => (
      <Image
        src={params.value}
        alt={`Image of ID ${params.row.id}`}
        style={{ width: '100%', height: 'auto' }}
      />
    ),
  },
  {
    field: 'newprodname',
    headerName: 'Product name',
    width: 220,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    editable: true,
  },
  {
    field: 'dateAdded',
    headerName: 'Date Added',
    width: 110,
    editable: true,
  },
    {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price ',
    type: 'number',
    width: 125,
    editable: true,
  },
  
  {
    field: 'Option',
    headerName: 'Option',
    width: 150,
    renderCell : (cellValues) => {
        return <div className='grid grid-cols-3 gap-1 '>
            <IconButton  variant="outlined" color="success" onClick={() => {window.alert('VIEW Modal')}} ><RemoveRedEyeIcon/> </IconButton>
            <IconButton  variant="outlined"  color="secondary" onClick={() => {window.alert('Edit')}} ><CreateIcon /> </IconButton>
            <IconButton variant="outlined"  color="error" onClick={() => {window.alert('Delete')}} > <DeleteIcon /></IconButton>            
        </div>
    }
  },
  
];

const rows = [
  // { id: 2, category: 'Lannister', prodName: 'Cersei', price: 42000 , quantity: 7887 , dateAdded: '2022/12/8' },
];




export default function DataGridDemo() {
  

  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/product/getAll")
      .then((response) => response.json())
      .then((result) => {
        setProductData(result);
      });

  },[]);

  console.log("Product Data From DB-",productData) 
  return (
    <Box sx={{ height: 527, width: '99.5%' }}>
      <DataGrid
        rows={productData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}