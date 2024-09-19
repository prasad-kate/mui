import { useNavigate } from "react-router-dom";
import { MenuItemProps } from "../../../types";

function MenuItem({ name, path }: MenuItemProps) {
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const menuItemClassName: string = `border p-2 mb-1.5 cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 text-sm ${
    currentPath === path ? "bg-gray-200" : ""
  }`;
  return (
    <div
      onClick={() => {
        navigate(path);
      }}
      className={menuItemClassName}
    >
      {name}
    </div>
  );
}

export default MenuItem;
