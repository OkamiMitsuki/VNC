import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function MakeVc({ VcData }) {
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
      {VcData.map((data) => {
        const handleClick = () => {
          console.info({ ID: data.ID });
          console.info({ Src: data.Src });
        };
        return (
          <div key={data.Title}>
            <ListItem >
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
          </div>
        );
      })}
    </Paper>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/VcLamy');
  const VcData = await res.json();

  console.log('getStaticProps called', { VcData });
  return {
    props:
      { VcData },
  }
}

export default MakeVc