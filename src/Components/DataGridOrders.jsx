import React, { useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import OrderSeeMore from "./Modals/OrderSeeMore";



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
    type: 'telephone',
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
    width: 270,
    renderCell : (cellValues) => {
        return <div className='grid grid-cols-3 gap-1 '>
            {/* <Button  variant="Contained" sx={{bgcolor: "blue"}} onClick={() => {window.alert('VIEW Modal')}} >Status </Button> */}
            <Button variant="outlined" color="error" onClick={() => {window.alert('VIEW Modal')}}>Status</Button>
            <Button  variant="outlined" color="info" onClick={()=> {window.alert('VIEW Modal')}} >See More </Button> 
                        
        </div>
    }
  },
  
];

const rows = [
  { OrderID: 1, prodName: 'sofa', dueDate: '2022/12/1' ,  quantity: 2 , customerTel: 774567892, price: 18000},
  { OrderID: 2, prodName: 'bed',  dueDate: '2022/12/8' ,  quantity: 1 , customerTel: 778956324, price: 78000},
  { OrderID: 10, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 8 ,customerTel: 714567894, price: 78500 },
  { OrderID: 9, prodName: 'chair',dueDate: '2022/12/3' ,  quantity: 6 ,customerTel: 714567894, price: 89600 },
  { OrderID: 6, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 15500 },
  { OrderID: 7, prodName: 'chair',dueDate: '2022/12/7' ,  quantity: 5 ,customerTel: 714567894, price: 7500 },
  { OrderID: 11, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 23 ,customerTel: 714567894, price: 23500 },
  { OrderID: 5, prodName: 'chair',dueDate: '2022/12/5' ,  quantity: 12 ,customerTel: 714567894, price: 7500 },
  { OrderID: 8, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 12 ,customerTel: 714567894, price: 35500 },
  { OrderID: 4, prodName: 'chair',dueDate: '2022/12/9' ,  quantity: 36 ,customerTel: 714567894, price: 87500 },
  { OrderID: 3, prodName: 'chair',dueDate: '2022/12/8' ,  quantity: 20 ,customerTel: 714567894, price: 55500 },
];



export default function DataGridOrders() {

  const handleOnCellClick = (params) => {
    setOpenModal(true);
  };

  
  const [openModal, setOpenModal] = React.useState(false);

  <OrderSeeMore open={openModal} onClose={()=> setOpenModal(false)}/>
  

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
        // onCellEditCommit={(params, event, details)=> {
        //   console.log(params);
        //   console.log(event);
        //   console.log(details);
        // }}
        onCellClick={handleOnCellClick}
        />
    </Box>
  );
}


