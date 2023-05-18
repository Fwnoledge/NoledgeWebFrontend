import React from 'react'
import {Post} from '../app/models/post'
import Link from 'next/link'

const PostHome = (post: Post) => {
    return (
        <div
            className="flex max-w mt-4 flex-col p-6 items-start justify-between  bg-white border border-gray-200 rounded-lg shadow">
            <div className="relative flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <Link href={post.author.href}>
                            <span className="absolute inset-0"/>
                            {post.author.name}
                        </Link>
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                </time>
                <Link
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                    {post.category.title}
                </Link>
            </div>
            <div className="group relative">
                <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`post/${post.id}`}>
                        <span className="absolute inset-0"/>
                        {post.title}
                    </Link>
                </div>
                <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</div>
            </div>

        </div>
    )
}

export default PostHome
