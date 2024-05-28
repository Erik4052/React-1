export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=iJBQ8iNSBAfLCXWSvMH72StKN39wctXG&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images.downsized_medium.url
    }));
    return gifs;
}
