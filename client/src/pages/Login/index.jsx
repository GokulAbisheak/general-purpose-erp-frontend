import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='flex min-h-screen justify-center items-center'>
                <div className='flex shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px]'>
                    <div className='bg-purple-700 w-[300px] h-full hidden md:block'>

                    </div>
                    <div className='w-[400px] h-full flex items-center justify-center'>
                        <div className='justify-center items-center w-full px-[50px]'>
                            <div className='justify-center text-center items-center text-purple-700 font-bold text-2xl mb-[20px]'>
                                General ERP
                            </div>
                            <form>
                                <div className='grid gap-[10px]'>
                                    <input type='text' placeholder='Email' className='px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0'></input>
                                    <input type='text' placeholder='Password' className='px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0'></input>
                                    <button type='submit' className='bg-purple-700 h-[40px] text-white mt-[10px] mb-[10px] rounded uppercase text-sm font-semibold w-full hover:bg-purple-900'>Login</button>
                                </div>
                            </form>
                            <div className='grid'>
                                <Link to='/forgot' className='text-purple-700 text-sm hover:text-purple-900'>Forgot password?</Link>
                                <Link to='/signup' className='text-purple-700 text-sm hover:text-purple-900'>Don't have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
