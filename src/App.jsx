import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {Navbar} from './Comp';
import {Content} from './Comp';
import {Home} from './Comp';


const App = () => {
  return (
    <BrowserRouter>
      <Stack sx={{ width: '-webkit-fill-available' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Content' element={<Content />} />
        </Routes>

      </Stack>

    </BrowserRouter>
  )
}

export default App