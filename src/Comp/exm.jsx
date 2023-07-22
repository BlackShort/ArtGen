import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Preview from "../assets/react.svg";
import Delete from "@mui/icons-material/Delete";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

// import { GetRandomPrompt } from "../utils";
// import { downloadImg } from "../utils";
import {Loader} from "./index";
import { Box, Button, Stack, FormLabel, Typography } from "@mui/material";
import Textarea from "@mui/joy/Textarea/Textarea";


const Home = () => {

  const [form, setForm] = useState({
    heading: "",
    image: "",
    url: "",
    info: "",
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);

  const [heading, setHeading] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [info, setInfo] = useState('');



  const DataChange = async (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData(true);
    }, 2000);
  };

  const PromptSumbit = async (e) => {
    e.preventDefault();
  };

  return (
    <Stack p={"3% 3%"} height={'calc(100vh - (7vh + 6em))'}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          border: "2px solid gray",
          borderRadius: "10px",
          height: "100%",
          overflow: 'hidden'
        }}
      >
        <form
          onSubmit={PromptSumbit}
          style={{
            background: 'transparent',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            width: "35%",
            borderRight: "0.5px solid gray",
            padding: "1em",
            gap: "2em",
            overflowY: 'scroll',
            height: "-webkit-fill-available",
          }}
        >

          <Box gap={1} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', width: '-webkit-fill-available', flexDirection: 'column', padding: '0 0.5em' }}>
            <FormLabel htmlFor='heading' sx={{ color: '#fff', fontSize: '1.2rem' }}>Add Heading</FormLabel>
            <input type="text" name="heading"
              spellCheck='false' id="heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              style={{
                background: 'transparent',
                color: '#fff',
                letterSpacing: '0.5px',
                border: '1px solid gray',
                width: '-webkit-fill-available',
                height: '5vh',
                borderRadius: '0.3em',
                fontSize: '1rem',
                padding: '0.3em 1em',
              }} />
          </Box>

          <Box gap={1} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', width: '-webkit-fill-available', flexDirection: 'column', padding: '0 0.5em' }}>
            <FormLabel htmlFor='image' sx={{ color: '#fff', fontSize: '1.2rem' }}>Add Image</FormLabel>
            <input type="url" name="image" id="image"
              spellCheck='false'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              style={{
                background: 'transparent',
                color: '#fff',
                letterSpacing: '0.5px',
                border: '1px solid gray',
                width: '-webkit-fill-available',
                height: '5vh',
                borderRadius: '0.3em',
                fontSize: '1rem',
                padding: '0.3em 1em',
              }} />
          </Box>

          <Box gap={1} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', width: '-webkit-fill-available', flexDirection: 'column', padding: '0 0.5em' }}>
            <FormLabel htmlFor='url' sx={{ color: '#fff', fontSize: '1.2rem' }}>Add Link</FormLabel>
            <input type="url" name="url" id="url"
              spellCheck='false'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{
                background: 'transparent',
                color: '#fff',
                letterSpacing: '0.5px',
                border: '1px solid gray',
                width: '-webkit-fill-available',
                height: '5vh',
                borderRadius: '0.3em',
                fontSize: '1rem',
                padding: '0.3em 1em',
              }} />
          </Box>

          <Box gap={1} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', width: '-webkit-fill-available', flexDirection: 'column', padding: '0 0.5em' }}>
            <FormLabel sx={{ color: "#fff", fontSize: "1.2rem" }}>
              Enter Text
            </FormLabel>
            <Textarea
              minRows={9}
              maxRows={9}
              id='info'
              name='info'
              placeholder='Enter your text here...'
              value={info}
              onChange={(e) => setInfo(e.target.value)}

              sx={{
                width: '-webkit-fill-available',
                fontSize: '1rem',
                letterSpacing: '0.5px',
                background: "transparent",
                color: "#fff",
                "&:focus": {
                  borderColor: "gray",
                  color: "#fff",
                },
                "&:hover": {
                  borderColor: "gray",
                  color: "#fff",
                },
                "&:before": {
                  boxShadow: "none",
                },
              }}
            />
          </Box>

          <Box display={'flex'} justifyContent={'space-between'} margin={'auto 0.5em'}>
            <Button
              type="reset"
              variant="contained"
              size="small"
              color="error"
              endIcon={<Delete />}
            >
              Reset
            </Button>
            <Button
              type="button"
              variant="contained"
              size="small"
              color="primary"
              endIcon={<CreateOutlinedIcon />}
            >
              Generate
            </Button>
          </Box>

        </form>

        <div
          style={{
            width: "75%",
            borderLeft: "0.5px solid gray",
            padding: "1.5em 2em",
            display: 'flex',
            position: 'relative',
            overflowY: 'scroll',
            height: "-webkit-fill-available",
          }}>
          {/* {loading ? (
            <Box
              sx={{
                width: "-webkit-fill-available",
                height: "-webkit-fill-available",
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0,0,0,0.5)",
                borderRadius: "0 1em 1em 0",
              }}
            >
              <Loader />
            </Box>
          ) : (
            data ?
              (
                <Stack>
                  <Typography variant="h5">{heading}</Typography>
                  <img src={image} alt="" />
                  <a href={url}></a>
                  <Typography>{info}</Typography>

                </Stack>
              ) : (
                <Stack width={'-webkit-fill-available'} alignItems={'center'} justifyContent={'center'}>
                  <Typography variant="h5" sx={{ userSelect: 'none', color: '#c3c3c3' }}>
                    Create your webpage...
                  </Typography>
                </Stack>
              )
          )} */}

          <Stack width={'-webkit-fill-available'} gap={'1em'}>
            <Typography variant="h5">{heading}</Typography>
            <Typography>{info}</Typography>
            <img src={image} alt="" style={{width:'20em',height:'13em',objectFit:'fill',borderRadius:'8px',float:'right'}}/>
            <a href={url}>{url}</a>

          </Stack>

        </div>
      </Box>
    </Stack >
  )
}

export default Home