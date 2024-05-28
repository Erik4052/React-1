import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One Punch','Dragon Ball', 'Naruto Shipuden']);
    const onAddCategory = () => {
        setcategories(['HunterXHunter', ...categories]);
    }


  return (
    <>  
        {/* Title */}
        <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory setCategories={setcategories}/>
        <button onClick={onAddCategory}>Agregar</button>

        {/* GifGrid */}

        <ol>
            {
                categories.map( category => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </>
  );
}
