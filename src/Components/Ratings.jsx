import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import * as React from "react";

const Ratings = ( {review}) => {
  const [value] = React.useState(review);

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
