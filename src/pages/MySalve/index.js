import {Container, Content, Vote} from './styles'
import {useSelector} from 'react-redux'
import { FiTrash } from 'react-icons/fi'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { removeList } from '../../store/modules/listSalve/actions'



export default function MySalve (){

    const dispatch = useDispatch()

    let data = useSelector(state => state.ListSalve)

    

    const handleRemoveItem = (id) =>{
        dispatch(removeList(id))
    }

    return(

        <Container>
            {console.log(data =='')}
            
            <div className='text-title'>
                <h1>Lista de favoritos</h1>
            </div>


            {data == '' &&(
                <section>
                    <h2>Voce não possuir filmes salvos :(</h2>
                </section>
            )}
            <Content
                
            >
                {data.map(item =>(
                    <div key={item.id}>
                     
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w200${item.image}`} alt={item.name} />
                        </div>
                        <h2>{item.name ? item.name : item.original_title}</h2>
                        {item.lancamento ? (<span>{new Date(item.lancamento).getFullYear()}</span>) : (
                            <span>{new Date(item.dataMovie).getFullYear()}</span>
                        )}
                        
                        {item.temporadas ? (<i>{item.temporadas > 1 ? `${item.temporadas} Temporadas`: `${item.temporadas} Temporada` }</i>) :(
                        <i>Movie</i>)}
                        <Vote  className={item.vote_average > 6 ? 'vote_green' : 'vote_red'}>{item.vote_average}</Vote>
                        <button onClick={()=> handleRemoveItem(item.id)}>
                            <FiTrash size={30} color="#000" />
                        </button>
                    </div>
                ))}
            </Content>
        </Container>
    )
}