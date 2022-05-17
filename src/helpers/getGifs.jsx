// Los helpers se usan para expodner funcionaes comunes para los demas componentes
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=kf2bkc2aTrsnLGKYO9YKDbGYmB9om56u`;
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }
    })

    return gifs;
}