import React from 'react';

export interface IBaseTemplate {
  sampleTextProps: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProps }) => {
  return (
    <div className='bg-blue-300 container mx-auto text-white'>
      {sampleTextProps}
    </div>
  );
};

export default BaseTemplate;
