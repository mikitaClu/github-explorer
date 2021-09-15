import React from 'react';

export default function EmptyResultContainer({ label }: { label: string }): React.ReactElement {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h3 className="font-bold text-lg md:text-xl text-center">{label}</h3>
    </div>
  );
}
