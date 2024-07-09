
export default function AddPayment() {
  return (
    <div className="flex flex-col justify-between">
      <h3 className="self-start mt-6 pd-h3 leading-8 text-pd-black">Add Payment Method</h3>
      <form action="">
        <div className="mt-8">
            <label className="pd-p-18 font-semibold text-pd-black">Card Number</label>
            <div className="justify-center px-4 py-3 mt-4 rounded-sm border-2 border-black border-solid text-pd-black">
                <input type="text" placeholder="1234 5678 9101 1121" className="pd-p border-none outline-none"/>
            </div>
        </div>
        <div className="flex gap-4 mt-8">
            <div className="mt-4 flex-1">
                <label className="pd-p-18 font-semibold text-pd-black">Expiration Date</label>
                <div className="justify-center px-4 py-3 mt-4 rounded-sm border-2 border-black border-solid text-pd-black">
                    <input type="text" placeholder="MM/YY" className="pd-p w-28 border-none outline-none"/>
                </div>
            </div>
            <div className="mt-4 flex-1">
                <label className="pd-p-18 font-semibold text-pd-black">CVV</label>
                <div className="justify-center px-4 py-3 mt-4 rounded-sm border-2 border-black border-solid text-pd-black">
                    <input type="text" placeholder="123" className="pd-p w-28 border-none outline-none"/>
                </div>
            </div>
        </div>
      </form>
        <button className="mt-10 mb-5 py-4 px-10 flex items-center justify-center gap-2 bg-pd-red text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat">Save Card Details</button>
        <p className="pd-p leading-6 text-neutral-500">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes.</p>
    </div>
  );
}

