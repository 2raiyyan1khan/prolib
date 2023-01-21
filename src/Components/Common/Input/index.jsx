import React from "react";

const Input = ({
  type = "text",
  name,
  onChange,
  placeholder,
  className,
  label,
  icon,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label for="password" class="text-textPrimary opacity-75 ">
          {label}
        </label>
      )}
      {icon ? (
        <div class="relative">
          <input
            type={type}
            name={name}
            onChange={onChange}
            class={`
              w-full h-full pl-4 py-3 text-textPrimary outline-none text-lg tracking-wider  outline-offset-2 outline-transparent focus:outline-mainPrimary rounded-lg bg-bgSecondary border-0  pr-10  sm:text-sm  mt-2 ${
                className || ""
              }`}
            placeholder={placeholder}
            {...rest}
          />
          <span class="absolute inset-y-2 right-3 inline-flex items-center mt-2 rounded-lg">
            {icon}
          </span>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          class={`
              w-full h-full pl-4 py-3 text-textPrimary outline-none text-lg tracking-wider  outline-offset-2 outline-transparent focus:outline-mainPrimary rounded-lg bg-bgSecondary border-0  pr-10  sm:text-sm  mt-2 ${
                className || ""
              }`}
          placeholder={placeholder}
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;
