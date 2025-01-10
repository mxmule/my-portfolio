import React, { useState } from 'react';
import { Magnetic } from './components/magnetic';

import './styles/App.scss'

const App: React.FC = () => {
    return <div className='w-full h-screen flex justify-center items-center bg-white'>
        <h1 className="text-4xl">Hi this is font test asdfn</h1>
        <Magnetic>
        <button
            type='button'
            className='inline-flex items-center rounded-md border border-black bg-transparent px-4 py-2 text-lg text-zinc-950 transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-900 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-600'
        >
            <span>Submit</span>
        </button>
    </Magnetic>
    </div>
};

export default App;

