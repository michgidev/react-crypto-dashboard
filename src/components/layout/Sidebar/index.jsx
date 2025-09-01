import { LayoutDashboard } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-indigo-50 opacity-50 z-10 lg:hidden transition-opacity
           ${isOpen ? 'block' : 'hidden'} dark:bg-slate-950`}
        onClick={toggleSidebar}
      ></div>

      {/* Aside */}
      <aside
        className={
          `fixed top-0 left-0 h-auto min-h-dvh pt-[72px] w-64 bg-white shadow-lg shadow-indigo-100
           z-20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:pt-[62px] lg:translate-x-0 lg:static lg:shadow-md dark:bg-slate-800 dark:shadow-slate-900`
        }
      >

        <nav className="p-4 space-y-2">
          <a href="javascript:void(0)" 
            className="flex gap-2 items-center px-4 py-2 rounded-lg 
            bg-indigo-600 text-white hover:bg-indigo-700 dark:text-gray-100">
            <LayoutDashboard />
            Dashboard
          </a>
        </nav>

      </aside>
    </>
  );
};

export { Sidebar };