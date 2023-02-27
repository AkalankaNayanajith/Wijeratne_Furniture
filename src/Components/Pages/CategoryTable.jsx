import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CategoryActions from "./CategoryActions";
import { useState } from "react";
import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 180 },
  { field: "categoryName", headerName: "Category Name", width: 480 },
  // {
  //   field: 'quantity',
  //   headerName: 'Quantity',
  //   type: 'number',
  //   width: 180,
  // },

//   {
//     field: "actions",
//     headerName: "Actions",
//     type: "actions",
//     width: 250,
//     renderCell: (params) => <CategoryActions {...{ params }} />,
//   },
];

// const rows = [
//   { id: 1, categoryName: 'Snow', quantity: 35 },
//   { id: 2, categoryName: 'Lannister', quantity: 42 },
//   { id: 3, categoryName: 'Lannister',  quantity: 45 },
//   { id: 4, categoryName: 'Stark', quantity: 16 },
//   { id: 5, categoryName: 'Targaryen', quantity: null },
//   { id: 6, categoryName: 'Melisandre', quantity: 150 },
//   { id: 7, categoryName: 'Clifford',  quantity: 44 },
//   { id: 8, categoryName: 'Frances',  quantity: 36 },
//   { id: 9, categoryName: 'Roxie',  quantity: 65 },
// ];

export default function CategoryTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllCategories() {
      await fetch("http://localhost:8080/category")
        .then((res) => res.json())
        .then((res) => setData(res));
    }
    getAllCategories();
  }, []);

  return (
    <div style={{ height: 400, width: "80%" }} className="mx-auto">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
