import { names } from "../../datas/names";
import IconButton from '@mui/material/IconButton';
import Styles from '../../public/css/style.module.css';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from "react";

const GetPrfLinks = () => {
  const [ExpState, SetExpState] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={1}
    >
      {names.lamy.LinkSet.map((Link) => {
        const Url = Link.Url
        const Type = Link.Type
        const Exp = Link.Exp
        const Img = `/Linkfabicon/${Link.Img}`
        const PopId = Type + "pop"

        const handlePopoverOpen = (event) => {
          console.log(event.currentTarget.id)
          setAnchorEl(event.currentTarget);
          SetExpState(Exp);
        };

        return (
          <li className={Styles.Link} id={Type}>
            <Typography
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <IconButton
                className="Styles.LinkButton"
                aria-label={Type}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: "24px",
                  height: "24px",
                  p: 0,
                  m: 0,
                }}>
                <a href={Url} target="_blank" rel={Exp}>
                  <img src={Img} className={Styles.Linkimg} alt={Type} />
                </a>
              </IconButton>
            </Typography>
          </li>
        );
      }
      )}
      <Popover
        id="'mouse-over-popover'"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: -20,
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 0,
          horizontal: 0,
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{ExpState}</Typography>
      </Popover>
    </Stack>
  );
}


export default GetPrfLinks