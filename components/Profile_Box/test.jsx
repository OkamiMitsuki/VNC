import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function PrfButtons() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'Angular' },
    { key: 6, label: 'jQuery' },
    { key: 7, label: 'Polymer' },
    { key: 8, label: 'React' },
    { key: 9, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
    <Audio id="sound" preload="auto">
      <source src="sound.mp3" type="audio/mp3">
        <source src="sound.wav" type="audio/wav">
        </Audio>
  };

        return (
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
          {chipData.map((data) => {

            return (
              <ListItem key={data.key}>
                <Chip
                  label={data.label}
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
            );
          })}
        </Paper>
        );
}