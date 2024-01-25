import { NavLink } from 'react-router-dom';

// const StyledNavLink = styled(NavLink)`
//   &:link,
//   &:visited {
//     display: flex;
//     align-items: center;
//     gap: 1.2rem;

//   }

//   /* This works because react-router places the active class on the active NavLink */
//   &:hover,
//   &:active,
//   &.active:link,
//   &.active:visited {
//     color: var(--color-grey-800);
//     background-color: var(--color-grey-50);
//     border-radius: var(--border-radius-sm);
//   }

//   & svg {
//     width: 3.4rem;
//     height: 3.4rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }

//   &:hover svg,
//   &:active svg,
//   &.active:link svg,
//   &.active:visited svg {
//     color: var(--color-brand-600);
//   }
// `;

//     color: var(--color-grey-600);
//     font-size: 1.6rem;
//     font-weight: 500;
//     padding: 1.2rem 3.4rem;
//     transition: all 0.3s;

function SideNav() {
  return (
    <nav>
      <ul className='flex flex-col gap-[1.2rem]'>
        <li>
          <NavLink
            className='text-gray-600 font-bold  text-[1.6rem] py-[1.2rem] px-[3.4rem] transition-all'
            to='/dashboard'
          >
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className='text-gray-600 text-[1.6rem] font-bold py-[1.2rem] px-[3.4rem] transition-all'
            to='/products'
          >
            <span>Products</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className='text-gray-600 font-bold  text-[1.6rem] py-[1.2rem] px-[3.4rem] transition-all'
            to='/orders'
          >
            <span>Orders</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className='text-gray-600 font-bold  text-[1.6rem] py-[1.2rem] px-[3.4rem] transition-all'
            to='/profile'
          >
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
