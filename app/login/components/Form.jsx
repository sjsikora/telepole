'use client'

import { useState } from 'react';
import FormInput from './FormInput.jsx'


export function Form() {

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 3,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        }
      ];

    const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };


    return (
        <form onSubmit={handleSubmit} className='bg-lightblue p-3'>

            {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                
            <button className='w-full p-8' type='submit'>
                <div className=' flex justify-center'>
                    <h1 className=' px-20 bg-spblack text-white text-[50px] border-x-40'>Sign Up</h1>
                </div>
            </button>
            <button className='w-full p-8' type='submit'>
                <div className='flex justify-center'>
                    <h1 className='px-20 bg-spblack text-white text-[50px]'>Login</h1>
                </div>
            </button>
        </form>
    )
}

export default Form;