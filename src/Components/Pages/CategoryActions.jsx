import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";

const CategoryActions = ({ params }) => {
  return (
    <Box>
      <Tooltip title="Edit Details">
        <IconButton onClick={() => {}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete Item">
        <IconButton onClick={() => {}}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default CategoryActions;
