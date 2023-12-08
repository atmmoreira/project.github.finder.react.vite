import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContent";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <small className="flex items-start mb-4 space-x-2 text-red-600">
        {alert.type === "error" && alert.message}
      </small>
    )
  );
}

export default Alert;
