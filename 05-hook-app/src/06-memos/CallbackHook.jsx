
import { useState, useCallback } from "react";
import { ShowIncrement } from "../06-memos/ShowIncrement";
//import { useEffect } from "react";
export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const increment = useCallback(
        (value) => {
            console.log('counter');
            setCounter((c) => {
                c + value;
            });
        },
        [],
    );

    /*     useEffect(() => {
            increment();
        },[increment])
     */

    /*    const increment = () => {
           setCounter(counter + 1);
   
       } */
    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    )
}
