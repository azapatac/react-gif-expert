//useEffect nos sirve para condicionar alguna parte de codigo para ejecutarlo
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    // useEffect(() => {
    //   getGifs(category)
    //     .then(imgs => {
    //         setImages(imgs);
    //     });
    // }, [ category ]) //Si la categoria cambia, entonces el useEffect se ejecuta de nuevo
    //Cuando el array esta vacio indica que se ejecuta solo al rederriar la peimera vez<
    
    
    // const getGifs = async () => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=kf2bkc2aTrsnLGKYO9YKDbGYmB9om56u`;
    //     const resp = await fetch (url);
    //     const { data } = await resp.json();

    //     const gifs = data.map(img => {
    //         return {
    //             id : img.id,
    //             title : img.title,
    //             url : img.images.downsized_medium.url
    //         }
    //     })

    //     setImages(gifs);
    // }

    //Un alias para data
    const { loading, data:images } =  useFetchGifs(category);

    // console.log(data);
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>

            {/* { loading ? 'Loading ...' : 'Loaded' } */}
            { loading && 'Loading ...' }

            <div className='card-grid'>                
                { 
                    images.map( (img) => {
                        return(
                            <GifItem 
                                key={img.id}
                                {...img}/>
                            )
                    })
                }
            </div>
        </>
    )
}

 