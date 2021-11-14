import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ReadonryTxtBox() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-read-only-input"
          label="音声ファイル"
          defaultValue="YAGOO.mp3"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </div>
    </Box>
  );
}