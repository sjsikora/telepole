import React, { ChangeEventHandler } from 'react';

type InputFieldProps = {
    handleChangeInput: ChangeEventHandler<HTMLInputElement>,
    varName: string,
    fullName: string,
    
};

const InputField:React.FC<InputFieldProps> = ({handleChangeInput, varName, fullName}) => {
    
    return <div>
        <label htmlFor={varName}>{fullName}</label>
        <input type={varName} name={varName} id={varName}
            className='border-2 border-gray-300 rounded-md p-2 w-full'
            placeholder={fullName}
        onChange={handleChangeInput} />
    </div>
}
export default InputField;