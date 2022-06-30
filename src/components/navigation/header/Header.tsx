import Link from 'next/link';

import { Button } from '@/components/button';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

export const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className='space-x-5 m-5'>
        <Link href='/'>
          <a className='hover:underline'>Home</a>
        </Link>
      </div>
      <div className='space-x-5 m-5'>
        <Link href='/'>
          <a className='hover:underline hidden sm:inline'>Images</a>
        </Link>
        <Button>hello</Button>
      </div>
    </header>
  );
};
