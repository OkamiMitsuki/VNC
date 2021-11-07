import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import PlayList from '../Playlist/PlayList function'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
function MakeVc({ VcData }) {
  const [VcState, SetVcState] = useState({
    VcData: VcData,
    currentMusicIndex: 0,
  });
  console.log("State:Index:", VcState.currentMusicIndex)
  // // PlayList用ステート書き換え関数
  // // 前の曲へ　戻るボタンが押された時
  // const handleClickPrevious = () => {
  //   const IsVcState = () => {
  //     currentMusicIndex === 0 ? VcData.length - 1 : currentMusicIndex - 1
  //   }
  //   SetVcState({ ...VcState, currentMusicIndex: IsVcState })
  // }
  // // 次の曲へ　次へボタンが押される　か　Loopモードが1の時で曲が終了した時
  // const handleClickNext = () => {
  //   const IsVcState = () => {
  //     currentMusicIndex < VcData.length - 1 ? VcData.length + 1 : 0
  //   }
  //   SetVcState({ ...VcState, currentMusicIndex: IsVcState })
  // }

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
                    lineHeight: 0.8
                  }}
                />
              </ListItem>
            </div>
          );
        })}
      </Paper>
      <PlayList VcData={VcData} VcState={VcState} SetVcState={SetVcState} />
    </div>
  );
}

export default MakeVc