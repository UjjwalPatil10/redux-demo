import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { ToastContainer, toast } from 'react-toastify';
import { validEmail, validPassword } from '../../components/Regex';
import _ from "lodash";
import siteConfig from "../../config/siteConfig";
import fetchHelper, { getAPIProgressData } from "../../utils/apiHelper";
import { useSelector, useDispatch } from "react-redux";
import authActions from "../../redux/reducers/auth/actions";
import { Buffer } from 'buffer';

export const LawyerLogin = () => {
    let endPoint = siteConfig.endpoint.login;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const { setUserData, setAccessToken, setSelectedMenu, setSelectedTab } = authActions;
    const [buttonLoader, setButtonLoader] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value?.length > 3) {
            if (!validEmail.test(email)) {
                setIsEmailValid(true);
            } else {
                setIsEmailValid(false)
            }
        } else {
            setIsEmailValid(false)
        }
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value?.length > 3) {
            if (!validPassword.test(password)) {
                setIsPasswordValid(true);
            } else {
                setIsPasswordValid(false)
            }
        } else {
            setIsPasswordValid(false);
        }
    }

    const dataStatic = { "email": "user_email_0037@gmail.com", "password": "A@1password", "name": "user0034", "role": "lawyer" }

    let objJsonStr = JSON.stringify(dataStatic);
    let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
    // const data = {
    //     email : email,
    //     password : password,
    // }
    const callApi = () => {
        // alert(enc);
        setButtonLoader(true);
        getAPIProgressData(endPoint, 'post', objJsonB64)
            .then((result) => {
                console.log('result==>>>check email or phone==>>', result);
                if (_.isObject(result) && result.status) {
                    console.log('result==SUCCESS>>>check email or phone==>>', result?.data);
                    if (!_.isUndefined(result?.data?.auth_link)) {
                        setButtonLoader(false);
                        //   dispatch(setUserData(result?.data));
                        //   dispatch(setAccessToken(result?.data?.access_token || ""));
                        //   localStorage.setItem('Token', result?.data?.access_token);
                        //   localStorage.setItem('Role', result?.data?.role);
                        //   localStorage.setItem('userData',JSON.stringify(result?.data));
                        //   window.location.replace(result?.data?.auth_link);
                        // window.open(result?.data?.auth_link, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
                    } else {
                        //   dispatch(setUserData(result?.data));
                        //   dispatch(setAccessToken(result?.data?.access_token || ""));
                        //   localStorage.setItem('Token', result?.data?.access_token);
                        //   localStorage.setItem('Role', result?.data?.role);
                        //   localStorage.setItem('CurrentRole', result?.data?.current_role);
                        //   localStorage.setItem('userData',JSON.stringify(result?.data));
                        setButtonLoader(false);
                        //   if (result?.data?.role == 'student' || result?.data?.current_role == 'student'){
                        //   navigate("/mycourse");} 
                        //   else if (result?.data?.role == 'teacher'  || result?.data?.current_role == 'teacher'){
                        //     navigate('/dashboard');
                        //   }
                    }

                } else {
                    // setloader(false);
                    console.log("Error---resultresult---->", result.message);
                    setButtonLoader(false);
                    toast.danger("Warning", result.message, "error")
                    // Alert.alert('Warning', result.message);
                }
            })
            .catch((err) => {
                console.log("Error1234556--->", err);
                setButtonLoader(false);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            toast.warn("Email address is required.")
        } else if (!password) {
            toast.warn("Password is required.")
        } else {
            if (!isEmailValid && !isPasswordValid) {
                // toast.success("Success")
                callApi();
            }
        }

    }

    return (
        <>
            <section className='pt-20 pb-40'>
                <div className='container mx-auto mt-10'>
                    <div className='section-title text-center '>
                        <h6 className='font-semibold  text-md'>LOGIN</h6>
                        <h4 className='font-bold text-primary text-4xl mt-1'>Lawyer<span className=' text-blue'> Login</span></h4>
                    </div>

                    <div className='flex justify-center align-center mt-10'>
                        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white md:w-1/2 rounded-2xl">
                            <div className=" max-w-xl space-y-8">
                                <div className='border-b pb-5'>
                                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 ">
                                        Sign up to your account
                                    </h2>
                                    <p className="mt-3 text-center text-sm text-gray-600">
                                        Or{' '}
                                        <Link to='/lawyer-login' className='font-medium text-indigo-600 hover:text-indigo-500 text-blue'>
                                            You are already done onboarding ? Login Here
                                        </Link>
                                    </p>
                                </div>
                                <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                                    <input type="hidden" name="remember" defaultValue="true" />
                                    <div className="-space-y-px rounded-md ">
                                        <div className="group relative w-72 md:w-80 lg:w-96">
                                            <label htmlFor="2" className=" pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email Address</label>
                                            <input id="2"
                                                type="text"
                                                className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue"
                                                onChange={onChangeEmail}
                                            />
                                            {
                                                isEmailValid &&
                                                <span className=" pt-1 text-xs text-red">Invalid email address type , Format - xyz@gmail.com</span>
                                            }
                                            {/* <span className="absolute block pt-1 text-xs text-gray-500 opacity-0 transition-all duration-200 ease-in-out group-focus-within:opacity-100">Helper text: format - xyz@gmail.com</span> */}
                                        </div>
                                    </div>

                                    <div className="-space-y-px rounded-md ">
                                        <div className="group relative w-72 md:w-80 lg:w-96">
                                            <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Password</label>
                                            <input
                                                id="2"
                                                type="text"
                                                className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop- transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue"
                                                onChange={onChangePassword}
                                            />
                                            {
                                                isPasswordValid &&
                                                <span className="pt-1 text-xs text-red">Invalid password type , Format - Xyz!@#$%^&*_+</span>
                                            }
                                            {/* <span className="absolute block pt-1 text-xs opacity-0 transition-all duration-200 ease-in-out group-focus-within:opacity-100 text-red">Helper text: format - Xyz!@#$%^&*_+</span> */}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 text-blue">
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        {
                                            buttonLoader ?
                                                <button
                                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gray btn-disabled"
                                                >
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <XCircleIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                    </span>
                                                    Please wait ...
                                                </button>
                                                :
                                                <button
                                                    type="submit"
                                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-blue"
                                                >
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                    </span>
                                                    Sign up
                                                </button>
                                        }

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}
