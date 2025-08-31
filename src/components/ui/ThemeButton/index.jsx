import { Sun } from "lucide-react";

const ThemeButton = ({onClick, ...props}) => {
  return(
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-8 h-8 cursor-pointer rounded-full bg-gray-200 hover:bg-indigo-300 transition duration-200`}
      {...props}
    >
      <Sun size={18}/>
    </button>
  );
};

export { ThemeButton };