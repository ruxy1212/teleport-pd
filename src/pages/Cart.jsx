import { Link } from "react-router-dom";
import { useState } from "react";
import WebLayout from "../layouts/WebLayout";
import ChevronRight from "../components/icons/ChevronRight";
import Plus from "../components/icons/Plus"
import Minus from "../components/icons/Minus"
import Percent from "../components/icons/Percent"
import Trailing from "../components/icons/Trailing";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Cart(){
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
    const validCoupons = {"DISCOUNT10": 10, "SALE20": 20, "PROMO30": 30, "EREGE": 50, "RUXY": 50};
    const [coupon, setCoupon] = useState("");
    const [couponFeedback, setCouponFeedback] = useState("");
    const [couponDiscount, setCouponDiscount] = useState(0);  

    const changeQuantity = (product, step) => {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.max(1, item.quantity + step) }
            : item
        )
      );
    };
    const removeItem = (productId) => {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };
    const getTotal = () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const getDiscount = () => 
      cartItems.reduce((totalDiscount, item) => totalDiscount + (item.discount * item.quantity), 0);
    const applyCoupon = () => {
      if (validCoupons[coupon.toUpperCase()]) {
        setCouponDiscount(validCoupons[coupon.toUpperCase()]);
        setCouponFeedback("Coupon applied successfully!");
      } else {
        setCouponFeedback("Invalid or expired coupon code.");
        setCouponDiscount(0);
      }
    };

    return (
      <WebLayout cartItems={cartItems.length}>
        <div className="max-w-[1200px] mx-auto mt-6 px-4 md:px-6 xl:px-0">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="flex flex-col grow w-full md:w-[67%] gap-8">
              <div>
                <div className="flex gap-5 items-center self-start whitespace-nowrap">
                  <Link to="/" className="self-stretch my-auto text-3xl font-bold tracking-tighter leading-10 text-pd-mid-gray">Shopping</Link>
                  <ChevronRight />
                  <div className="self-stretch pd-h2 tracking-tighter text-pd-black">Cart</div>
                </div>
                <div className="self-start mt-2 text-2xl font-extrabold leading-6 text-pd-mid-gray">
                  {cartItems.length} Item{cartItems.length==1?'':'s'}
                </div>
              </div>
              <div className="mt-1">
                <div className={`${cartItems.length>1?'h-[500px]':''} overflow-y-auto`}>
                  {/* multi and single */}
                  {/* h-[600px] overflow-scroll */}
                  <div className="flex gap-0 md:gap-5 flex-col md:flex-col">
                  {cartItems.length < 1 ? (
                    <p className="text-pd-red pd-p-18 h-[300px] flex justify-center items-center">Your cart is empty</p>
                  ) : (
                    cartItems.length == 1 ? (
                      <div className="flex flex-wrap">
                        <div className="flex flex-col w-full lg:w-[57%]">
                          <div className="flex flex-col max-w-[350px] justify-center items-center px-6 py-4 w-full rounded-2xl shadow-lg backdrop-blur-sm aspect-square mt-10 md:mt-0">
                            <img loading="lazy" src={"images/products/n"+cartItems[0].id+".png"} className="w-full aspect-[1.05]"/>
                          </div>
                        </div>
                        <div className="pl-5 w-full lg:w-[43%]">
                          <div className="flex flex-col">
                            <div className="flex gap-2.5 mt-10 text-2xl font-extrabold text-pd-black">
                              <h3 className="leading-8 pd-h3">{cartItems[0].title}</h3>
                              <h3 className="my-auto pd-h3 text-right leading-[130%]">${cartItems[0].price}</h3>
                            </div>
                            <div className="flex gap-2 mt-2 whitespace-nowrap pd-p font-semibold">
                              <span className="text-pd-mid-gray">Color</span>
                              <span className="text-pd-black">Silver</span>
                            </div>
                            <div className="flex gap-8 mt-6 w-full whitespace-nowrap break-at-half-lg">
                              <div className="flex gap-10 justify-center items-center px-4 py-3 border border-black border-solid rounded-[52px] text-pd-black">
                                <button onClick={() => changeQuantity(cartItems[0], -1)} disabled={cartItems[0].quantity === 1}><Minus /></button>
                                <span className="self-start">{cartItems[0].quantity}</span>
                                <button onClick={() => changeQuantity(cartItems[0], 1)}><Plus /></button>
                              </div>
                              <div className="my-auto">
                                <button className="text-pd-red pd-p font-semibold" onClick={()=>removeItem(cartItems[0].id)}>Remove</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 
                    ):(
                      cartItems.map(item => (
                        <div key={item.id} className="flex-row-at-half-md flex flex-col sm:flex-row gap-11 items-center">{console.log(item.discount)}
                          <div className="flex flex-col w-full with-at-half-md md:w-[150px]">
                            <div className="flex flex-col w-full with-at-half-md md:w-[150px] justify-center items-center px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm aspect-square mt-10 md:mt-0">
                              <img loading="lazy" src={"images/products/n"+item.id+".png"} className="w-full aspect-[1.05]"/>
                            </div>
                          </div>
                          <div className="w-full with-at-half-md lg:w-[43%]">
                            <div className="flex flex-col">
                              <div className="flex gap-2.5 mt-10 text-2xl font-extrabold text-pd-black">
                                <h3 className="leading-8 pd-h3">{item.title}</h3>
                                <h3 className="my-auto pd-h3 text-right leading-[130%]">${item.price}</h3>
                              </div>
                              <div className="flex gap-2 mt-2 whitespace-nowrap pd-p font-semibold">
                                <span className="text-pd-mid-gray">Color</span>
                                <span className="text-pd-black">Silver</span>
                              </div>
                              <div className="flex gap-8 mt-6 w-full whitespace-nowrap">
                                <div className="flex gap-10 justify-center items-center px-4 py-3 border border-black border-solid rounded-[52px] text-pd-black">
                                  <button onClick={() => changeQuantity(item, -1)} disabled={item.quantity === 1}><Minus /></button>
                                  <span className="self-start">{item.quantity}</span>
                                  <button onClick={() => changeQuantity(item, 1)}><Plus /></button>
                                </div>
                                <div className="my-auto">
                                  <button onClick={()=>removeItem(item.id)} className="text-pd-red pd-p font-semibold">Remove</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  )}
                    
                    {/* multi items no break */}
                    {/* <div className="flex justify-between items-center">
                      <div className="flex flex-col w-[150px]">
                        <div className="flex flex-col justify-center items-center px-6 py-4 w-full rounded-2xl shadow-lg backdrop-blur-sm aspect-square mt-10 md:mt-0">
                          <img loading="lazy" src="images/Image.png" className="w-full aspect-[1.05]"/>
                        </div>
                      </div>
                      <div className="pl-5 w-[43%]">
                        <div className="flex flex-col">
                          <div className="flex gap-2.5 mt-10 text-2xl font-extrabold text-pd-black">
                            <h3 className="leading-8 pd-h3">Iphone 14 Plus</h3>
                            <h3 className="flex-1 my-auto pd-h3 text-right leading-[130%]">$225.00</h3>
                          </div>
                          <div className="flex gap-2 mt-2 whitespace-nowrap pd-p font-semibold">
                            <span className="text-pd-mid-gray">Color</span>
                            <span className="text-pd-black">Silver</span>
                          </div>
                          <div className="flex gap-8 mt-6 w-full whitespace-nowrap">
                            <div className="flex gap-10 justify-center items-center px-4 py-3 border border-black border-solid rounded-[52px] text-pd-black">
                              <button><Minus /></button>
                              <span className="self-start">{1}</span>
                              <button><Plus /></button>
                            </div>
                            <div className="my-auto">
                              <button className="text-pd-red pd-p font-semibold">Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col w-[150px]">
                        <div className="flex flex-col justify-center items-center px-6 py-4 w-full rounded-2xl shadow-lg backdrop-blur-sm aspect-square mt-10 md:mt-0">
                          <img loading="lazy" src="images/Image.png" className="w-full aspect-[1.05]"/>
                        </div>
                      </div>
                      <div className="pl-5 w-[43%]">
                        <div className="flex flex-col">
                          <div className="flex gap-2.5 mt-10 text-2xl font-extrabold text-pd-black">
                            <h3 className="leading-8 pd-h3">Iphone 14 Plus</h3>
                            <h3 className="flex-1 my-auto pd-h3 text-right leading-[130%]">$225.00</h3>
                          </div>
                          <div className="flex gap-2 mt-2 whitespace-nowrap pd-p font-semibold">
                            <span className="text-pd-mid-gray">Color</span>
                            <span className="text-pd-black">Silver</span>
                          </div>
                          <div className="flex gap-8 mt-6 w-full whitespace-nowrap">
                            <div className="flex gap-10 justify-center items-center px-4 py-3 border border-black border-solid rounded-[52px] text-pd-black">
                              <button><Minus /></button>
                              <span className="self-start">{1}</span>
                              <button><Plus /></button>
                            </div>
                            <div className="my-auto">
                              <button className="text-pd-red pd-p font-semibold">Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col w-[150px]">
                        <div className="flex flex-col justify-center items-center px-6 py-4 w-full rounded-2xl shadow-lg backdrop-blur-sm aspect-square mt-10 md:mt-0">
                          <img loading="lazy" src="images/Image.png" className="w-full aspect-[1.05]"/>
                        </div>
                      </div>
                      <div className="pl-5 w-[43%]">
                        <div className="flex flex-col">
                          <div className="flex gap-2.5 mt-10 text-2xl font-extrabold text-pd-black">
                            <h3 className="leading-8 pd-h3">Iphone 14 Plus</h3>
                            <h3 className="flex-1 my-auto pd-h3 text-right leading-[130%]">$225.00</h3>
                          </div>
                          <div className="flex gap-2 mt-2 whitespace-nowrap pd-p font-semibold">
                            <span className="text-pd-mid-gray">Color</span>
                            <span className="text-pd-black">Silver</span>
                          </div>
                          <div className="flex gap-8 mt-6 w-full whitespace-nowrap">
                            <div className="flex gap-10 justify-center items-center px-4 py-3 border border-black border-solid rounded-[52px] text-pd-black">
                              <button><Minus /></button>
                              <span className="self-start">{1}</span>
                              <button><Plus /></button>
                            </div>
                            <div className="my-auto">
                              <button className="text-pd-red pd-p font-semibold">Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>  */}


                  </div>     
                  <div className="flex gap-3 p-5 mt-6 text-base leading-6 rounded border border-pd-red border-solid bg-pd-red bg-opacity-10 text-pd-black font-montserrat max-md:flex-wrap">
                    <Percent />
                    <span className="inline-block ms-2">10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA</span>
                  </div>
                </div>
              </div>
            </div>    
            {/* new component */}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch p-8 m-auto w-full pd-p font-montserrat leading-6 bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10">
              <h3 className="pd-h3 font-extrabold leading-8 text-pd-black">Order Summary</h3>
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-indigo-950">
                <p>Price</p>
                <p>${getTotal()}</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-indigo-950">
                <p>Discount</p>
                <p>${getDiscount()}</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                <p className="text-indigo-950">Shipping</p>
                <p className="text-pd-red">Free</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 text-indigo-950">
                <p>Coupon Applied</p>
                <div className="flex flex-col items-end">
                  <p>$0.00</p>
                  {couponDiscount > 0 && <p className="text-xs font-montserrat text-pd-red">-{couponDiscount}%</p>}
                </div>
              </div>
              <div className="shrink-0 mt-8 h-px bg-pd-mid-gray" />
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-indigo-950">
                <p>TOTAL</p>
                <p className="font-semibold text-right">${getTotal()-getDiscount()}</p>
                {/* $288.08 */}
              </div>
              <div className="flex gap-5 justify-between mt-6 text-indigo-950">
                <p>Estimated Delivery by</p>
                <p className="font-semibold">25 July, 2024</p>
              </div>
              <div className="relative px-4 py-2 mt-6 text-gray-400 rounded-sm border border-black border-solid">
                <input type="text" className="w-full pr-8 border-none outline-none" placeholder="Coupon Code" value={coupon} onChange={(e) => setCoupon(e.target.value)}/>
                <div className="absolute w-6 top-2 right-2 aspect-square fill-white">
                  <button onClick={applyCoupon}><Trailing /></button>
                </div>
                <p className={`${couponFeedback === "Coupon applied successfully!" ? "text-pd-green" : "text-pd-red"}`}>{couponFeedback}</p>
              </div>
              <div className="mt-6">
                <Link to="/checkout" className="mx-auto py-4 px-9 flex items-center justify-center gap-2 bg-pd-red text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat">Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     </WebLayout>
      );
}
