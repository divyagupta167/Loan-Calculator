import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TenureSelect = ({data,setData}) => {
  

  const handleChange = (event) => {
   setData({
    ...data,
    loanTerm:event.target.value
   })
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Tenure"
        onChange={handleChange}
      >
        <MenuItem value={5}>5years</MenuItem>
        <MenuItem value={10}>10years</MenuItem>
        <MenuItem value={15}>15years</MenuItem>
        <MenuItem value={20}>20years</MenuItem>
        <MenuItem value={25}>25years</MenuItem>
        
      </Select>
    </FormControl>
  );
};

export default TenureSelect;
