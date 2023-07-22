import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Navbar } from './Comp';
import { Home } from './Comp';


const App = () => {
  return (
    <BrowserRouter>
      <Stack sx={{ width: '-webkit-fill-available' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Stack>

    </BrowserRouter>
  )
}

export default App