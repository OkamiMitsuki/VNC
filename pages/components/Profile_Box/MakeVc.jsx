import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useState, useRef } from 'react';
import PlayList from '../../../components/Playlist/PlayList'
import { VcData } from '../../../datas/VcLamy'


console.log(VcData);
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const MakeVc = () => {
  const [VcState, SetVcState] = useState({
    VcData: VcData,
    currentMusicIndex: 0,
    OnPlay: 0,
  });

  // 子供のRef受け取り
  const Play = useRef();

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
          // クリックされた時の処理
          const ChangeCurrentMusicIndex = () => {
            // let state = VcState;
            // state.currentMusicIndex = data.ID;
            // state.OnPlay = state.OnPlay + 1;
            // SetVcState({ ...VcState, state });
            SetVcState({ ...VcState, currentMusicIndex: data.ID });
            Play.current.play();
            console.log(Play.current)
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
      <PlayList VcState={VcState} SetVcState={SetVcState} ref={Play} />
    </div>
  );
}

export default MakeVc