import React from 'react';
import Footer from './footer';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="App">

    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default Layout;