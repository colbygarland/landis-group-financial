import React from 'react';

export function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}
