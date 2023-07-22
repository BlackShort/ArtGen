import React, { useState } from "react";
import { Box, Button, FormLabel } from "@mui/material";

const Paragraph = ({ exportedData, setExportedData }) => {
  const [text, setText] = useState("");

  const handleUpdateData = () => {
    const newData = {
      type: "paragraph",
      paragraph: text,
    };
    setExportedData([...exportedData, newData]);
    setText(""); 
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
          Enter Paragraph Content
        </FormLabel>
        <textarea
          name="primary"
          id="primary"
          spellCheck="false"
          placeholder="Enter paragraph content..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            background: "transparent",
            color: "#fff",
            letterSpacing: "0.5px",
            border: "1px solid gray",
            width: "-webkit-fill-available",
            height: "25vh",
            borderRadius: "0.3em",
            fontSize: "1rem",
            padding: "0.1em 1em",
            resize:'none'
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

export default Paragraph;
