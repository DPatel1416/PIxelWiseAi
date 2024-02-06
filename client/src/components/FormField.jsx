import React from "react";

// Define a functional component called FormField
const FormField = ({
  labelName, // Label for the input field
  type, // Type of the input field (e.g., text, email)
  name, // Name attribute of the input field
  placeholder, // Placeholder text for the input field
  value, // Value of the input field
  handleChange, // Function to handle input field changes
  isSurpriseMe, // Boolean indicating whether "Surprise Me" button should be shown
  handleSurpriseMe, // Function to handle "Surprise Me" button click
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {/* Label for the input field */}
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {/* "Surprise Me" button (if enabled) */}
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      {/* Input field */}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      />
    </div>
  );
};

// Export the FormField component as the default export
export default FormField;
