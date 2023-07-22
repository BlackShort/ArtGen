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
    <Stack p={"3% 3%"} height={{ xs: '-webkit-fill-available', sm: "calc(100vh - (7vh + 6em))" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          border: "2px solid gray",
          borderRadius: "10px",
          height: "100%",
          overflow: { xs: 'auto', sm: "hidden" },
        }}
      >
        <Box sx={{ width: { xs: '-webkit-fill-available', sm: "45%" }, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{
              borderBottom: 1,
              borderColor: "gray",
              textAlign: "center",
              padding: { xs: '0.2em', sm: '0.5em' },
              fontSize: { xs: '1.3rem' },
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
        <Box
          sx={{
            width: { xs: '-webkit-fill-available', sm: "55%" },
            borderWidth: { xs: '0.5px 0 0 0', sm: "0 0 0 0.5px" },
            borderStyle: 'solid',
            borderColor: 'gray',
            display: "flex",
            position: "relative",
            height: "-webkit-fill-available",
            minHeight: { xs: '15vh', sm: 'auto' }
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
        </Box>
      </Box>
    </Stack>
  );
};

export default Home;
