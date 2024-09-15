import { useNavigate } from "react-router-dom";
import { MenuItemProps } from "../../../types";

function MenuItem({ name, path }: MenuItemProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(path);
      }}
      className="border p-2 mb-1.5 cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
    >
      {name}
    </div>
  );
}

export default MenuItem;
