import React, { Component } from 'react';
import Button from '@mui/material/Button';
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
        marginLeft: '6.39vw',
        paddingTop: '2.8vw',
        width: '90%',
        fontSize: '0.8vw',
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
        marginRight: '6.39vw'
      },
      links: {
        textDecoration: 'none',
        color: '#FFF',
        marginLeft: '2.23vw',
        fontSize: '1.1vw',
        fontFamily: 'Roboto',
        fontWeight: 200,
      },
      link: {
        fontFamily: 'Roboto',
        lineHeight: '1.67vw',
        fontStyle: 'normal',
        fontWeight: 200,
        textDecoration: 'none',
        color: '#FFF',
        marginLeft: '3.89vw',
        fontSize: '1.1vw',
      },
      lang: {
        fontFamily: 'Roboto',
        lineHeight: '1.67vw',
        fontStyle: 'normal',
        fontWeight: 200,
        textDecoration: 'none',
        color: '#FFF',
        marginLeft: '2.22vw',
        fontSize: '1.1vw',
        color: '#6A7CE0',
      },
      reg: {
        marginLeft: '4.17vw',
        padding: '0.9vw 5.138vw',
        maxWidth: '15.1vw',
        maxHeight: '2.883vw',
        fontSize: '0.972vw',
        textTransform: 'none',
        letterSpacing: '1px'
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
            <Link href={'/'}>
              <a style={styles.link}>Главная</a>
            </Link>
            <Link href={'/'}>
              <a style={styles.links}>Блог</a>
            </Link>
            <Link href={'/'}>
              <a style={styles.links}>Рейтинг</a>
            </Link>
          </div>
          <div style={styles.headerRight}>
            <Link href={'/'}>
              <a style={styles.link}>PRO</a>
            </Link>
            <Link href={'/'}>
              <a style={styles.lang}>EN</a>
            </Link>
            <Link href={'/'}>
              <a style={styles.links}>Войти</a>
            </Link>
            <Button style={styles.reg} color={'inherit'} variant={'outlined'}>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
