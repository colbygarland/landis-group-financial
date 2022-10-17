import React from 'react';

export function Container({ children, noPadOnMobile }: { children: React.ReactNode; noPadOnMobile?: boolean }) {
  return <div className={`${!noPadOnMobile && 'px-sm '} md:px-md lg:px-lg xl:px-xl mx-auto lg:max-w-7xl`}>{children}</div>;
}
