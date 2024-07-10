import { useState } from 'react';
import WebLayout from "../layouts/WebLayout";
import { Link, useLocation } from "react-router-dom";
import ChevronRight from "../components/icons/ChevronRight";
import Plus from "../components/icons/Plus"
// import Minus from "../components/icons/Minus"
// import Percent from "../components/icons/Percent"
import Trailing from "../components/icons/Trailing";
import amex from "../assets/img/icons/amex.svg";
import discover from "../assets/img/icons/discover.svg";
import Modal from "../components/Modal";
import AddPayment from "../components/parts/AddPayment";
import ShowSuccess from "../components/parts/ShowSuccess";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Checkout(){
    const [showPayment, setShowPayment] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
    const location = useLocation();
    const { price } = location.state || { price: 0 };
    const { discount } = location.state || { discount: 0 };
    const { coupon } = location.state || { coupon: 0 };

    const setOpen = () => {
      setShowPayment(false);
      setShowSuccess(false);
    }

    return (
        <WebLayout cartItems={cartItems.length}>
          <Modal open={showPayment} setOpen={setOpen}>
            <AddPayment></AddPayment>
          </Modal>
          <Modal open={showSuccess} setOpen={setOpen}>
            <ShowSuccess></ShowSuccess>
          </Modal>
        <div className="max-w-[1200px] mx-auto mt-6 px-4 md:px-6 xl:px-0">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="flex flex-col grow w-full md:w-[67%] gap-8">
              <div>
                <div className="flex gap-5 items-center self-start whitespace-nowrap">
                  <Link to="/cart" className="self-stretch my-auto text-3xl font-bold tracking-tighter leading-10 text-pd-mid-gray">Cart</Link>
                  <ChevronRight />
                  <div className="self-stretch pd-h2 tracking-tighter text-pd-black">Checkout</div>
                </div>
                <div className="mt-16 pd-h3 font-semibold leading-8 text-pd-black">Payment Method</div>
              </div>
              <div className="flex flex-col justify-between py-2 mt-6 rounded border border-black border-solid max-md:max-w-full">
{/* starts here */}
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full p-2">
                  <div className="flex gap-0 md:gap-5 justify-between flex-col md:flex-row">
                    <div className="flex gap-3.5">
                      <div className="flex flex-col justify-center p-0.5">
                        <div className="flex flex-col justify-center items-center">
                          <input type="radio" name="radio_payment" id="rad1" className="w-6 h-6 accent-pd-blue" />
                        </div>
                      </div>
                      <img loading="lazy" src={amex} className="shrink-0 my-auto w-6 aspect-[1.41]"/>
                      <div className="pd-p font-semibold leading-6 text-pd-black"> •••• 6754</div>
                    </div>
                    <div className="pd-p leading-6 text-gray-400">Expires 06/2027</div>
                  </div>
                  <button className="text-pd-red pd-p font-semibold">Remove</button>
                </div>
              
                <div className="shrink-0 mt-2 h-px border border-pd-black border-solid max-md:max-w-full" />

                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full p-2">
                  <div className="flex gap-0 md:gap-5 justify-between flex-col md:flex-row">
                    <div className="flex gap-3.5">
                      <div className="flex flex-col justify-center p-0.5">
                        <div className="flex flex-col justify-center items-center">
                          <input type="radio" name="radio_payment" id="rad1" className="w-6 h-6 accent-pd-blue" />
                        </div>
                      </div>
                      <img loading="lazy" src={discover} className="shrink-0 my-auto w-6 aspect-[1.41]"/>
                      <div className="pd-p font-semibold leading-6 text-pd-black"> •••• 3754</div>
                    </div>
                    <div className="pd-p leading-6 text-gray-400">Expires 06/2025</div>
                  </div>
                  <button className="text-pd-red pd-p font-semibold">Remove</button>
                </div>

              </div>

              <div className="shrink-0 mt-8 h-px bg-black border border-black border-solid max-md:max-w-full" />

              <button className="flex gap-4 justify-center self-start mt-8 font-semibold leading-6 rounded font-montserrat" onClick={()=>setShowPayment(true)}>
                <Plus />
                <span>Add Payment method</span>
              </button>


            </div>    
            {/* new component */}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch p-8 m-auto w-full pd-p font-montserrat leading-6 bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10">
              <h3 className="pd-h3 font-extrabold leading-8 text-pd-black">Order Summary</h3>
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-pd-black">
                <p>Price</p>
                <p>${price}</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-pd-black">
                <p>Discount</p>
                <p>${discount}</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                <p className="text-pd-black">Shipping</p>
                <p className="text-pd-red">Free</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 text-pd-black">
                <p>Coupon Applied</p>
                <div className="flex flex-col items-end">
                  <p>${(coupon/100*(price()-discount()))}</p>
                  {coupon > 0 && <p className="text-xs font-montserrat text-pd-red">-{coupon}%</p>}
                </div>
              </div>
              <div className="shrink-0 mt-8 h-px bg-pd-mid-gray" />
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-pd-black">
                <p>TOTAL</p>
                <p className="font-semibold text-right">${(price-discount)-(coupon/100*(price-discount))}</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 text-pd-black">
                <p>Estimated Delivery by</p>
                <p className="font-semibold">25 July, 2024</p>
              </div>
              <div className="relative px-4 py-2 mt-6 text-gray-400 rounded-sm border border-black border-solid">
                <input type="text" className="w-full pr-8 border-none outline-none" placeholder="Coupon Code" />
                <div className="absolute w-6 top-2 right-2 aspect-square fill-white">
                  <button><Trailing /></button>
                </div>
              </div>
              <div className="mt-6">
                <button onClick={()=>setShowSuccess(true)} className="mx-auto py-4 px-9 flex items-center justify-center gap-2 bg-pd-red text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat">Place Your Order and Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </WebLayout>
    );
}