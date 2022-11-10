import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import * as React from "react";

const Ratings = () => {
  const [value] = React.useState(3);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
};

export default Ratings;
