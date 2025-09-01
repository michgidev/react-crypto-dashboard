import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeButton = ({...props}) => {

  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.getAttribute('data-theme') || 'light'
  );

  // Set the selected theme
  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    setCurrentTheme(html.getAttribute('data-theme'));
    html.setAttribute('data-theme', newTheme);
    setCurrentTheme(newTheme);
  };

  return(
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center w-8 h-8 cursor-pointer rounded-full 
        bg-indigo-600 hover:bg-indigo-700 transition duration-200 text-white`}
      {...props}
    >
      { currentTheme === 'light' ? <Sun size={18}/> : <Moon size={18}/> }
    </button>
  );
};

export { ThemeButton };