import { Outlet } from 'react-router-dom';
import { TopHeader } from '../TopHeader';
import { Navbar } from '../Navbar';

import { Footer } from '../Footer';

export const Layout = () => (
  <>
    <TopHeader />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
