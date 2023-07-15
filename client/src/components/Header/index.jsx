import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation().pathname;

    const navigation = [
        {
            text: 'Home',
            link: '/'
        },

        {
            text: 'About Us',
            link: '/about'
        },

        {
            text: 'Contact Us',
            link: '/contact'
        },

        {
            text: 'Services',
            link: '/services'
        },
    ]

    const authNavigation = [
        {
            text: 'Login',
            link: '/login'
        },

        {
            text: 'Sign up',
            link: '/signup'
        },
    ]

    return (
        <>
            <div className='w-full h-[64px] bg-purple-700 px-[20px] flex justify-between text-white items-center'>
                <div>
                    <Link className='text-2xl font-bold' to='/'>General ERP</Link>
                </div>
                <div className='grid grid-flow-col gap-[20px] hidden md:grid'>
                    {navigation && navigation.length > 0 ? navigation.map((item) => (
                        <Link className={`text-md font-medium hover:text-purple-950 ${location == item.link ? 'text-purple-950' : ''}`} key={item.link} to={item.link}> {item.text} </Link>
                    )):(
                        <></>
                    )}
                </div>
                <div className='grid grid-flow-col gap-[20px] hidden md:grid'>
                    {authNavigation && authNavigation.length > 0 ? authNavigation.map((item) => (
                        <Link className={`text-md font-medium hover:text-purple-950 ${location === item.link ? 'text-purple-950' : ''}`} key={item.link} to={item.link}> {item.text} </Link>
                    )):(
                        <></>
                    )}
                </div>
                <div className='block md:hidden'>
                    <button onClick={() => {
                        setIsOpen(!isOpen);
                    }}>
                        <FontAwesomeIcon className='text-2xl hover:text-purple-900 cursor-pointer' icon={faBars} />
                    </button>
                </div>  
            </div>
            <div className={`grid bg-purple-100 text-black text-center ${isOpen ? 'grid' : 'hidden'} md:hidden`}>
                    {navigation && navigation.length > 0 ? navigation.map((item) => (
                        <Link className={`text-md font-medium hover:text-white hover:bg-purple-900 py-[10px] duration-200 ${location == item.link ? 'text-purple-950' : ''}`} key={item.link} to={item.link}> {item.text} </Link>
                    )):(
                        <></>
                    )}

                    {authNavigation && authNavigation.length > 0 ? authNavigation.map((item) => (
                        <Link className={`text-md font-medium hover:text-white hover:bg-purple-900 py-[10px] duration-200 ${location === item.link ? 'text-purple-950' : ''}`} key={item.link} to={item.link}> {item.text} </Link>
                    )):(
                        <></>
                    )}
            </div>
        </>
    );
}

export default Header;
