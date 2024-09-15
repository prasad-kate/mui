import { routePaths } from "../../../constants/routePaths";
import MenuItem from "./MenuItem";

function Sidebar() {
  return (
    <div className="px-2 py-6 border h-screen rounded-r-2xl bg-gray-50">
      {routePaths?.map(({ path, name }) => {
        return <MenuItem key={path} path={path} name={name} />;
      })}
    </div>
  );
}

export default Sidebar;
