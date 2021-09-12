import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';
import Header from '../components/heading'
import Boxbox from '../components/boxbox'
import Box from '../components/box'
interface Props {}

const Home: NextPage<Props> = ({}) => <main>
    <header>
      <Header/>
    </header>
      <Boxbox/>
      <Box/>
</main>;

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

Home.propTypes = {};

export default Home;
