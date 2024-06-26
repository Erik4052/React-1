import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


export const Quote = ({ title, price }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {

        const {height, width} = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });

    }, [title])

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className="mb-1">{title}</p>
                <footer className="blockquote-footer"> {price} </footer>
            </blockquote>
            <code> {JSON.stringify(boxSize)} </code>
        </>
    )
};

