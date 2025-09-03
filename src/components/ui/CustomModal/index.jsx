import { useDispatch } from "react-redux";
import { setIsModalOpen } from "../../../slices/uiSlice";
import { X } from "lucide-react";

const CustomModal = ({ children }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setIsModalOpen(false));
  };

  return(
    <div 
      onClick={(e) => handleCloseModal(e)}
      className="fixed w-full h-dvh top-0 right-0 bottom-0 left-0 flex
        items-center justify-center bg-black/60 z-50 cursor-pointer">

      <div 
        onClick={(e) => {e.stopPropagation()}}
        className="w-full max-w-[95%] p-6 rounded-2xl bg-white shadow-slate-200
        cursor-default dark:bg-slate-800 lg:max-w-[768px] lg:p-8 relative">

          <X 
            onClick={handleCloseModal}
            className="absolute right-4 top-4 dark:text-gray-100 cursor-pointer"
          />

          {children}

      </div>
    </div>
  );
}

export { CustomModal }