import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { VcData } from '../../../datas/VcLamy'
import Styles from '../../../public/css/style.module.css'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const MakeVc = (props) => {
  // 変数整理
  console.log(props.VcState);
  const SetVcState = props.SetVcState;
  const VcState = props.VcState;
  const Play = props.Play;
  const Category = props.Category;

  let size
  let state
  if (Category === "自己紹介") { size = "medium" }
  else { size = "small" }

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'flexStart',
        flexWrap: 'wrap',
        listStyle: 'none',
        backgroundColor: "rgba(124, 135, 166, 0.40)",
        p: "2px",
        m: 0,
      }}
      component="ul"
    >

      {VcData[Category].map((data) => {
        // クリックされた時の処理
        const ChangeCurrentMusicIndex = () => {
          state = VcState
          state.currentMusicIndex = data.Id;
          state.Category = Category;
          SetVcState({ ...VcState, state });
          Play();
        }
        return (
          <div key={data.Title}>
            <ListItem >
              <Chip
                label={data.Title}
                color="success"
                size={size}
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
  );
}

export default MakeVc