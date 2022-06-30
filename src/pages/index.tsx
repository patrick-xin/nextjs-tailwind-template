import type { NextPage } from 'next';

import { Button } from '@/components/button';
import BaseTemplate from '@/components/template/base/BaseTemplate';

const Home: NextPage = () => {
  return (
    <div>
      <BaseTemplate sampleTextProps='base template' />
      <Button size='large'>button</Button>
      <Button disabled>Disabled</Button>
      <Button variant='outline' size='small'>
        outline
      </Button>
    </div>
  );
};

export default Home;
