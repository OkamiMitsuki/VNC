import Styles from '../../public/css/style.module.css'
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';

const ExLoopButton = (props) => {
  switch (props.LoopType) {
    case 0:
      return (
        <div >
          <IconButton aria-label="ExLoop" onClick={() => props.onClick()}>
            <Icon icon="cil:loop" color="#ccc" height="26" />
          </IconButton>
        </div>
      )
    case 1:
      return (
        <div >
          <IconButton aria-label="ExLoop" onClick={() => props.onClick()}>
            <Icon icon="cil:loop" color="#777" height="26" />
          </IconButton>
        </div>
      )
    case 2:
      return (
        <div >
          <IconButton aria-label="ExLoop" onClick={() => props.onClick()}>
            <Icon icon="cil:loop-1" color="#777" height="26" />
          </IconButton>
        </div>
      )
  }
}

export default ExLoopButton