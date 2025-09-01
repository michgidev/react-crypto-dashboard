import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const ArrowIcon = ({value, size = 24, ...props}) => {
  return (
    (value > 0) ? 
    <ArrowUpRight className="text-emerald-500" size={size} {...props} /> : 
    <ArrowDownLeft className="text-red-500" size={size} {...props} />
  );
};

export { ArrowIcon }