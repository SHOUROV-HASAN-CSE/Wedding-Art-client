import React from 'react';

const Error = () => {
  return (
    <div className='flex justify-center mt-72'>
     <div>
     <div>
     <h1 className='text-6xl text-center font-bold text-red-600'>404</h1>
      <h2 className='text-5xl text-center font-bold text-violet-800 mb-6'>Page Not Found</h2>
     </div>
      <progress className="progress progress-primary h-5 w-60"></progress>
      <progress className="progress progress-success h-5 w-60"></progress>
      <progress className="progress  progress-secondary h-5 w-60"></progress>
     </div>
    </div>
  );
};

export default Error;