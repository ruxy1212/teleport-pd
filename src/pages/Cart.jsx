
export default function Cart(){
    return (
        <div className="flex justify-center items-center self-stretch px-16 py-1.5 max-md:px-5">
      <div className="w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center self-start whitespace-nowrap">
                <div className="self-stretch my-auto text-3xl font-bold tracking-tighter leading-10 text-gray-400">
                  Shopping
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ad24b328c8a2ce56fde45466f6cce841a77b789f43f369f81a3b19f04dc41df?"
                  className="shrink-0 self-stretch my-auto w-8 aspect-square fill-white"
                />
                <div className="self-stretch text-5xl font-extrabold tracking-tighter text-indigo-950 max-md:text-4xl">
                  Cart
                </div>
              </div>
              <div className="self-start mt-2 text-2xl font-extrabold leading-6 text-gray-400">
                1 Item
              </div>
              <div className="mt-8 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col justify-center items-center px-6 w-full rounded-2xl border border-white border-solid shadow-lg backdrop-blur-sm aspect-square max-md:px-5 max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="w-full aspect-[1.05]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base font-semibold leading-6 max-md:mt-10">
                      <div className="flex gap-2.5 text-2xl font-extrabold leading-8">
                        <div className="text-indigo-950">Iphone 14 Plus</div>
                        <div className="text-right text-zinc-800">$225.00</div>
                      </div>
                      <div className="flex gap-2 mt-2 whitespace-nowrap">
                        <div className="text-gray-400">Color</div>
                        <div className="text-indigo-950">Silver</div>
                      </div>
                      <div className="flex gap-5 justify-between mt-6 w-full whitespace-nowrap">
                        <div className="flex gap-5 justify-center items-center p-4 border border-black border-solid rounded-[52px] text-indigo-950 max-md:px-5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93250a504900074dd60b23b3d883fb4643660014ec403978dee794c1374dd548?"
                            className="shrink-0 self-stretch my-auto w-5 aspect-square fill-white"
                          />
                          <div className="self-start">1</div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5b0d41a9b6968f372fdabaf1626cb8448f6c3f4bf6c76fb4c5d22a9d326dccf?"
                            className="shrink-0 self-stretch my-auto w-5 aspect-square fill-white"
                          />
                        </div>
                        <div className="my-auto text-red-500">Remove</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 p-5 mt-6 text-base leading-6 rounded border border-red-600 border-solid bg-red-600 bg-opacity-10 text-stone-950 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b1be0ad211a76aa9997520b1bd21458aa76e767f0a119bf3571f3ba6da9f9dd?"
                  className="shrink-0 w-6 aspect-square fill-white"
                />
                <div className="max-md:max-w-full">
                  10% Instant Discount with Federal Bank Debit Cards on a min
                  spend of $150. TCA
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch p-8 m-auto w-full text-base leading-6 bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10">
              <div className="text-2xl font-extrabold leading-8 text-indigo-950">
                Order Summary
              </div>
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-indigo-950">
                <div>Price</div>
                <div>$319.98</div>
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-indigo-950">
                <div>Discount</div>
                <div>$31.90</div>
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
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-indigo-950">
                <div>TOTAL</div>
                <div className="font-semibold text-right">$288.08</div>
              </div>
              <div className="flex gap-5 justify-between mt-6 text-indigo-950">
                <div>Estimated Delivery by</div>
                <div className="font-semibold">25 July, 2024</div>
              </div>
              <div className="flex gap-4 p-4 mt-6 text-gray-400 rounded-sm border border-black border-solid">
                <div className="flex-1">Coupon Code</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d6b10f8afd139981b91c023dcf5202b73968c4eb9ac1dae8cbb4077b37226db?"
                  className="shrink-0 w-6 aspect-square fill-white"
                />
              </div>
              <div className="justify-center px-12 py-4 mt-6 font-semibold text-white bg-red-600 rounded-[50px] max-md:px-8">
                Proceed to Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
}
