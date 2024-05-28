import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One Punch', /* 'Dragon Ball', 'Naruto Shipuden' */]);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setcategories([newCategory, ...categories]);
    }


    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                //setCategories={setcategories} 
                onNewCategory={onAddCategory} />
            <button onClick={onAddCategory}>Agregar</button>

            {
                categories.map(category => (
                    //return <li key={category}>{category}</li>
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    );
}
