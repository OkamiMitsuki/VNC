import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function VcButton(props) {
  const title = props.title
  const size = props.size
  const handleClick = () => {
  };
  return (
    <Chip
      label={title}
      color="success"
      size={size}
      onClick={handleClick}
      sx={{
        margin: "2px",
        height: "o.8em",
        lineHeight: 0.8
      }}
    />
  );
}