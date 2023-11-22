import imgSpinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={imgSpinner}
        alt="Loagind ..."
      />
    </div>
  );
}

export default Spinner;
