import React from 'react'
import {posts} from '@/src/config/data'

type Params = {
    params: {
        postId: string
    }
}

export default async function PostPage({params: {postId}}: Params) {

    const post = posts.find(p => p.id === parseInt(postId))

    return (
        <div className=" items-center justify-center mt-16 lg:mt-32">

            <div className="flex flex-col items-center justify-center">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">{post!.title}</h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    {post!.description}
                </p>
            </div>

        </div>

    )
}

