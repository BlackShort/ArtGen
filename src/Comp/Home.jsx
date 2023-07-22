import React, { useState } from "react";
import { OptTabs } from "./";
import { Box, Stack, Typography } from "@mui/material";
import Export from "../Export/Export";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [exportedData, setExportedData] = useState([]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Stack p={"3% 3%"} height={"calc(100vh - (7vh + 6em))"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          border: "2px solid gray",
          borderRadius: "10px",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box sx={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{
              borderBottom: 1,
              borderColor: "gray",
              textAlign: "center",
              padding: "0.5em ",
            }}
          >
            Add Components
          </Typography>
          <OptTabs
            value={selectedTab}
            onChange={handleTabChange}
            exportedData={exportedData}
            setExportedData={setExportedData}
          />

        </Box>
        <div
          style={{
            width: "55%",
            borderLeft: "0.5px solid gray",
            display: "flex",
            position: "relative",
            height: "-webkit-fill-available",
          }}
        >
          <Stack width={"-webkit-fill-available"} gap={"1em"}>
            {exportedData && exportedData.length > 0 ? (
              <Export exportedData={exportedData} />
            ) : (
              <Stack
                width={"-webkit-fill-available"}
                height={"-webkit-fill-available"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography
                  variant="h5"
                  sx={{ userSelect: "none", color: "#c3c3c3" }}
                >
                  Create your webpage...
                </Typography>
              </Stack>
            )}
          </Stack>
        </div>
      </Box>
    </Stack>
  );
};

export default Home;
