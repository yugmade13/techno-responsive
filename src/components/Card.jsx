import { useState } from 'react';
import qrCodeSmall from '../assets/QR-small.png';
import Modal from './Modal';

function Card() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-4 bg-white absolute inset-0 m-6 rounded-2xl shadow-xl">
        <p className="mb-4">
          Good afternoon, <br></br>
          <span className="text-lg font-bold">Guntur Syahputra</span>
        </p>
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="p-3 rounded-full shadow-md">
              <img src={qrCodeSmall} alt="qr code" />
            </div>
          </button>
          <div className="w-full">
            <div className="flex justify-between">
              <p>Saldo</p>
              <p>Rp.279.000</p>
            </div>
            <div className="flex justify-between">
              <p>Points</p>
              <p className="text-green-500">2500</p>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Card;
