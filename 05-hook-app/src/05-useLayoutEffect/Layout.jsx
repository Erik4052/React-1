import {useCounter} from "../hooks/useCounter";
import {useFetch} from "../hooks/useFetch";
import {LoadingMessage} from "../03-examples/LoadingMessage";
import {Quote} from "../03-examples/Quote";



export const Layout = () => {

    const { counter, decrement, increment } = useCounter();

    const { data, hasError, isLoading } = useFetch(`https://fakestoreapi.com/products/${counter}`);

    //data=undefined, !data = false --> !!data = true , luego es true entonces data se puede desestructurar.
    //si la API devolviese un arreglo sería !!data && data[0]
    const { title, price } = !!data && data;

    console.log(data)

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingMessage />
                    : <Quote title={title} price={price} />
            }

            <button className="btn btn-primary" onClick={() => increment()}>
                Next Quote
            </button>
        </>
    )
};