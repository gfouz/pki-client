import Home from 'icons/Home';
import FileSearch from 'icons/FileSearch';
import Link from 'next/link';

export interface IRoutesProps {
  path: string;
  link: React.ReactNode;
  icon: React.ReactNode;
}

export const Routes: IRoutesProps[] = [
  {
    path: '/',
    icon: <Home color="#ffffff" />,
    link: <Link href="/">Homepage</Link>,
  },
  {
    path: '/provincia',
    icon: <FileSearch color="#ffffff" />,
    link: <Link href="/provincia">Provincia</Link>,
  },
  {
    path: '/municipio',
    icon: <FileSearch color="#ffffff" />,
    link: <Link href="/municipio">Municipio</Link>,
  },
];
