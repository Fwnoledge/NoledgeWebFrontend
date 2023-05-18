import React from 'react'
import PostHome from '@/src/components/PostHome'

import {posts, profile} from '@/src/config/data'

const profilePage = () => {
    return (
        <div>
            <div>
                <img className="h-32 w-full object-cover lg:h-48" src={profile.backgroundImage} alt=""/>
            </div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                        <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={profile.avatar}
                             alt=""/>
                    </div>
                    <div
                        className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                            <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                    <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                </div>
                <div className='mt-6'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime at voluptatum aspernatur
                        obcaecati dolorum fugit, magnam possimus? Nulla sint tempora saepe molestiae cumque incidunt!
                        Aut nisi quae corrupti odio doloribus?</p>
                </div>
                <div className="mt-6 flex space-x-4">
                    <div
                        className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 line-clamp-1">
                        <svg className="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                            <circle cx={3} cy={3} r={3}/>
                        </svg>
                        Experimental physics
                    </div>
                    <div
                        className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                        <svg className="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                            <circle cx={3} cy={3} r={3}/>
                        </svg>
                        Machine learning
                    </div>
                    <div
                        className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                        <svg className="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                            <circle cx={3} cy={3} r={3}/>
                        </svg>
                        Statistical Inference
                    </div>
                </div>
            </div>
            <div className="bg-white py-4">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl m-4">

                        {
                            posts.map((post, index) => (
                                <PostHome {...post} key={index}/>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}


export default profilePage
