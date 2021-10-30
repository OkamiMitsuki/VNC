import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';



export default function PrfButtons() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <Stack spacing={2} direction="row">
      <Chip label="primary" color="success" size="small" onClick={handleClick} />
      <Button variant="contained">ボタン</Button>
      <Button variant="contained">ボタン</Button>
      <Button variant="contained">ボタン</Button>
      <Button variant="contained">ボタン</Button>
      <Button variant="contained">ボタン</Button>
      <Button variant="contained">ボタン</Button>
      <Button variant="contained">ボタン</Button>
    </Stack>
  );
}
