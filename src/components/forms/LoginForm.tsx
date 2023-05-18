'use client'
import React from 'react';
import {djangoInstance} from "@/src/config/axios-config";
import {store} from "@/src/store";
import {login} from "@/src/features/authSlice";
import Link from "next/link"
import {useRouter} from "next/navigation";

interface LoginFormData {
    username: string
    password: string
}

const LoginForm = () => {

    const router = useRouter()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData: LoginFormData = {
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
        }

        djangoInstance.post('auth/login', formData).then(
            (response) => {
                store.dispatch(
                    login({
                            token: response.data.access,
                            username: formData.username,
                        }
                    )
                )
                router.push('/')
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }


    return (
        <form className="space-y-6" onSubmit={onSubmit}>
            <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                </label>
                <div className="mt-2">
                    <input
                        name="username"
                        type="text"
                        autoComplete="username"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                    />
                </div>
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                        Remember me
                    </label>
                </div>

                <div className="text-sm leading-6">
                    <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </Link>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
