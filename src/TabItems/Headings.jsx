import React, { useState } from "react";
import { Box, Button, FormLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Headings = ({ exportedData, setExportedData }) => {
  const [heading, setHeading] = useState("");
  const [hType, setHType] = useState("h3");

  const HTypeChange = (e) => {
    const selectedValue = e.target.value;
    setHType(selectedValue);
  };

  const handleUpdateData = () => {
    const newData = {
      type: "heading",
      heading: heading,
      hType: hType,
    };
    setExportedData([...exportedData, newData]);
    setHeading(""); 
  };

  const ResetUpdatedData = () => {
    const newDataArray = [...exportedData];
    newDataArray.pop();
    setExportedData(newDataArray);
  }

  return (
    <Box
      width={"-webkit-fill-available"}
      height={"-webkit-fill-available"}
      sx={{ display: "flex", flexDirection: "column", gap: "2em" }}
    >
      <Box
        gap={1}
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          width: "-webkit-fill-available",
          flexDirection: "column",
          padding: "0 0.5em",
        }}
      >
        <FormLabel htmlFor="primary" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          Enter Heading
        </FormLabel>
        <input
          type="text"
          name="primary"
          id="primary"
          spellCheck="false"
          placeholder="Enter heading..."
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          style={{
            background: "transparent",
            color: "#fff",
            letterSpacing: "0.5px",
            border: "1px solid gray",
            width: "-webkit-fill-available",
            height: "5vh",
            borderRadius: "0.3em",
            fontSize: "1rem",
            padding: "0.1em 1em",
          }}
          required
        />
      </Box>

      <Box
        gap={1}
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          width: "-webkit-fill-available",
          flexDirection: "column",
          padding: "0 0.5em",
        }}
      >
        <FormLabel htmlFor="primary" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          Select Type
        </FormLabel>
        <Select
          placeholder="Select a type..."
          IconComponent={KeyboardArrowDown}
          value={hType}
          onChange={HTypeChange}
          MenuProps={{
            PaperProps: {
              style: {
                backgroundColor: "#434343",
              },
            },
          }}
          sx={{
            color: "#fff",
            letterSpacing: "0.5px",
            border: "1px solid gray",
            width: "-webkit-fill-available",
            height: "5vh",
            borderRadius: "0.3em",
            fontSize: "1rem",
            padding: "0.1em 1em",
            "&:focus": {
              border: "1px solid black",
            },
            "& .MuiSelect-icon": {
              transition: "0.2s",
              transform: "rotate(0deg)",
              "&.Mui-expanded": {
                transform: "rotate(-180deg)",
              },
            },
            "& .MuiInputBase-root": {
              "&:hover, &:after": {
                backgroundColor: "transparent",
                color: "#fff",
              },
            },
          }}
        >
          <MenuItem value="h3">Primary</MenuItem>
          <MenuItem value="h4">Secondary</MenuItem>
          <MenuItem value="h5">Tertiary</MenuItem>
        </Select>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="error" onClick={ResetUpdatedData}>Reset</Button>
        <Button variant="contained" color="primary" onClick={handleUpdateData}>Save</Button>
      </Box>
    </Box>
  );
};

export default Headings;
