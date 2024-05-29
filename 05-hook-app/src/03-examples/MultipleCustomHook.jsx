import { useFetch } from "../hooks/useFetch"
export const MultipleCustomHook = () => {
    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/3');


    return (
        <>
            <h1>Pokemon Info</h1>
            <hr />
            {isLoading && <p>Loading...</p>}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <h2>{data?.name}</h2>

            <button className="btn btn-primary mt-2">
                Previous
            </button>

            <button className="btn btn-primary mt-2">
                Next
            </button>
        </>
    )
}
