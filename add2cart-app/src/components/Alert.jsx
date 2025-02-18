const Alert = ({ message, type }) => {
  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white transform transition-transform duration-300 ${
      message ? 'translate-x-0' : 'translate-x-full'
    } ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-indigo-500'}`}>
      {message}
    </div>
  );
};

export default Alert;