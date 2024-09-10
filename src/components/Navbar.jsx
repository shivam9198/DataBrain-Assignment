import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav  className='max-w-screen-xl mx-auto  p-3  border-b-[2px] border-zinc-700'>
      <ul  className=' flex justify-center place-items-center  gap-20 items-center font-semibold'>
        <li><Link to="/step-form">Step Form</Link></li>
        <li><Link to="/ecommerce">E-Commerce Page</Link></li>
        <li><Link to="/api-data-list">API Data List</Link></li>
      </ul>
    </nav>
  );
} 

export default NavBar;
