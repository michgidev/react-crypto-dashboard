import Select from "react-select";

const CustomSelect = ({ optionsList, onChange, value, ...props }) => {

  // Formats options for use with react-select
  const formattedOptions = optionsList.map((option) => ({
    value: option.id,
    text: option.name,
    image: option.image
  }));

  // Get the selected value from formatted values
  const selectedOption = formattedOptions.find((option) => option.value === value);

  // Formats the selected option to show icon and text
  const customSelectedValue = ({ data }) => (
    <div className="flex items-center gap-2">
      <img src={data.image} alt={data.text} className="w-5 h-5 rounded-full" />
      <span>{data.text}</span>
    </div>
  );
  
  // Formats the options to show icon and the text in options list
  const customOption = (props) => {
    const { data, innerRef, innerProps, isFocused } = props;
    return (
      <div 
        ref={innerRef}
        {...innerProps}
        className={`flex items-center gap-2 px-3 py-2 cursor-pointer ${isFocused ? 'bg-gray-100' : ''}`}
      >
        <img src={data.image} alt={data.text} className="w-5 h-5 rounded-full" />
        <span>{data.text}</span>
      </div>
    );
  };

  return(
    <Select
      isSearchable={false}
      options={formattedOptions}
      value={selectedOption}
      placeholder="Elige una crypto"
      onChange={(selected) => onChange({ target: { value: selected.value } })} // emula evento
      components={{ SingleValue: customSelectedValue, Option: customOption }}
      {...props}
      styles={{
        control: (base) => ({
          ...base,
          borderRadius: '0.5rem',
          border: 'none',
          boxShadow: '0 4px 6px -1px var(--color-indigo-100), 0 2px 4px -2px var(--color-indigo-100)',
          cursor: 'pointer'
          
        }),
      }}
    />
  );
};

export { CustomSelect };