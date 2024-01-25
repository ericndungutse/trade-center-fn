import React from 'react';
import SideNav from './SideNav';

function Sidebar() {
  return (
    <aside className='flex flex-col gap-[3.2rem] row-span-full bg-white py-[3.2rem] px-[2.4rem] border '>
      <h1>PRODUCERS CONNECT</h1>
      <SideNav />
    </aside>
  );
}

export default Sidebar;
