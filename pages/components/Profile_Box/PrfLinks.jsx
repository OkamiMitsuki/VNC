import GetPrfLinks from "./GetPrfLinks";
import Stack from '@mui/material/Stack';
import Styles from '../../../public/css/style.module.css';

const PrfLinks = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={1}
    >
      <GetPrfLinks />
    </Stack>
  )
}

export default PrfLinks