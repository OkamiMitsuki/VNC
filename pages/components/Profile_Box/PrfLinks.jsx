import { names } from "../../../datas/names";
import Stack from '@mui/material/Stack';

const PrfLinks = (props) => {
  return (
    <Stack spacing={2} direction="row">
      <a href={names.lamy.youtube} target="_blank" rel="noopener noreferrer">Youtube
      </a>
      <a href={names.lamy.twitter} target="_blank" rel="noopener noreferrer">Twitter
      </a>
      <a href={names.lamy.homepage} target="_blank" rel="noopener noreferrer">HP
      </a>
      <a href={names.lamy.wiki} target="_blank" rel="noopener noreferrer">Wiki
      </a>
    </Stack>
  )
}

export default PrfLinks