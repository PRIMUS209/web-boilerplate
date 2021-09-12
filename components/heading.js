import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Image from 'next/image';
import Link from 'next/link';

export default class Header extends React.Component {
  render() {
    const styles = {
      root: {
        fontFamily: 'Montserrat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 92,
        paddingTop: 40,
        width: '90%',
        fontSize: '12px',
      },
      header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      },
      headerLeft: {
        display: 'flex',
        alignItems: 'center',
      },
      headerRight: {
        display: 'flex',
        alignItems: 'center',
      },
      links: {
        textDecoration: 'none',
        color: '#FFF',
        marginLeft: '32px',
        fontSize: '16px',
        fontFamily: 'Roboto',
        fontWeight: 200
      },
      link: {
        fontFamily: 'Roboto',
        lineHeight: '24px',
        fontStyle: 'normal',
        fontWeight: 200,
        textDecoration: 'none',
        color: '#FFF',
        marginLeft: '56px',
        fontSize: '16px'
      },
      lang: {
        fontFamily: 'Roboto',
        lineHeight: '24px',
        fontStyle: 'normal',
        fontWeight: 200,
        textDecoration: 'none',
        color: '#FFF',
        marginLeft: '32px',
        fontSize: '16px',
        color: '#6A7CE0'
      },
      reg: {
        marginLeft: '60px',
        marginRight: '76px',
        padding: '5px 30px',
        maxWidth: '218px',
        maxHeight: '40px',
        fontSize: '14px'
      },
    };
    return (
      <div style={styles.root}>
          <div style={styles.header}>
            <div style={styles.headerLeft}>
                <Image
                  sx={{ flexGrow: 1 }}
                  src={'/images/logo.png'}
                  alt={'LOGO'}
                  width={48}
                  height={48}
                />
                <Link href={'/'}><a style={styles.link} >Главная</a></Link>
                <Link href={'/'}><a style={styles.links}>Блог</a></Link>
                <Link href={'/'}><a style={styles.links}>Рейтинг</a></Link>
            </div>
            <div style={styles.headerRight}>
                <Link href={'/'}><a style={styles.link} >PRO</a></Link>
                <Link href={'/'}><a style={styles.lang}>EN</a></Link>
                <Link href={'/'}><a style={styles.links}>Войти</a></Link>
              <Button style={styles.reg} color={'inherit'} variant={'outlined'}>
                Зарегистрироваться
              </Button>
            </div>
          </div>
      </div>
    );
  }
}
