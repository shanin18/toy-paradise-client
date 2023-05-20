import spinnerImage from "/images/error/spinner2.gif";

const Spinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <img className="w-80" src={spinnerImage} alt="spinner" />
    </div>
  );
};

export default Spinner;
