

import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function VcButton({ id, src, title }) {
  const handleClick = () => {
    console.info({ id });
    console.info({ src });
  };
  return (
    <Chip
      label={title}
      color="success"
      size="small"
      onClick={handleClick}
      sx={{
        margin: "2px",
        height: "o.8em",
        lineHeight: 0.8
      }}
    />
  );
}