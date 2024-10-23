import { IoEllipsisVertical } from "react-icons/io5";
import { useOutside } from "../feature/hooks/useOutside";

function Menu({ children, isOpen, setIsOpen }) {
  const ref = useOutside(() => setIsOpen(false));
  return (
    <div ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-md border-2 border-transparent p-1 ${isOpen && " border-violet-500"} `}
      >
        <IoEllipsisVertical />
      </button>
      {isOpen && children}
    </div>
  );
}

export default Menu;
