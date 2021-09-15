import React from 'react';
import Spinner from './Spinner';

export default function LoadingContainer(): React.ReactElement {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spinner width={65} height={65} />
    </div>
  );
}
