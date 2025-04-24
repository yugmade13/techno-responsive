import PropTypes from 'prop-types';

function Modal({ qrcode, isOpen, setIsOpen }) {
  return (
    <div
      className={`${
        isOpen ? '' : 'hidden'
      }  fixed inset-0 z-10 flex items-center justify-center bg-opacity-50`}
    >
      <div className="bg-white p-6 h-screen w-full max-w-md relative ">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          &times;
        </button>

        <div className="h-screen flex justify-center items-center">
          <img src={qrcode} alt="qr code" />
        </div>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  qrcode: PropTypes.string,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
