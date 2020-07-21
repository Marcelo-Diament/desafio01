import React, { Fragment } from 'react'
import { useQuery } from 'react-apollo'

import getGif from './queries/gifs.gql'

import { useCssHandles } from 'vtex.css-handles';

interface GifProps {
    term: string
}


const CSS_HANDLES = ['gif'] as const 

const Gif: StorefrontFunctionComponent<GifProps> = ({ term="cats"}) => {
    const handles = useCssHandles(CSS_HANDLES)
    const { data, loading} = useQuery(getGif, {
        variables: { term }
    })
   
    return (
        !loading ? 
            <div className={`${handles.gif} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
                <img src={data.gif.images.downsized_large.url} />
            </div> : <Fragment/>
    )    
}



Gif.schema = {
    title: 'editor.countdown-gif.title',
    description: 'editor.countdown-gif.description',
    type: 'object',
    properties: {
        term: {
            title: 'Sou um título',
            description: 'Sou uma descrição',
            type: 'string',
            default: null,  
        },
    }

}

export default Gif