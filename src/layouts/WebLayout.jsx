import PropTypes from 'prop-types';
import Logo from '../components/icons/Logo';
import ArrowRight from '../components/icons/ArrowRight';
import Email from '../components/icons/Email';
import Phone from '../components/icons/Phone';

export default function WebLayout({children}){
    return (
        <>
            <nav className="flex justify-between items-center self-stretch py-2 px-6 bg-pd-white max-w-[1200px] mx-auto">
                <a className="logo py-2" href="#">
                    <Logo />
                </a>
                {/* <ul className="flex gap-6">
                    <li className="uppercase p-4 font-semibold"><a href="#">Home</a></li>
                    <li className="uppercase p-4 font-semibold"><a href="#">Pricing</a></li>
                    <li className="uppercase p-4 font-semibold"><a href="#">Events</a></li>
                    <li className="uppercase p-4 font-semibold"><a href="#">Company</a></li>
                    <a className="p-4 uppercase font-semibold" href="#">Login</a>
                </ul> */}
                <div className="flex items-center gap-2 py-2">
                    <a className="flex w-12 h-12 rounded-full justify-center items-center border-[3px] border-pd-black" href="#"><span className="font-semibold pd-p">{1}</span></a>
                    <button className="py-4 px-9 flex items-center gap-2 bg-pd-black text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat">Go To Cart<ArrowRight className="h-5 w-5"/></button>
                </div>
            </nav>
                {children}
            <footer className="max-w-[1200px] mx-auto px-6 py-14 flex justify-between gap-12 flex-wrap lg:flex-nowrap">
                <div className="flex flex-col justify-between max-w-96 gap-12">
                    <Logo />
                    <p className="font-normal pd-p py-1">Shop the latest models from top brands at unbeatable prices. Limited time offer - don't miss out!</p>
                </div>
                <div className="flex justify-between gap-16 flex-wrap md:flex-nowrap">
                    <div className="flex flex-col gap-3 w-full">
                        <h3 className="text-[22px] font-extrabold font-montserrat">Company</h3>
                        <ul>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#">About Us</a></li>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#">Products Digital</a></li>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#">Customer Reviews</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <h3 className="text-[22px] font-extrabold font-montserrat">Information</h3>
                        <ul>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#">About Us</a></li>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#">Products Digital</a></li>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#">Customer Reviews</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6 w-full">
                        <h3 className="text-[22px] font-extrabold font-montserrat">Contact</h3>
                        <ul>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#"><Email className="inline-block me-2"/>About Us</a></li>
                            <li className="font-normal py-1 font-montserrat leading-7"><a href="#"><Phone className="inline-block me-2"/>Products Digital</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
WebLayout.propTypes = {
	children: PropTypes.node,
};