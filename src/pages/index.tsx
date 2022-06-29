import type { NextPage } from 'next';

import BaseTemplate from '@/components/template/base/BaseTemplate';

const Home: NextPage = () => {
  return (
    <div>
      <BaseTemplate sampleTextProps='base template' />
    </div>
  );
};

export default Home;
