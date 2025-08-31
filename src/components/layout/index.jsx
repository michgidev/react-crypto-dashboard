import { useState } from "react";
import { DashboardHeader } from "./Header";
import { Sidebar } from "./Sidebar";

const Layout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return(
    <div className="flex h-screen overflow-hidden">

      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)}/>

      <div className="flex flex-col flex-1">

        <DashboardHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)}/>

        <main className="flex-1 overflow-y-auto p-4 mt-[72px] lg:mt-[62px]">
          { children }
        </main>

      </div>
      
    </div>
  );
};

export { Layout };