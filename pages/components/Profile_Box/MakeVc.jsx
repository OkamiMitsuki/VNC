import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import PlayList from '../Playlist/PlayList'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
function MakeVc({ VcData }) {
  const [IsVcID, SetVcID] = useState(0);
  return (
    <div>
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
            SetVcID(data.ID);
          }
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
      <PlayList VcData={VcData} VcID={IsVcID} />
    </div>
  );
}

export default MakeVc