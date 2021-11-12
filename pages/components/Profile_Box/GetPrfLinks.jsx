import { names } from "../../../datas/names";
import IconButton from '@mui/material/IconButton';
import Styles from '../../../public/css/style.module.css';
import Stack from '@mui/material/Stack';
import Image from 'next/image'

const GetPrfLinks = () => {
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

        return (
          <div key={Link.Type}>
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
              <a href={Url} target="_blank" rel="noopener noreferrer">
                <img src={Img} className={Styles.Linkimg} />
              </a>
            </IconButton>
          </div>
        );
      }
      )}
    </Stack>
  );
}

export default GetPrfLinks