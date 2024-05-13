import Link from 'next/link'
import React from 'react'
import { redirect } from 'next/navigation'

function Login() {
    if (process.env.LOGGED_IN === "true"){
        redirect('dashboard')
    }
  return (
        <div className='justify-center bg-[#f7faff] flex flex-col items-center w-full h-screen'>

        <img src='https://play-lh.googleusercontent.com/Fh6qQqnzTc1PctcLekAHWG2WqnzCFbAwGYEdA48rVdwAso5Ws4CCe54IUylGEb-F8I8' className='w-12 top-24 absolute rounded-2xl h-12'/>


        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm w-[25%] sm:w-[90%] p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>
                <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                </div>
                    <div>
                        <label  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                </div>
                                    <div className="text-sm ml-3">
                                        <label className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Lost
                                    Password?</a>
                            </div>
                            <Link href='dashboard'>
                                <button type="submit" className="w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            </Link>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create
                                    account</a>
                            </div>
                </form>
            </div>
    </div>
  )
}

export default Login