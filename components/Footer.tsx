import { SITE_NAME } from '../strings';
import { Link } from './elements';

function getCopyrightDate() {
  const now = new Date();
  const currentYear = now.getFullYear();
  if (currentYear > 2022) {
    return `2022 - ${currentYear}`;
  }
  return currentYear;
}

export function Footer() {
  return (
    <footer className="bg-gold text-white font-serif p-sm md:px-md lg:px-lg xl:px-xl ">
      <small>
        {SITE_NAME} - {getCopyrightDate()} All rights reserved. Website by {/* @ts-ignore */}
        <Link className="font-bold" href="https://colbygarland.ca" target="_blank">
          Colby Garland
        </Link>
      </small>
    </footer>
  );
}