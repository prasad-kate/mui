import { routePaths } from "../../../constants/routePaths";
import MenuItem from "./MenuItem";

function Sidebar() {
  return (
    <div className="p-2">
      {routePaths?.map(({ path, name }) => {
        return <MenuItem key={path} path={path} name={name} />;
      })}
    </div>
  );
}

export default Sidebar;
