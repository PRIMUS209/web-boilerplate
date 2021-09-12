import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SvgIcon from '@mui/material/SvgIcon';
import Image from 'next/image';

export default class Box extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '-50px',
      },
      page: {
        width:'90%',
        display: 'flex',
        alignItems: 'space-between',
      },
      box1 : {
        left: '116px',
        top: '312px',
      },
      box2 : {
        marginTop: '130px',
        marginLeft: '160px',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '30px',
        width: '600px',
        height: '570px'
      },
      сontent: {
        fontWeight: 400,
        fontSize: '16px',
        alignItems: 'center',
        fontFamily: 'Montserrat',
      },
      img: {
        alignItems: 'center',
      }
    };
    return (
      <div style={styles.container}>
        <div style={styles.page}>
        <div style={styles.box1}>
          <Image style={styles.img} src={'/images/Illustration2.png'} width={'626px'} height={'554px'}/>
        </div>
        <div style={styles.box2}>
          <h1>Проверенные результаты</h1>
          <p style={styles.сontent}> Обьективные и сухие цифры подойдут
            не только для мониторинга своих результатов, но и для того,
            чтобы вызвать доверие  у инвесторов или своей публики.</p>
        </div>
        </div>
      </div>
    );
  }
}