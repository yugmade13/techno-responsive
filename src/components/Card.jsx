import { useState } from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';
import { formatted } from '../utils/formatted';

function Card({ greeting, name, saldo, point, qrcode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-4 bg-white absolute inset-0 m-6 rounded-2xl shadow-xl">
        <p className="mb-4">
          {greeting}, <br></br>
          <span className="text-lg font-bold">{name}</span>
        </p>
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="p-3 rounded-full shadow-md w-15">
              <img src={qrcode} alt="qr code" />
            </div>
          </button>
          <div className="w-full">
            <div className="flex justify-between">
              <p>Saldo</p>
              <p>{formatted(saldo)}</p>
            </div>
            <div className="flex justify-between">
              <p>Points</p>
              <p className="text-green-500">{point}</p>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} qrcode={qrcode} />
    </>
  );
}

export default Card;

Card.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
  saldo: PropTypes.number,
  point: PropTypes.number,
  qrcode: PropTypes.string,
};
