import {Container} from './styles'
import Tmdb from '../../Tmdb'
import { useEffect, useState } from 'react'
import List from '../../components/List'
import FeaturedMovie from '../../components/FeaturedMovie'

export default function Main (){

    const [movies, setMovies] = useState([])
    const [featuredData, setFeaturedData] = useState(null)
    

    useEffect(()=>{
        const loadAll = async ()=>{
            let List = await Tmdb.getHomeList()
            setMovies(List)

            let originals = List.filter(i => i.slug === 'originals')

            let randomChosen = Math.floor(Math.random() * (originals[0].items.data.results.length - 1))
            
            let chosen = originals[0].items.data.results[randomChosen]
            
            let choseninfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

            setFeaturedData(choseninfo)
        }
        loadAll()
    },[])




    return (
        <Container>
            {featuredData &&(
                <FeaturedMovie  featuredData={featuredData}/>
            )}
            

            <section>
                {movies.map((item, index)=>(
                    <List title={item.title} key={index} items={item.items} />
                ))}
            </section>
            
        </Container>
    )
}