import { NavLink } from 'react-router-dom';

function SideNav() {
  return (
    <nav>
      <ul className='flex flex-col gap-[1.2rem]'>
        <li>
          <NavLink
            className='text-gray-600 font-bold  text-[1.6rem] py-[1.2rem] px-[3.4rem] transition-all'
            to='/user/dashboard'
          >
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className='text-gray-600 text-[1.6rem] font-bold py-[1.2rem] px-[3.4rem] transition-all'
            to='/user/user/products'
          >
            <span>Products</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className='text-gray-600 font-bold  text-[1.6rem] py-[1.2rem] px-[3.4rem] transition-all'
            to='/user/orders'
          >
            <span>Orders</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className='text-gray-600 font-bold  text-[1.6rem] py-[1.2rem] px-[3.4rem] transition-all'
            to='/user/profile'
          >
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
