import React from 'react';

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="px-sm md:px-md lg:px-lg xl:px-xl mx-auto lg:max-w-7xl">{children}</div>;
}
