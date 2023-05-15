import React from 'react'
import { Post } from '../models/post'
import Link from 'next/link'

const  PostHome = (data:Post) => {
  return (
    <article key={data.id} className="flex max-w mt-4 flex-col p-6 items-start justify-between  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative flex items-center gap-x-4">
        <img src={data.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <Link href={data.author.href}>
              <span className="absolute inset-0" />
              {data.author.name}
            </Link>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={data.datetime} className="text-gray-500">
          {data.date}
        </time>
        <Link
          href={data.category.href}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {data.category.title}
        </Link>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={data.href}>
            <span className="absolute inset-0" />
            {data.title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{data.description}</p>
      </div>
      
    </article>
  )
}

export default PostHome