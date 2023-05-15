import React from 'react'
import SearchBar from '../components/SearchBar'
import PostHome from '../components/PostHome'

import { posts } from '../data/api'

const searchPage = () => {
  return (
    <main>
        <div className='items-center justify-center mx-auto max-w-2xl'>
            <SearchBar/>
        </div>
        <div className="bg-white py-4">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl m-4">

                    {posts.map((post) => (
                        <PostHome {...post}/>
                    ))}

                </div>
            </div>
        </div>
    </main>
    
  )

}

export default searchPage