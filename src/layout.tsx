import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="App">

    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default Layout;