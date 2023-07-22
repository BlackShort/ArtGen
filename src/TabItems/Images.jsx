import React, { useState } from "react";
import { Box, Button, FormLabel, TextField } from "@mui/material";

const Images = ({ exportedData, setExportedData }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [altText, setAltText] = useState("");

  const handleUpdateData = () => {
    const newData = {
      type: "image",
      imageUrl: imageUrl,
      altText: altText,
    };
    // Update the exportedData state in the parent component with the new data
    setExportedData([...exportedData, newData]);
    setImageUrl(""); // Clear the input fields after saving
    setAltText("");
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
        <FormLabel htmlFor="imageUrl" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          Image URL
        </FormLabel>
        <input
          type="text"
          id="imageUrl"
          spellCheck="false"
          placeholder="Enter image URL..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
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
        <FormLabel htmlFor="altText" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          Alt Text
        </FormLabel>
        <input
          type="text"
          id="altText"
          spellCheck="false"
          placeholder="Enter alt text..."
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="error" onClick={ResetUpdatedData}>Reset</Button>
        <Button variant="contained" color="primary" onClick={handleUpdateData}>Save</Button>
      </Box>
    </Box>
  );
};

export default Images;
