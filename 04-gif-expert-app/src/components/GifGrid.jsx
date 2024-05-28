/* import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'; */

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);
    console.log(isLoading, images);

/*     const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    };

    useEffect(() => {
        getImages();
    }, []) */


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2 className={isLoading}>Loading</h2>) 
            }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        /*  <GifGridItem key={image.id} title={image.title} url={image.url}/> */
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
