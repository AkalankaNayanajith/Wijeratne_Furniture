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
import AdminOrderDetails from "./Modals/AdminOrderDetails";



export default function DataGridOrders() {

  const handleOnCellClick = (id) => {
    setSelectedId(id)
    setOpenModal(true);
  };

  
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState("");
  const [openOrderDetailsModal, setOpenOrderDetailsModal] = React.useState(false);

  <OrderSeeMore open={openModal} onClose={()=> setOpenModal(false)}/>
  

//   const [productData, setProductData] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:8080/customorder/add")
//       .then((response) => response.json())
//       .then((result) => {
//         setProductData(result);
//       });

//   },[]);

//   console.log("Product Data From DB-",productData) 



const columns = [
  { field: 'id', headerName: 'OrderID', width: 90 },
  {
    field: 'orderName',
    headerName: 'Order name',
    width: 220,
    editable: true,
  },  
  // {
  //   field: 'dueDate',
  //   headerName: 'Order Due Date ',
  //   width: 110,
  //   editable: true,
  // },
    {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'material',
    headerName: 'material',
    width: 125,
    editable: true,
  },
  {
    field: 'subMaterial',
    headerName: 'sub material',
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
            <Button  variant="outlined" color="info" onClick={()=> {window.alert('VIEW Modal')}} >Status </Button> 
            <Button variant="outlined" color="error" onClick={()=> setOpenOrderDetailsModal(true)}>See More</Button>
                        
        </div>
    }
  },
  
];

const rows = [
  { OrderID: 1, prodName: 'Brooks Chair', dueDate: '2023/04/17' ,  quantity: 1 , customerTel: 774567892, price: 33000},
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

const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/customorder/getAll")
      .then((response) => response.json())
      .then((result) => {
        setProductData(result);
      });

  },[]);

  return (
    <>
    <Box sx={{ height: 527, width: '99.5%' }}>
      <DataGrid
        rows={productData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onCellClick={(row) => setSelectedId(row.id)}
      />
    </Box>
  

    <AdminOrderDetails customId={selectedId} openOrderDetails={openOrderDetailsModal} closeOrderDetails={()=> setOpenOrderDetailsModal(false)}/>

    </>
  );
}


