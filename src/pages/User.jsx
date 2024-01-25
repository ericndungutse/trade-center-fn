import Sidebar from '../components/SideBar';
import UserHeader from '../components/UserHeader';

function User() {
  return (
    <div className='grid h-screen user-layout'>
      <UserHeader />
      <Sidebar />
      <>Content</>
    </div>
  );
}

export default User;
