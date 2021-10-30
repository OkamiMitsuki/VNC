import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import GetVcData from './GspVcData';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function MakeVc() {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        backgroundColor: "rgba(124, 135, 166, 0.40)",
        p: "2px",
        m: 0,
      }}
      component="ul"
    >
      {GetVcData.map((data) => {
        const handleClick = () => {
          console.info({ data.ID });
          console.info({ data.Src });
        };
        return (
          <div>
            <ListItem key={data.key}>
              <Chip
                label={data.Title}
                color="success"
                size="small"
                onClick={handleClick}
                sx={{
                  margin: "2px",
                  height: "o.8em",
                  lineHeight: 0.8
                }}
              />
            </ListItem>
            <VcButton title={"aaa"} src={"aa"} id={"a"} />
            <VcButton title={"bbb"} src={"bb"} id={"b"} />
            <VcButton title={"ccc"} src={"cc"} id={"c"} />
          </div>
        );
      })}
    </Paper>
  );
}