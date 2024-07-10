
import { useState } from 'react';
import useLocalStorage from "../../hooks/useLocalStorage";

export default function AddPayment({ addCard, onClose }) {
  const [cards, setCards] = useLocalStorage("cards", []);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const onCardNumber = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.match(/.{1,4}/g)?.join(" ") || value;
    setCardNumber(value);
  };

  const onExpiryDate = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpiryDate(value);
  };

  const submitCard = (e) => {
    e.preventDefault();
    const newCard = { cardNumber, cvv, expiryDate };
    // setCards([...cards, newCard]);
    addCard(newCard);
    onClose();
    setCardNumber("");
    setCvv("");
    setExpiryDate("");
  };

  return (
    <div className="flex flex-col justify-between">
      <h3 className="self-start mt-6 pd-h3 leading-8 text-pd-black">Add Payment Method</h3>
      <form onSubmit={submitCard}>
        <div className="mt-8">
            <label className="pd-p-18 font-semibold text-pd-black">Card Number</label>
            <div className="justify-center px-4 py-3 mt-4 rounded-sm border-2 border-black border-solid text-pd-black">
                <input type="text" value={cardNumber} onChange={onCardNumber} maxLength="19" required placeholder="1234 5678 9101 1121" className="pd-p border-none outline-none"/>
            </div>
        </div>
        <div className="flex gap-4 mt-8">
            <div className="mt-4 flex-1">
                <label className="pd-p-18 font-semibold text-pd-black">Expiration Date</label>
                <div className="justify-center px-4 py-3 mt-4 rounded-sm border-2 border-black border-solid text-pd-black">
                    <input type="text" placeholder="MM/YY" value={expiryDate} onChange={onExpiryDate} maxLength="5" required className="pd-p w-28 border-none outline-none"/>
                </div>
            </div>
            <div className="mt-4 flex-1">
                <label className="pd-p-18 font-semibold text-pd-black">CVV</label>
                <div className="justify-center px-4 py-3 mt-4 rounded-sm border-2 border-black border-solid text-pd-black">
                    <input type="text" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} maxLength="4" required className="pd-p w-28 border-none outline-none"/>
                </div>
            </div>
        </div>
        <div>
          <button className="w-full mt-10 mb-5 py-4 px-10 flex items-center justify-center gap-2 bg-pd-red text-pd-white rounded-[3.25rem] font-medium pd-button font-montserrat">Save Card Details</button>
        </div>
      </form>
        <p className="pd-p leading-6 text-neutral-500">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes.</p>
    </div>
  );
}

