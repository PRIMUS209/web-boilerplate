import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';
import Header from '../src/components/header';
import BasicGrid from '../src/components/page';
interface Props {}

const Home: NextPage<Props> = ({}) => (
  <main>
      <header>
        <Header />
      </header>
      <BasicGrid />
  </main>
);

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

Home.propTypes = {};

export default Home;
