import { Button, Navbar, TextInput, NavbarToggle,  NavbarCollapse,NavbarLink, Avatar,Dropdown,DropdownItem, DropdownDivider } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);

  return (
   <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Disha's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-13 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <DropdownItem>
              <span className='block text-sm'>@{currentUser.username}</span>
            </DropdownItem>
              <DropdownDivider/>
            <Link to={'/dashboard?tab=profile'}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider/>
            <Link to={'/sign-in'}>
            <DropdownItem>Sign out</DropdownItem>
            </Link>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
       <Button className="bg-transparent border-2 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
          hover:bg-gradient-to-r hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 hover:text-grey hover:shadow-lg transition-all duration-300 px-4 py-2 rounded-lg"> 
          Sign In
       </Button>
      </Link>
        )}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active={path === '/'} as='div'>
          <Link to='/'>Home</Link>
        </NavbarLink>
        <NavbarLink active={path === '/about'} as='div'>
          <Link to='/about'>About</Link>
        </NavbarLink>
        <NavbarLink active={path === '/projects'} as='div'>
          <Link to='/projects'>Projects</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}