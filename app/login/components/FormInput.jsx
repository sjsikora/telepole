import { useState } from 'react'



export const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };
  
    return ( 
      <div className= 'text-black p-10'>
        <input
            className='bg-lightblue border-b-4 border-white placeholder-white text-white text-[64px]'
            {...inputProps}
            placeholder={label}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
                inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
        />

        {

        }

        <span className='flex'>{errorMessage}</span>
      </div>
    );
  };

export default FormInput;