import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const storedTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', storedTheme)

    }, [theme])
    const handleThemeToggle = (e) => {

        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (

        <div className="navbar bg-base-100 px-4 sm:px-8 md:px-12 shadow-lg fixed z-10">
            <div className="flex-1">
                <a className="btn btn-ghost text- text-secondary gap-0 text-2xl font-bold">Byte <span className="text-primary">Blaze</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-1">

                    <li>
                        <NavLink to='/' style={
                            ({ isActive }) => {
                                return {
                                    color: isActive ? '' : ''
                                }
                            }
                        }>
                            Home
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to='/blogs' style={
                            ({ isActive }) => {
                                return {
                                    color: isActive ? '' : ''
                                }
                            }
                        }>Blogs</NavLink>
                    </li>


                    <li>
                        <NavLink to='/bookmarks' style={
                            ({ isActive }) => {
                                return {
                                    color: isActive ? '' : ''
                                }
                            }
                        }>Bookmarks</NavLink>
                    </li>

                </ul>

                <label className="grid cursor-pointer place-items-center">
                    <input
                        onChange={handleThemeToggle}
                        type="checkbox"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </div>

    );
};

export default NavBar;