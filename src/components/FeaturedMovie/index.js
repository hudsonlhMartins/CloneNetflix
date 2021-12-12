import {Container, EfeitoTransparent, MovieInfo, ButtonsDiv} from './styles'
import {FiPlay, FiPlus} from 'react-icons/fi'



export default function FeaturedMovie({featuredData}){



    let firstDate = new Date(featuredData.data.first_air_date)

    let genres = featuredData.data.genres.reduce((array, item)=>{
        array.push(item.name)

        return array
    },[])


    return(
        <Container style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${featuredData.data.backdrop_path})`
        }}>
            <EfeitoTransparent>
                <div>
                    
                    <MovieInfo>
                        <h2>{featuredData.data.original_name}</h2>
                        <span className="vote">{featuredData.data.vote_average} Pontos</span>

                        <span>{firstDate.getFullYear()}</span>

                        <span>{featuredData.data.number_of_seasons} 
                            {featuredData.data.number_of_seasons >1 ? ' Temporadas' : ' Temporada'}
                        </span>
                        <p>{featuredData.data.overview}</p>

                        
                        <ButtonsDiv>
                            <button className='watch'>
                                <FiPlay size={15} color='#000' />
                                <sapn>Assistir</sapn></button>
                            <button className='myList'>
                                <FiPlus size={15} color='#fff' />
                                <span> Minha lista</span>
                               </button>
                        </ButtonsDiv>

                        <strong>Generos: <span>{genres.join(', ')}</span></strong>
                        
                        

                    </MovieInfo>
                 
                </div>


            </EfeitoTransparent>
        </Container>
    )
}