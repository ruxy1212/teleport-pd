import React, { useState } from 'react';
import WebLayout from "../layouts/WebLayout";
import { Link, useLocation } from "react-router-dom";
import { getNextWeekFriday } from '../hooks/nextWeekFriday';
import ChevronRight from "../components/icons/ChevronRight";
import Plus from "../components/icons/Plus"
import Trailing from "../components/icons/Trailing";
import amex from "../assets/img/icons/amex.svg";
import discover from "../assets/img/icons/discover.svg";
import mastercard from "../assets/img/icons/mastercard";
import visa from "../assets/img/icons/visa";
import Modal from "../components/Modal";
import AddPayment from "../components/parts/AddPayment";
import ShowSuccess from "../components/parts/ShowSuccess";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Checkout(){
    const initialCards = [
      { cardNumber: "1234 5678 9012 3456", cvv: "123", expiryDate: "12/24" },
      { cardNumber: "9876 5432 1098 7654", cvv: "456", expiryDate: "11/23" },
    ];
    const location = useLocation();
    const { price } = location.state || { price: 0 };
    const { discount } = location.state || { discount: 0 };
    const { coupon } = location.state || { coupon: 0 };
    const [showPayment, setShowPayment] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
    const validCoupons = {"DISCOUNT10": 10, "SALE20": 20, "PROMO30": 30, "EREGE": 50, "RUXY": 50};
    const [couponCode, setCoupon] = useState("");
    const [couponFeedback, setCouponFeedback] = useState("");
    const [couponDiscount, setCouponDiscount] = useState(coupon);
    const deliveryDate = getNextWeekFriday();

    const [cards, setCards] = useLocalStorage("cards", initialCards);

    const addCard = (newCard) => {
      setCards([...cards, newCard]);
    };

    const applyCoupon = () => {
      if (validCoupons[couponCode.toUpperCase()]) {
        setCouponDiscount(validCoupons[couponCode.toUpperCase()]);
        setCouponFeedback("Coupon applied successfully!");
      } else {
        setCouponFeedback("Invalid or expired coupon code.");
        setCouponDiscount(0);
      }
    };

    const setOpen = () => {
      setShowPayment(false);
      setShowSuccess(false);
    }

    const removeCard = (cardIndex) => {
      setCards(cards.filter((_, index) => index !== cardIndex));
    };

    return (
        <WebLayout cartItems={cartItems.length}>
          <Modal open={showPayment} setOpen={setOpen}>
            <AddPayment addCard={addCard} onClose={() => setShowPayment(false)}></AddPayment>
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
                {
                  cards.length < 1 ? (
                    <p className="text-pd-red pd-p-18 h-[50px] flex justify-center items-center">You have not added any cards yet</p>
                  ):(
                    cards.map((card, index) => {
                        const cardType = {3: amex, 4: visa, 5: mastercard, 6: discover};
                        // {card.cardNumber[0]}
                    return (
                      <React.Fragment key={index}>
                        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full p-2 pb-0 md:pb-2">
                          <div className="flex gap-0 md:gap-5 justify-between flex-col md:flex-row">
                            <div className="flex gap-3.5">
                              <div className="flex flex-col justify-center p-0.5">
                                <div className="flex flex-col justify-center items-center">
                                  <input type="radio" name="radio_payment" id="rad1" className="w-6 h-6 accent-pd-blue" />
                                </div>
                              </div>
                              <img loading="lazy" src={cardType[card.cardNumber[0]]} className="shrink-0 my-auto w-6 aspect-[1.41]"/>
                              <div className="pd-p font-semibold leading-6 text-pd-black"> •••• {card.cardNumber.replace(/\s/g, "").slice(-4)}</div>
                            </div>
                            <div className="pd-p leading-6 text-gray-400">Expires {card.expiryDate.replace('/', '/20')}</div>
                          </div>
                          <button onClick={() => removeCard(index)} className="text-pd-red pd-p font-semibold">Remove</button>
                        </div>
                        {index < cards.length - 1 && <hr className="shrink-0 my-2 h-0 border-t border-pd-black border-solid max-md:max-w-full" />}
                      </React.Fragment>
                    )
                    })
                  )
                }
              </div>

              <hr className="shrink-0 mt-0 md:mt-8 h-0 border-t border-pd-black border-solid max-md:max-w-full" />

              <button className="flex gap-4 justify-center self-start mt-0 md:mt-8 font-semibold leading-6 rounded font-montserrat" onClick={()=>setShowPayment(true)}>
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
                  <p>${(couponDiscount/100*(price-discount))}</p>
                  {couponDiscount > 0 && <p className="text-xs font-montserrat text-pd-red">-{couponDiscount}%</p>}
                </div>
              </div>
              <div className="shrink-0 mt-8 h-px bg-pd-mid-gray" />
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-pd-black">
                <p>TOTAL</p>
                <p className="font-semibold text-right">${(price-discount)-(couponDiscount/100*(price-discount))}</p>
              </div>
              <div className="flex gap-5 justify-between mt-6 text-pd-black">
                <p>Estimated Delivery by</p>
                <p className="font-semibold">25 July, 2024</p>
              </div>
              <div className="relative px-4 py-2 mt-6 text-gray-400 rounded-sm border border-black border-solid">
                <input type="text" className="w-full pr-8 border-none outline-none" placeholder="Coupon Code" value={couponCode} onChange={(e) => setCoupon(e.target.value)}/>
                <div className="absolute w-6 top-2 right-2 aspect-square fill-white">
                  <button onClick={applyCoupon}><Trailing /></button>
                </div>
              </div>
              <p className={`${couponFeedback === "Coupon applied successfully!" ? "text-pd-green" : "text-pd-red"}`}>{couponFeedback}</p>
              <div className="mt-6">
                <button onClick={()=>setShowSuccess(true)} className="w-full py-4 px-9 flex items-center justify-center gap-2 bg-pd-red text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat">Place Your Order and Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </WebLayout>
    );
}