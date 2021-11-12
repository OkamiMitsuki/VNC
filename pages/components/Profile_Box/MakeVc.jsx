import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import PlayList from '../../../components/Playlist/PlayList'
import { useRef } from 'react';
import { VcData } from '../../../datas/VcLamy'


console.log(VcData);
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const MakeVc = () => {
  const [VcState, SetVcState] = useState({
    VcData: VcData,
    currentMusicIndex: 0,
  });

  //Playerの制御情報取得
  const Players = useRef(null);

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
          const ChangeCurrentMusicIndex = () => {
            SetVcState({ ...VcState, currentMusicIndex: data.ID });
            console.log(Players.current)
          }
          return (
            <div key={data.Title}>
              <ListItem >
                <Chip
                  label={data.Title}
                  color="success"
                  size="small"
                  onClick={ChangeCurrentMusicIndex}
                  sx={{
                    margin: "2px",
                    height: "o.8em",
                    lineHeight: "1.0em",
                  }}
                />
              </ListItem>
            </div>
          );
        })}
      </Paper>
      <PlayList ref={Players} VcState={VcState} SetVcState={SetVcState} />
    </div>
  );
}

export default MakeVc