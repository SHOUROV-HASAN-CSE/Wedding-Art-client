import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const {user, logOut} = useContext(AuthContext);


    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
      }

  const menuItems1 = <>
  <li className='font-semibold'><Link to='/'>Home</Link></li>
  <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
  <li className='font-semibold'><Link to='/myreview'>My Review</Link></li>
  <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
    </>

  const menuItems2 = <>
  <li className='font-semibold'><Link to='/'>Home</Link></li>
  <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
    </>

  return (
    <div className="navbar h-20 mb-6 bg-zinc-200 px-16 ">
    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {
                    user?.uid ?
                    <>{menuItems1}</>
                    :
                    <>{menuItems2}</>
                }
                
            </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
           <h1>CREATIVE PHOTOGRAPHY</h1>
        </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            {
                user?.uid ?
                <>{menuItems1}</>
                :
                 <>{menuItems2}</>
            }
        </ul>
    </div>
    <div className="navbar-end">
        {
             user?.uid ?
            <>
            <span onClick={handleLogOut}><button className="btn btn-outline btn-secondary">Logout</button></span>
            </>
            :
            <>
                <Link to='/login'><button className="btn btn-outline btn-secondary">Login</button></Link>
            </>
        }

    </div>
</div>
  );
};

export default Header;