import { Outlet } from 'react-router-dom';
import ProductTable from '../components/ProductTable';
import Sidebar from '../components/SideBar';
import UserHeader from '../components/UserHeader';

function User() {
  return (
    <div className='grid h-screen user-layout'>
      <UserHeader />
      <Sidebar />
      <main className='bg-gray-50 p-[4rem] overflow-auto'>
        <div className='max-width-[140rem] my-auto mx-auto flex flex-col gap[3.2rem]'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default User;
