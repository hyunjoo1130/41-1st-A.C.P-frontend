import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

export default function Layout() {
  return (
    <div className="container">
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
