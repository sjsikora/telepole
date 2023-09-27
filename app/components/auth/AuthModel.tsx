import React, { ChangeEventHandler } from 'react';
import Image from 'next/image'
import logo from '../../../public/assets/full_logo.png'
import Link from 'next/link';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

type AuthModelProps = {
    typeAuth: "Log in" | "Sign up" | "Reset Password",
    errorMessage: string,

    inputs: {
        [key: string]: string;
    };

    handleRegister: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void

};

const AuthModel: React.FC<AuthModelProps> = ({ typeAuth, errorMessage, inputs, handleRegister, handleChangeInput }) => {

    return <div>
        <div className='flex flex-col items-center justify-center'>
            <Link href="."><Image className='p-10' alt="Telepole logo" src={logo} width={400} /> </Link>
            <div className='shadow-2xl flex flex-col min-w-[20rem] w-[26vw] max-w-[30rem]'>


                <form className='space-y-6 px-6 pb-4 flex flex-col justify-around'
                    onSubmit={handleRegister}>
                    <div />

                    <h1 className='text-4xl flex justify-center font-bold'>{typeAuth}</h1>

                    <div className='space-y-2 '>
                        {Object.keys(inputs).map((key) => (
                            <InputField
                                key={key}
                                varName={key}
                                fullName={inputs[key]}
                                handleChangeInput={handleChangeInput}
                            />
                        ))}

                    </div>

                    <SubmitButton name={typeAuth} />

                    <p className='text-red-600'>{errorMessage}</p>

                    <div>

                        {(typeAuth === 'Log in' || typeAuth === 'Sign up') &&
                            <div className='flex justify-center'>
                                <Link className="text-spgreen underline" href="./auth/resetPassword">I forgot my password</Link>
                            </div>
                        }

                        {(typeAuth === 'Reset Password' || typeAuth === 'Log in') &&

                            <div className='flex justify-center p-2'>
                                <div> New to Telepole? </div>
                                <div className='px-2' />
                                <Link className="text-spgreen underline" href="./auth/signup">Sign up</Link>
                            </div>
                        }

                        {(typeAuth === 'Reset Password' || typeAuth === 'Sign up') && <div className='flex justify-center p-2'>
                            <div> Already have an account? </div>
                            <div className='px-2' />
                            <Link className="text-spgreen underline" href="./auth/login">Log in</Link>
                        </div>
                        }

                    </div>
                    <div />

                </form>
            </div>
        </div>
    </div>





}
export default AuthModel;