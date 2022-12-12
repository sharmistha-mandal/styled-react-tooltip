import { createPortal } from "react-dom";

function Portal(props) {
  return createPortal(props.children, document.body);
}

export default Portal;
