import React from 'react';

const SearchField = () => {
  return (
    <div className='w-full px-3 font-semibold flex flex-row items-center text-green-900'>
      <label className='w-48' htmlFor='username'>
        Github username
      </label>
      <input
        id='username'
        type='text'
        placeholder='Username'
        className='w-full p-3 mr-3 border border-green-300 rounded-md shadow-md focus:outline-none'
      />
      <button
        className='w-48 p-3 bg-green-300 rounded-md shadow-md font-semibold hover:text-white hover:bg-green-600 focus:outline-none'
        type='type'
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
