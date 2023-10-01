import React from "react";
import { Grid, Typography, Rating,Box } from "@mui/material";

const Star = () => {
    const [value, setValue] = React.useState(2);
  return (
    <div>
      <Grid container spacing={1}>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
       >
         <Typography component="legend" style={{paddingBottom:15 }}>Customer Reviews</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
       </Box>
      </Grid>
      <Grid container spacing={1}>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
       >

      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    
    
       </Box>
      </Grid>
      <Grid container spacing={1}>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
       >

      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    
    
       </Box>
      </Grid>
    </div>
  );
};

export default Star;
