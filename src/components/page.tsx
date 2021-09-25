import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: 'inherit',
  boxShadow: 'none',
}));

const styles = {

  textField: {
    marginTop: '75%',
  },
  title: {
    fontSize: '2.78vw',
  },
  title2: {
    fontSize: '2.78vw',
    letterSpacing: '2px',
  },
  box: {
    marginTop: '-3.52vw',
  },
  box1: {
    justifyContent: 'center',
    fontSize: '1vw',
    maxWidth: '584px',
  },
  boxImg: {
    paddingLeft: '5.5vw',
    width: '100%',
  },

  button: {
    marginTop: '1.38vw',
    width: '11.8vw',
    fontSize: '1.1vw',
    backgroundColor: '#3F51B5',
    textTransform: 'none',
  },
  сontent: {
    fontSize: '1.1vw',
    lineHeight: '150%',
    marginTop: '0.1%',
    opacity: '0.6',
    paddingTop: '2%',
  },
  box2: {
    marginTop: '29%',
    maxWidth: '100%',
    paddingLeft: '4rem',
  },
  сontent2: {
    paddingTop: '2%',
    lineHeight: '150%',
    fontSize: '1.1vw',
    letterSpacing: '1px',
    opacity: '0.6',
  },
}

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} >
  <Grid container spacing={1}>
  <Grid style={styles.box} item xs={0.8}>
    <Item></Item>
    </Grid>
    <Grid style={styles.box} item xs={4.2}>
  <Item style={styles.textField}>
  <div style={styles.box1}>
    <Typography variant={'h6'} style={styles.title}>
      Иструмент мониторингa для трейдера, которому доверяют
  </Typography>
    <Typography variant={'body2'} style={styles.сontent}>
    Создайте портфолио со своими фактическими успехами --- повысьте
  доверие у заинтересованных людей.
    </Typography>
  <Button style={styles.button} variant={'contained'} color="primary">
    Начать работу
  </Button>
  </div>
  </Item>
  </Grid>
  <Grid style={styles.box} item xs={1.3}>
    <Item></Item>
    </Grid>
    <Grid style={styles.boxImg} item xs={5.7}>
  <Item>
    <Image
      src={'/images/Illustration.png'}
  width={'576px'}
  height={'898px'}
  />
  </Item>
  </Grid>
    <Grid item xs={4.6}>
  <Item>
    <Image
      src={'/images/Illustration2.png'}
      width={'626px'}
      height={'554px'}
    />
  </Item>
  </Grid>
  <Grid item xs={1}>
    <Item></Item>
    </Grid>
    <Grid item xs={5.3}>
  <Item>
    <div style={styles.box2}>
      <Typography variant={'h6'} style={styles.title2}>
        Проверенные результаты
      </Typography>
      <Typography variant={'body2'} style={styles.сontent2}>
        Обьективные и сухие цифры подойдут
  не только для мониторинга своих результатов, но и для того,
        чтобы вызвать доверие <br></br> у инвесторов или своей публики.
      </Typography>
  </div>
  </Item>
  </Grid>
  <Grid item xs={1}>
    <Item></Item>
    </Grid>
    </Grid>
    </Box>
);
}