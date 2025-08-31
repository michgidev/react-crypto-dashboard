import { Menu } from "lucide-react";
import { SearchBar } from "../../ui/SearchBar";
import { ThemeButton } from "../../ui/ThemeButton";
import { UserProfile } from "../../ui/UserProfile";

const DashboardHeader = ({toggleSidebar}) => {
  return(
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white shadow-md shadow-indigo-100 z-20">
      
      <div className="flex gap-4 items-center">
        <button className="lg:hidden" onClick={toggleSidebar}>
          <Menu />
        </button>

        <h2 className="text-2xl font-black">Dashboard</h2>
      </div>

      <div className="flex gap-4 items-center">
        <SearchBar/>
      </div>

      <div className="flex gap-4 items-center">
        <ThemeButton/>
        <UserProfile/>
      </div>

    </header>
  );
};

export { DashboardHeader };