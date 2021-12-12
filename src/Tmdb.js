import axios from "axios"

const API_KEY = 'f9ad4f5f8e2fa104a2c20398dfe06ba1'




/*
    pegar os filmes

- recomentado
- acção
- comedia
...
*/


const basicAxios = async (endpoint)=>{
    const res = await axios.get('https://api.themoviedb.org/3'+endpoint)
    return res
}

export default {

    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'originais da netflix',
                items: await basicAxios(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'recomendados para voce',
                items: await basicAxios(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicAxios(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicAxios(`/discover/movie/?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'comedie',
                title: 'comedia',
                items: await basicAxios(`/discover/movie/?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getMovieInfo: async (id, type) =>{
        let info = {}

        switch (type) {
            case 'movie':
                info = await basicAxios(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
            break

            case 'tv':
                info = await basicAxios(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
            break

            default:
                return info = null
        }

        return info
    }

}