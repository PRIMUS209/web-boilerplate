import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';

export default class Boxbox extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textTransform: 'none',
        marginLeft: 92,
        fontFamily: 'Montserrat',
      },
      box1: {
        width: '450px',
        height: '168px',
        left: '116px',
        top: '312px',
        fontFamily: 'Roboto',
        justifyContent: 'center',
        fontSize: '18px',
      },
      button: {
        marginTop: '20px',
        backgroundColor: '#3F51B5',
        textTransform: 'none'
      },
      box2: {
        marginTop: '220px',
        marginRight: '30px',
      },
      сontent: {
        fontWeight: 50,
        fontSize: '16px',
      },
      img: {
        Top: '-47px',
        Left: '833px',
      },
    };
    return (
      <div style={styles.container}>
        <div style={styles.box1}>
          <h1>Инструмент мониторингa для трейдера, которому доверяют</h1>
          <p style={styles.сontent}>
            {' '}
            Создайте портфолио со своими фактическими успехами --- повысьте
            доверие у заинтересованных людей
          </p>
          <Button style={styles.button} variant={'contained'} color="primary">
            Начать работу
          </Button>
        </div>
        <div style={styles.box2}>
          <Image
            style={styles.img}
            src={'/images/Illustration.png'}
            width={'476px'}
            height={'698px'}
          />
        </div>
      </div>
    );
  }
}
