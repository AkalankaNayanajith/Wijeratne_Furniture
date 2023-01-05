import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'OrderID', headerName: 'OrderID', width: 90 },
  {
    field: 'prodname',
    headerName: 'Product name',
    width: 220,
    editable: true,
  },  
  {
    field: 'dueDate',
    headerName: 'Order Due Date ',
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
    field: 'customerTel',
    headerName: 'customer Tel ',
    type: 'number',
    width: 125,
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
    width: 250,
    renderCell : (cellValues) => {
        return <div className='grid grid-cols-3 gap-1 '>
            <Button  variant="Contained" sx={{bgcolor: "blue"}} onClick={() => {window.alert('VIEW Modal')}} >Status </Button>
            <Button  variant="Contained" color="error" onClick={() => {window.alert('VIEW Modal')}} >See More... </Button>
                        
        </div>
    }
  },
  
];

const rows = [
  { OrderID: 1, prodName: 'sofa', dueDate: '2022/12/8' ,  quantity: 2 , customerTel: 774567892, price: 48000},
  { OrderID: 2, prodName: 'bed',  dueDate: '2022/12/8' ,  quantity: 1 , customerTel: 778956324, price: 42000},
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
];




export default function DataGridOrders() {
  

//   const [productData, setProductData] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:8080/product/getAll")
//       .then((response) => response.json())
//       .then((result) => {
//         setProductData(result);
//       });

//   },[]);

//   console.log("Product Data From DB-",productData) 
  return (
    <Box sx={{ height: 527, width: '99.5%' }}>
      <DataGrid
        getRowId={(row) => row.OrderID}
        rows={rows}
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


