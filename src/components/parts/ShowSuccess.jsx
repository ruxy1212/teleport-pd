import tick from "../../assets/img/icons/tick.svg";

export default function ShowSuccess() {
  return (
    <div className="flex flex-col justify-between items-center">
        <img loading="lazy" src={tick} className="mt-6 md:mt-10 w-40 max-w-full aspect-square"/>
        <h3 className="mt-12 md:mt-16 pd-h3 leading-8 text-center text-pd-black">Your Order is confirmed!</h3>
        <p className="pd-p mt-4 text-base leading-6 text-center text-black">We’ll send you a shipping confirmation email as soon as your order
        ships.</p>
        <button className="mt-10 mb-5 py-4 px-10 flex items-center justify-center gap-2 bg-pd-red text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat">Continue Shopping</button>
    </div>
  );
}

