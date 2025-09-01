import { LayoutDashboard } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-indigo-50 opacity-50 z-10 lg:hidden transition-opacity ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>

      {/* Aside */}
      <aside
        className={
          `fixed top-0 left-0 h-auto min-h-dvh pt-[72px] w-64 bg-white shadow-lg shadow-indigo-100 z-20 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:pt-[62px] lg:translate-x-0 lg:static lg:shadow-md `
        }
      >

        <nav className="p-4 space-y-2">
          <a href="#" className="flex gap-2 items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-gray-200">
            <LayoutDashboard />
            Dashboard
          </a>
        </nav>

      </aside>
    </>
  );
};

export { Sidebar };