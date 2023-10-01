import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import "./Nav.css";
import { Grid, TextField, Button ,CustomNumberInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// -------------------------------------------------------
export default function ({ handleInputChange, query ,handleZipChityChange}) {
  const navigate = useNavigate();
  const [num, setNum] = React.useState(10);

  const handleChange = (event) => {
    setNum(event.target.value);
  };
  return (
    <nav>
      <div className="nav-container">
        {/* <input 
        type='text'
         placeholder='Enter you search shoes' 
         onChange={handleInputChange}
         value={query} />
       */}
        <Grid container spacing={2} style={{ paddingLeft: "50px" }}>
          <Grid item xs={3}>
            <TextField
              id="outlined-basic"
              label="Find Local"
              onChange={handleInputChange}
              value={query}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-basic"
              label="Zip City"
              onChange={handleZipChityChange}
              // value={query}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            {/* ------------------- */}
            <FormControl sx={{ m: 0, minWidth: 120 }}>
        <Select
          value={num}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={2}>2 miles</MenuItem>  
          <MenuItem value={10}>10 miles</MenuItem>
          <MenuItem value={15}>15 miles</MenuItem>
          <MenuItem value={20}>20 miles</MenuItem>
        </Select>
      </FormControl>
            {/* -------------- */}
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=>{navigate("/prod")}} variant="outlined" size="large" sx={{height:55}} style={{background:'rgb(243, 168, 71)',color:"#FFFF",border:'none'}} startIcon={<SearchIcon /> }>
              Item search
            </Button>
          </Grid>
        </Grid>
      </div>
    </nav>
  );
}
