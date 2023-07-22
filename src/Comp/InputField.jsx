import { Box, FormLabel } from '@mui/material';
import React from 'react'

const InputField = ({ labelName,
  value
}) => {

  return (
    <Box gap={1} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', width: '-webkit-fill-available', flexDirection: 'column', padding: '0 0.5em' }}>
      <FormLabel htmlFor='primary' sx={{ color: '#fff', fontSize: '1.2rem' }}>Enter List Items</FormLabel>
      <input
        type="url"
        name="primary"
        id="primary"
        spellCheck='false'
        placeholder='Enter image link...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          background: 'transparent',
          color: '#fff',
          letterSpacing: '0.5px',
          border: '1px solid gray',
          width: '-webkit-fill-available',
          height: '5vh',
          borderRadius: '0.3em',
          fontSize: '1rem',
          padding: '0.1em 1em',
        }}
        required
      />

    </Box>
  )
}

export default InputField;