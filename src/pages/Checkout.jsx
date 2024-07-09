import WebLayout from "../layouts/WebLayout";

export default function Checkout(){
    return (
        <WebLayout>
<div className="justify-between self-stretch py-7">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 max-md:mt-7 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-center self-start whitespace-nowrap">
              <div className="self-stretch my-auto text-3xl font-bold tracking-tighter leading-10 text-gray-400">
                Cart
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22fa9fbb1c6b2860cbcee60d96174d8ed378cb22b14a7742c63626ee92eefdc3?"
                className="shrink-0 self-stretch my-auto w-8 aspect-square fill-white"
              />
              <div className="self-stretch text-5xl font-extrabold tracking-tighter text-indigo-950 max-md:text-4xl">
                Checkout
              </div>
            </div>
            <div className="mt-16 text-2xl font-semibold leading-8 text-indigo-950 max-md:mt-10 max-md:max-w-full">
              Payment Method
            </div>
            <div className="flex flex-col justify-between py-2 mt-6 rounded border border-black border-solid max-md:max-w-full">
              <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-5 justify-between">
                  <div className="flex gap-3.5">
                    <div className="flex flex-col justify-center p-0.5">
                      <div className="flex flex-col justify-center items-center px-1.5 w-5 h-5 bg-white rounded-xl border-2 border-teal-500 border-solid">
                        <div className="shrink-0 w-2.5 h-2.5 bg-teal-500 rounded-xl border border-teal-500 border-solid" />
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e5bb4cf7ee0addf0af8e7358a974b13f1002f914a0a17876885f321d5c0abb?"
                      className="shrink-0 my-auto w-6 aspect-[1.41]"
                    />
                    <div className="text-base font-semibold leading-6 text-indigo-950">
                      •••• 6754
                    </div>
                  </div>
                  <div className="text-base leading-6 text-gray-400">
                    Expires 06/2027
                  </div>
                </div>
                <div className="text-base font-semibold leading-6 text-red-500">
                  Remove
                </div>
              </div>
              <div className="shrink-0 mt-2 h-px bg-black border border-black border-solid max-md:max-w-full" />
              <div className="flex gap-5 justify-between mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-5 justify-between">
                  <div className="flex gap-3.5">
                    <div className="flex flex-col justify-center p-0.5">
                      <div className="shrink-0 h-5 rounded-xl border-2 border-gray-400 border-solid" />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc50892d0fab245708fca702b7db224fbc8652564fb3563815addf9dee9e360?"
                      className="shrink-0 my-auto w-6 aspect-[1.41]"
                    />
                    <div className="text-base font-semibold leading-6 text-indigo-950">
                      •••• 5643
                    </div>
                  </div>
                  <div className="text-base leading-6 text-gray-400">
                    Expires 11/2025
                  </div>
                </div>
                <div className="text-base font-semibold leading-6 text-red-500">
                  Remove
                </div>
              </div>
            </div>
            <div className="shrink-0 mt-8 h-px bg-black border border-black border-solid max-md:max-w-full" />
            <div className="flex gap-4 justify-center self-start mt-8 text-base font-semibold leading-6 text-black rounded">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4972adcd4eecf1020c36d9fe41352ce33059bd01a70e323159e2609de27df88?"
                className="shrink-0 w-6 aspect-square fill-white"
              />
              <div>Add Payment method</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow p-8 mx-auto w-full text-base leading-6 bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-7">
            <div className="text-2xl font-extrabold leading-8 text-indigo-950">
              Order Summary
            </div>
            <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-indigo-950">
              <div>Price</div>
              <div>$319.98</div>
            </div>
            <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-indigo-950">
              <div>Discount</div>
              <div>$31.9</div>
            </div>
            <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
              <div className="text-indigo-950">Shipping</div>
              <div className="text-red-600">Free</div>
            </div>
            <div className="flex gap-5 justify-between mt-6 text-indigo-950">
              <div>Coupon Applied</div>
              <div>$0.00</div>
            </div>
            <div className="shrink-0 mt-8 h-px bg-zinc-300" />
            <div className="flex gap-0 justify-between mt-8 whitespace-nowrap text-indigo-950">
              <div>TOTAL</div>
              <div className="flex-1 font-semibold text-right">$288.08</div>
            </div>
            <div className="flex gap-5 justify-between mt-6 text-indigo-950">
              <div>Estimated Delivery by</div>
              <div className="font-semibold">25 July, 2024</div>
            </div>
            <div className="flex gap-4 p-4 mt-6 text-gray-400 rounded-sm border border-black border-solid">
              <div className="flex-1">Coupon Code</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6f5ff1b4f609e016adc81f408ab4f04ef433424d12f12ebadd9cf6357268ccb?"
                className="shrink-0 w-6 aspect-square fill-white"
              />
            </div>
            <div className="justify-center px-10 py-3.5 mt-6 font-semibold text-white bg-red-600 rounded-[50px] max-md:px-5">
              Place Your Order and Pay
            </div>
          </div>
        </div>
      </div>
    </div>
        </WebLayout>
    );
}

























// import * as React from "react";

// function MyComponent() {
//   return (
//     <div className="flex flex-col pr-14 max-w-[774px] max-md:pr-5">
//       <div className="flex gap-5 justify-between items-center self-start whitespace-nowrap">
//         <div className="self-stretch my-auto text-3xl font-bold tracking-tighter leading-10 text-gray-400">
//           Shopping
//         </div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/22fa9fbb1c6b2860cbcee60d96174d8ed378cb22b14a7742c63626ee92eefdc3?"
//           className="shrink-0 self-stretch my-auto w-8 aspect-square fill-white"
//         />
//         <div className="self-stretch text-5xl font-extrabold tracking-tighter text-indigo-950 max-md:text-4xl">
//           Cart
//         </div>
//       </div>
//       <div className="self-start mt-2 text-2xl font-extrabold leading-6 text-gray-400">
//         3 Items
//       </div>
//       <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
//         <div className="flex justify-center items-center p-2.5 rounded-md border-white border-solid shadow-sm backdrop-blur-[1.5445544719696045px] border-[0.386px]">
//           <img
//             loading="lazy"
//             srcSet="..."
//             className="aspect-[1.05] w-[130px]"
//           />
//         </div>
//         <div className="flex flex-col self-start text-base font-semibold leading-6">
//           <div className="flex gap-2.5 text-2xl font-extrabold leading-8">
//             <div className="text-indigo-950">Iphone 14 Plus</div>
//             <div className="text-right text-zinc-800">$225.00</div>
//           </div>
//           <div className="flex gap-2 mt-2 whitespace-nowrap">
//             <div className="text-gray-400">Color</div>
//             <div className="text-indigo-950">Silver</div>
//           </div>
//           <div className="flex gap-5 justify-between mt-6 w-full whitespace-nowrap">
//             <div className="flex gap-5 justify-center items-center p-4 border border-black border-solid rounded-[52px] text-indigo-950">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/93250a504900074dd60b23b3d883fb4643660014ec403978dee794c1374dd548?"
//                 className="shrink-0 self-stretch my-auto w-5 aspect-square fill-white"
//               />
//               <div className="self-stretch">1</div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/4be67e895436ad9dd8af4edb54000e751d921e839ed524ca8fb445d781243cd8?"
//                 className="shrink-0 self-stretch my-auto w-5 aspect-square fill-white"
//               />
//             </div>
//             <div className="my-auto text-red-500">Remove</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5 justify-between mt-2 max-md:flex-wrap max-md:max-w-full">
//         <div className="flex justify-center items-center self-start p-2.5 rounded-md border-white border-solid shadow-sm backdrop-blur-[1.5445544719696045px] border-[0.386px]">
//           <img
//             loading="lazy"
//             srcSet="..."
//             className="aspect-[1.05] w-[130px]"
//           />
//         </div>
//         <div className="flex flex-col text-base font-semibold">
//           <div className="flex gap-2.5 text-2xl font-extrabold">
//             <div className="flex-1 leading-8 text-indigo-950">
//               Samsung Galaxy Flip 3
//             </div>
//             <div className="my-auto text-right leading-[130%] text-zinc-800">
//               $225.00
//             </div>
//           </div>
//           <div className="flex gap-2 mt-2 whitespace-nowrap leading-[150%]">
//             <div className="text-gray-400">Color</div>
//             <div className="text-indigo-950">Lavender</div>
//           </div>
//           <div className="flex gap-5 justify-between mt-6 w-full whitespace-nowrap leading-[150%]">
//             <div className="flex gap-5 justify-center items-center p-4 border border-black border-solid rounded-[52px] text-indigo-950">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/93250a504900074dd60b23b3d883fb4643660014ec403978dee794c1374dd548?"
//                 className="shrink-0 self-stretch my-auto w-5 aspect-square fill-white"
//               />
//               <div className="self-stretch">1</div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/4be67e895436ad9dd8af4edb54000e751d921e839ed524ca8fb445d781243cd8?"
//                 className="shrink-0 self-stretch my-auto w-5 aspect-square fill-white"
//               />
//             </div>
//             <div className="my-auto text-red-500">Remove</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5 justify-between mt-2 max-md:flex-wrap max-md:max-w-full">
//         <div className="flex justify-center items-center p-2.5 rounded-md border-white border-solid shadow-sm backdrop-blur-[1.5445544719696045px] border-[0.386px]">
//           <img
//             loading="lazy"
//             srcSet="..."
//             className="aspect-[1.05] w-[130px]"
//           />
//         </div>
//         <div className="flex flex-col self-start text-base font-semibold leading-6">
//           <div className="flex gap-2.5 justify-between text-2xl font-extrabold leading-8">
//             <div className="text-indigo-950">Ipad M1 Air</div>
//             <div className="text-right text-zinc-800">$89.00</div>
//           </div>
//           <div className="flex gap-2 mt-2 whitespace-nowrap">
//             <div className="text-gray-400">Color</div>
//             <div className="text-indigo-950">Black</div>
//           </div>
//           <div className="flex gap-5 justify-between mt-6 w-full whitespace-nowrap">
//             <div className="flex gap-5 justify-center items-center p-4 border border-black border-solid rounded-[52px] text-indigo-950">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/93250a504900074dd60b23b3d883fb4643660014ec403978dee794c1374dd548?"
//                 className="shrink-0 self-stretch my-auto w-5 aspect-square fill-white"
//               />
//               <div className="self-stretch">1</div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/a36d7b86e996762388025ef37c2aabf254bbb303af0f882c9993728d7d4eb7ae?"
//                 className="shrink-0 self-stretch my-auto w-5 aspect-square fill-white"
//               />
//             </div>
//             <div className="my-auto text-red-500">Remove</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-3 p-5 mt-2 text-base leading-6 rounded border border-red-600 border-solid bg-red-600 bg-opacity-10 text-stone-950 max-md:flex-wrap">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1283a47692a154ad44648c04eeeced97f1b178a42feb2d46b8a592ec2a26aca?"
//           className="shrink-0 w-6 aspect-square fill-white"
//         />
//         <div className="max-md:max-w-full">
//           10% Instant Discount with Federal Bank Debit Cards on a min spend of
//           $150. TCA
//         </div>
//       </div>
//     </div>
//   );
// }







































// import * as React from "react";

// function MyComponent() {
//   return (
    
//   );
// }



{/* <div className="flex flex-col justify-between p-8 bg-white rounded-xl border border-black border-solid leading-[150%] max-w-[380px]">
          <div className="text-2xl font-extrabold leading-8 text-zinc-950">
            Add Payment Method
          </div>
          <div className="mt-8 text-lg font-semibold text-zinc-950">
            Card Number
          </div>
          <div className="justify-center px-4 py-3 mt-4 text-base rounded-sm border-2 border-black border-solid text-neutral-400">
            1234 5678 9101 1121
          </div>
          <div className="flex gap-4 mt-8">
            <div className="flex flex-col flex-1">
              <div className="text-lg font-semibold text-zinc-950">
                Expiration Date
              </div>
              <div className="justify-center items-start px-4 py-3 mt-4 text-base whitespace-nowrap rounded-sm border-2 border-black border-solid text-neutral-400">
                MM/YY
              </div>
            </div>
            <div className="flex flex-col flex-1 whitespace-nowrap">
              <div className="text-lg font-semibold text-zinc-950">CVV</div>
              <div className="justify-center px-4 py-3 mt-4 text-base rounded-sm border-2 border-black border-solid text-neutral-400">
                123
              </div>
            </div>
          </div>
          <div className="justify-center items-center px-10 py-5 mt-12 text-base font-semibold bg-red-600 rounded-[50px] text-zinc-100">
            Save Card Details
          </div>
          <div className="mt-8 text-base leading-6 text-neutral-500">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes.
          </div>
        </div> */}