import React, { useState } from "react";
import { Box, Button, FormLabel, MenuItem, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Buttons = ({ exportedData, setExportedData }) => {
  const [label, setLabel] = useState("");
  const [variant, setVariant] = useState("contained");
  const [color, setColor] = useState("primary");

  const handleVariantChange = (e) => {
    const selectedVariant = e.target.value;
    setVariant(selectedVariant);
  };

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
  };

  const handleUpdateData = () => {
    const newData = {
      type: "button",
      label: label,
      variant: variant,
      color: color,
    };
    // Update the exportedData state in the parent component with the new data
    setExportedData([...exportedData, newData]);
    setLabel(""); // Clear the input field after saving
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
        <FormLabel htmlFor="label" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          Button Label
        </FormLabel>
        <input
          type="text"
          id="label"
          spellCheck="false"
          placeholder="Enter button label..."
          value={label}
          onChange={(e) => setLabel(e.target.value)}
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
        <FormLabel htmlFor="variant" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          Select Variant
        </FormLabel>
        <Select
          value={variant}
          onChange={handleVariantChange}
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
          <MenuItem value="contained">Contained</MenuItem>
          <MenuItem value="outlined">Outlined</MenuItem>
          <MenuItem value="text">Text</MenuItem>
        </Select>
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
        <FormLabel htmlFor="color" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          Select Color
        </FormLabel>
        <Select
          value={color}
          onChange={handleColorChange}
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
          <MenuItem value="primary">Primary</MenuItem>
          <MenuItem value="secondary">Secondary</MenuItem>
          <MenuItem value="default">Default</MenuItem>
        </Select>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="error" onClick={ResetUpdatedData}>Reset</Button>
        <Button variant="contained" color="primary" onClick={handleUpdateData}>Save</Button>
      </Box>
    </Box>
  );
};

export default Buttons;
