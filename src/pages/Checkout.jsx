import WebLayout from "../layouts/WebLayout";
import { Link } from "react-router-dom";
import ChevronRight from "../components/icons/ChevronRight";
import Plus from "../components/icons/Plus"
import Minus from "../components/icons/Minus"
import Percent from "../components/icons/Percent"
import Trailing from "../components/icons/Trailing";
import amex from "../assets/img/icons/amex.svg";
import discover from "../assets/img/icons/discover.svg";

export default function Checkout(){
    return (
        <WebLayout>
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
                  <div className="flex gap-5 justify-between">
                    <div className="flex gap-3.5">
                      <div className="flex flex-col justify-center p-0.5">
                        <div className="flex flex-col justify-center items-center">
                          <input type="radio" name="radio_payment" id="rad1" className="w-6 h-6 accent-pd-blue" />
                        </div>
                      </div>
                      <img loading="lazy" src={amex} className="shrink-0 my-auto w-6 aspect-[1.41]"/>
                      <div className="pd-p font-semibold leading-6 text-indigo-950"> •••• 6754</div>
                    </div>
                    <div className="pd-p leading-6 text-gray-400">Expires 06/2027</div>
                  </div>
                  <button className="text-pd-red pd-p font-semibold">Remove</button>
                </div>
              
                <div className="shrink-0 mt-2 h-px border border-pd-black border-solid max-md:max-w-full" />

                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full p-2">
                  <div className="flex gap-5 justify-between">
                    <div className="flex gap-3.5">
                      <div className="flex flex-col justify-center p-0.5">
                        <div className="flex flex-col justify-center items-center">
                          <input type="radio" name="radio_payment" id="rad1" className="w-6 h-6 accent-pd-blue" />
                        </div>
                      </div>
                      <img loading="lazy" src={discover} className="shrink-0 my-auto w-6 aspect-[1.41]"/>
                      <div className="pd-p font-semibold leading-6 text-indigo-950"> •••• 3754</div>
                    </div>
                    <div className="pd-p leading-6 text-gray-400">Expires 06/2025</div>
                  </div>
                  <button className="text-pd-red pd-p font-semibold">Remove</button>
                </div>

              </div>

              <div className="shrink-0 mt-8 h-px bg-black border border-black border-solid max-md:max-w-full" />

              <button className="flex gap-4 justify-center self-start mt-8 font-semibold leading-6 rounded font-montserrat">
                <Plus />
                <span>Add Payment method</span>
              </button>


            </div>    
            {/* new component */}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch p-8 m-auto w-full pd-p font-montserrat leading-6 bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10">
              <h3 className="pd-h3 font-extrabold leading-8 text-pd-black">Order Summary</h3>
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-indigo-950">
                <p>Price</p>
                <p>$319.98</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-indigo-950">
                <p>Discount</p>
                <p>$31.90</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                <p className="text-indigo-950">Shipping</p>
                <p className="text-pd-red">Free</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 text-indigo-950">
                <p>Coupon Applied</p>
                <p>$0.00</p>
              </div>
              <div className="shrink-0 mt-8 h-px bg-pd-mid-gray" />
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-indigo-950">
                <p>TOTAL</p>
                <p className="font-semibold text-right">$288.08</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 text-indigo-950">
                <p>Estimated Delivery by</p>
                <p className="font-semibold">25 July, 2024</p>
              </div>
              <div className="flex gap-4 p-4 mt-6 text-gray-400 rounded-sm border border-black border-solid">
                <input type="text" className="flex-1 border-none outline-none" placeholder="Coupon Code" />
                <div className="shrink-0 w-6 aspect-square fill-white">
                  <button><Trailing /></button>
                </div>
              </div>
              <div className="mt-6">
                <button className="mx-auto py-4 px-9 flex items-center justify-center gap-2 bg-pd-red text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat">Place Your Order and Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </WebLayout>
    );
}