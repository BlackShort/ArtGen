import React, { useState } from "react";
import { Box, Button, FormLabel, TextField } from "@mui/material";

const Links = ({ exportedData, setExportedData }) => {
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");

  const handleUpdateData = () => {
    const newData = {
      type: "link",
      linkUrl: linkUrl,
      linkText: linkText,
    };
    // Update the exportedData state in the parent component with the new data
    setExportedData([...exportedData, newData]);
    setLinkUrl(""); // Clear the input fields after saving
    setLinkText("");
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
        <FormLabel htmlFor="linkUrl" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          Link URL
        </FormLabel>
        <input
          type="url"
          id="linkUrl"
          spellCheck="false"
          placeholder="Enter link URL..."
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
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
        <FormLabel htmlFor="linkText" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          Link Text
        </FormLabel>
        <input
          type="text"
          id="linkText"
          spellCheck="false"
          placeholder="Enter link text..."
          value={linkText}
          onChange={(e) => setLinkText(e.target.value)}
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

export default Links;
