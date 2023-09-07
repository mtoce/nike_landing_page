import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
    <>
    <p className='py-1'><a href="#home">Home</a></p>
    <p className='py-1'><a href="#aboutus">About Us</a></p>
    <p className='py-1'><a href="#products">Products</a></p>
    <p className='py-1'><a href="#contactus">Contact us</a></p>
    </>
  )

const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img 
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className='hidden lg:visible lg:flex flex-1 justify-center items-center gap-16'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-monsterrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* TODO: Create dropdown menu with onClick function */}
                <div className='lg:hidden relative'>
                    {toggleMenu
                        ? <RiCloseLine className='animate-pulse' color='#6D6D6D' size={25} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line className='animate-pulse' color='#6D6D6D' size={25} onClick={() => setToggleMenu(true)} />
                    }
                    {/* <img 
                        src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25}
                        onClick={()=>{setToggleMenu(true)}}
                        className='cursor-pointer'
                    /> */}
                    {toggleMenu && (
                        <div className='flex flex-col justify-end items-end bg-slate-gray text-white rounded-lg px-4 py-3 right-0 min-w-max absolute scale-up-center'>
                            <Menu />
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Nav