import PropTypes from 'prop-types';
import Logo from '../components/icons/Logo';
import ArrowRight from '../components/icons/ArrowRight';
import Email from '../components/icons/Email';
import Phone from '../components/icons/Phone';
import Close from '../assets/img/icons/Close.svg';
import Menu from '../assets/img/icons/Menu.svg';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCart from '../components/icons/ShoppingCart';

export default function WebLayout({children, cartItems = null}){
    const [open, setOpen] = useState(false);
    const location = useLocation();
    return (
        <>
            <nav className="flex fixed shadow-md md:shadow-sm top-0 left-0 w-full z-30 justify-between items-center self-stretch py-2 px-4 md:px-6 xl:px-0 bg-pd-white max-w-[1200px] mx-auto ">
                <Link to="/" className="logo py-2 w-[144px]  md:w-[213px]" href="#">
                    <Logo />
                </Link>
                <ul className="hidden md:flex gap-0 lg:gap-6">
                    <li><Link to="/" className="uppercase p-2 lg:p-4 font-semibold">Home</Link></li>
                    <li><Link to="/pricing" className="uppercase p-2 lg:p-4 font-semibold">Pricing</Link></li>
                    <li><Link to="/events" className="uppercase p-2 lg:p-4 font-semibold">Events</Link></li>
                    <li><Link to="/company" className="uppercase p-2 lg:p-4 font-semibold">Company</Link></li>
                    {/* <a className="p-4 uppercase font-semibold" href="#">Login</a> */}
                </ul>
                
                {
                    location.pathname == '/' && 
                    <div className="hidden items-center gap-2 py-2 md:flex">
                        <ShoppingCart text={cartItems}/>
                        <Link to="/cart" className="py-4 px-9 flex items-center gap-2 bg-pd-black text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat"><span className="hide-at-half-md">Go To </span>Cart<ArrowRight className="h-5 w-5"/></Link>
                    </div>
                }
                
                <div className="flex items-center gap-2 py-2 md:hidden">
                    <Link to="/cart"><ShoppingCart text={cartItems}/></Link>
                    <button className="flex w-12 h-12 justify-end items-center" onClick={()=>setOpen(true)} >
                        <img src={Menu} alt="" />
                    </button>
                </div>
            </nav>
            <div className={`${open?'flex':'hidden'} md:hidden fixed top-0 left-0 w-screen h-screen z-40 bg-pd-black/50 justify-end pd-off-canvas`}>
                <nav className="relative right-0 w-[80%] w-max-[300px] z-40 bg-pd-white rounded-s-3xl py-2 px-4 md:px-6 xl:px-0" onBlur={()=>setOpen(false)}>
                    <div className="flex justify-end py-2">
                        <button className="flex w-12 h-12 justify-end items-center" onClick={()=>setOpen(false)}>
                            <img src={Close} alt="" />
                        </button>
                    </div>
                    <div className="py-16 flex flex-col justify-between" style={{ height: 'calc(100% - 64px)' }}>
                        <ul className="flex flex-col gap-6">
                            <li><Link className="uppercase p-4 font-semibold" to="/">Home</Link></li>
                            <li><Link  className="uppercase p-4 font-semibold" to="/pricing">Pricing</Link></li>
                            <li><Link  className="uppercase p-4 font-semibold" to="/events">Events</Link></li>
                            <li><Link  className="uppercase p-4 font-semibold" to="/company">Company</Link></li>
                            {/* <a className="p-4 uppercase font-semibold" href="#">Login</a> */}
                        </ul>
                        {
                            location.pathname == '/' && 
                            <button className="mx-4 py-4 px-9 flex items-center justify-center gap-2 bg-pd-red text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat">Go To Cart<ArrowRight className="h-5 w-5"/></button>
                        }
                    </div>
                </nav>
            </div>
            <div className="mt-20 mb-28 lg:mb-36">{children}</div>
            <footer className="max-w-[1200px] mx-auto px-4 md:px-6 xl:px-0 py-14 flex justify-between gap-6 lg:gap-12 flex-wrap lg:flex-nowrap">
                <div className="flex flex-col justify-between max-w-96 gap-2 md:gap-6 lg:gap-12">
                    <Logo />
                    <p className="font-normal pd-p py-1">Shop the latest models from top brands at unbeatable prices. Limited time offer - don't miss out!</p>
                </div>
                <div className="flex justify-between gap-3 md:gap-6 lg:gap-16 flex-wrap md:flex-nowrap">
                    <div className="flex flex-col gap-0 md:gap-3 w-full">
                        <h3 className="text-[22px] font-extrabold font-montserrat">Company</h3>
                        <ul>
                            <li className="font-normal py-1 font-montserrat leading-5 lg:leading-7"><a href="#">About Us</a></li>
                            <li className="font-normal py-1 font-montserrat leading-5 lg:leading-7"><a href="#">Products Digital</a></li>
                            <li className="font-normal py-1 font-montserrat leading-5 lg:leading-7"><a href="#">Customer Reviews</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-0 md:gap-3 w-full">
                        <h3 className="text-[22px] font-extrabold font-montserrat">Information</h3>
                        <ul>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#">Help Center</a></li>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#">Payment Methods</a></li>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#">Return & Refund</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-0 md:gap-3 w-full">
                        <h3 className="text-[22px] font-extrabold font-montserrat">Contact</h3>
                        <ul>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#"><Email className="inline-block me-2"/>(+1) 123-456-7890</a></li>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#"><Phone className="inline-block me-2"/>email@youremail.com</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
WebLayout.propTypes = {
	children: PropTypes.node,
    cartItems: PropTypes.number
};