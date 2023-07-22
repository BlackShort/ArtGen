import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Headings, Buttons, Images, Links, Paragraph } from "../TabItems/index";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: '75%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const OptTabs = ({ value, onChange, exportedData, setExportedData }) => {
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const storedValue = localStorage.getItem("selectedTab");
    if (storedValue !== null) {
      setTabValue(parseInt(storedValue, 10));
    }
  }, []);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    localStorage.setItem("selectedTab", newValue);
    onChange(event, newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "transparent",
        display: "flex",
        color: "#FFFFFF",
        width: "-webkit-fill-available",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value !== undefined ? value : tabValue}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          width: '25%',
          borderRight: 1,
          borderColor: 'gray',
          bgcolor: 'transparent',
          '& .MuiTabs-scroller': {
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#FFFFFF',
            },
          },
          '& .MuiTab-root': {
            color: '#FFFFFF',
            textTransform: 'uppercase',
            alignItems: 'flex-start',

            '&.Mui-selected': {
              color: '#00fff5',
            },
            '&:not(.Mui-selected)': {
              color: '#FFFFFF',
            },
          },
        }}
      >
        <Tab label="Heading" {...a11yProps(0)} />
        <Tab label="Button" {...a11yProps(1)} />
        <Tab label="Image" {...a11yProps(2)} />
        <Tab label="Link" {...a11yProps(3)} />
        <Tab label="Paragraph" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value !== undefined ? value : tabValue} index={0}>
        <Headings exportedData={exportedData} setExportedData={setExportedData} />
      </TabPanel>
      <TabPanel value={value !== undefined ? value : tabValue} index={1}>
        <Buttons exportedData={exportedData} setExportedData={setExportedData} />
      </TabPanel>
      <TabPanel value={value !== undefined ? value : tabValue} index={2}>
        <Images exportedData={exportedData} setExportedData={setExportedData} />
      </TabPanel>
      <TabPanel value={value !== undefined ? value : tabValue} index={3}>
        <Links exportedData={exportedData} setExportedData={setExportedData} />
      </TabPanel>
      <TabPanel value={value !== undefined ? value : tabValue} index={4}>
        <Paragraph exportedData={exportedData} setExportedData={setExportedData} />
      </TabPanel>
    </Box>
  );
};

export default OptTabs;
