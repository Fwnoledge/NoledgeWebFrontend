import React from 'react'

const SearchBar = () => {
    return (
        <div className='items-center justify-center'>
            <div className="mt-2">
                <input
                    type="text"
                    name="filter"
                    className="block w-full rounded-md p-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                />
            </div>
        </div>
    )
}

export default SearchBar;
