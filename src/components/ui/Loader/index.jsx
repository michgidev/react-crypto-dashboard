import "./loader.css";

const Loader = () => {
  return(
    <div className="fixed top-0 left-0 right-0 bottom-0 
      flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  );
}

export { Loader };