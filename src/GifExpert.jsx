import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpert = () => {

    const [categories, setCategories] = useState(['Dragon ball']);

    

    return (
    <>
        <h2>GifExpert</h2>

        <AddCategory setCategories={ setCategories }/>
        
        <hr />

        <ol>
            { 
                categories.map((category) => 
                    <GifGrid 
                        category={ category } 
                        key={ category }/>
                )
            }
        </ol>
    </>
  )
}
