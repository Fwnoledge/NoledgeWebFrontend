"use client"

import React, {useState} from 'react'
import {Dialog} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {RootState, store} from "@/src/store";
import {logout} from "@/src/features/authSlice";
import {useSelector} from "react-redux";

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Search', href: '/search'},
    {name: 'Profile', href: '/profile'},
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)

    const handleLogout = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        store.dispatch(logout())
    }

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <Link href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Noledge</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                         alt=""/>
                </Link>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {
                        navigation.map((item) => (
                            <Link key={item.name} href={item.href}
                                  className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))
                    }
                    {
                        isAuth ? (
                            <div className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
                                 onClick={handleLogout}>
                                Log out
                            </div>
                        ) : (
                            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                                Log in
                            </Link>
                        )
                    }
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {
                                    navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link
                                        >
                                    ))
                                }
                            </div>
                            <div>

                            </div>
                            {
                                isAuth ? (
                                    <div className="py-6">
                                        <div
                                            onClick={handleLogout}
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log Out
                                        </div>
                                    </div>
                                ) : (
                                    <div className="py-6">
                                        <Link
                                            href="/login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
