import Head from 'next/head';
import React from 'react';

import { Footer } from '@/components/navigation/footer';
import { Header } from '@/components/navigation/header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

export const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <Header />
        <main className='px-5'>{children}</main>
        <div className='m-auto' />
        <Footer>Footer</Footer>
      </div>
    </>
  );
};
