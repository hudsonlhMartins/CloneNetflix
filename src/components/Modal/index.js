import Modal from "react-modal"
import { Content } from "./styles"
import {FiX} from 'react-icons/fi'
import getInfo from '../../Tmdb'
import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'

import {addList} from '../../store/modules/listSalve/actions'



export default function ModalMovie ({handleCloseModal, isModal, item}){
    
    const [infoPlus, setInfoPlus] = useState({})

    const dispatch = useDispatch()

    //console.log(item)

    useEffect(() => {
        const loadTest = async () => {
            const info = await getInfo.getMovieInfo(item.id, item.media_type ? 'movie' : 'tv')
            // console.log(info)
            setInfoPlus({
                trailer: info.data.homepage,
                name: info.data.name,
                image: info.data.poster_path,
                temporadas: info.data.number_of_seasons
            })
        }
        loadTest()

        return ()=> setInfoPlus({})

    }, [])


    const handleAddList = (item) => {
         // console.log(item)
        let data = {
            id: item.id,
            name: item.name,
            original_title: item.original_title,
            overview: item.overview,
            image: item.poster_path,
            vote_average: item.vote_average,
            lancamento: item.first_air_date,
            temporadas: infoPlus.temporadas,
            dataMovie: item.release_date,
        }

        dispatch( addList(data) )
    }


    return (
    <Modal
        isOpen={isModal}
        onRequestClose={handleCloseModal}
        className="content-modal"
        overlayClassName="container-modalOverlay"
    >

        <div onClick={handleCloseModal} className="closeIcon"><FiX size={24} color="#000"/></div>

        <div>
            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
        </div>

        <Content>
            <h1>{item.name ? item.name : item.original_title}</h1>
            <hr/>
            <p> {item.overview} </p>

            <div>
                <a href={infoPlus.trailer} target='_blank' className='trailer'>Trailer</a>
                <button onClick={()=> handleAddList(item)} className='salve'>Salvar</button>
            </div>
        </Content>

    </Modal>)
}