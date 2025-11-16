
import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const MainLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col max-w-md mx-auto bg-background-dark text-text-dark">
      <main className="flex-1 pb-24">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
