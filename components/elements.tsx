import React from 'react';

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="font-bold font-serif text-silver text-2xl md:text-5xl">{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-bold text-gray-700 text-xl">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-bold font-serif text-gray-700 text-lg">{children}</h3>;
}

export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-gray-700">{children}</h4>;
}

export function H5({ children }: { children: React.ReactNode }) {
  return <h5 className="text-gray-700">{children}</h5>;
}

export function H6({ children }: { children: React.ReactNode }) {
  return <h6 className="text-gray-700">{children}</h6>;
}

export function Link({ children, href, ...attributes }: { children: React.ReactNode; href: string; attributes?: [] }) {
  return (
    <a href={href} {...attributes}>
      {children}
    </a>
  );
}
