import {Container, ContainerArea} from './styles' 
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useState } from 'react'
import Modal from '../Modal'


export default function List({items, key, title}){

    const [scrollX, setScrollX] = useState(0)
    const [modal, setModal] = useState(false)
    const [itemModal, setItemModal] = useState({})

    const handleLeft = ()=>{
        let x = scrollX + Math.round(window.innerWidth / 2)

        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }

    const handleRight = ()=>{
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.data.results.length * 150
        if((window.innerWidth - listW  > x)){
            x = window.innerWidth - listW - 60
        }
        setScrollX(x)
    }   


    const handleCloseModal =() =>{
        setModal(false)
    }

    const handleOpenModal = (item) =>{
        setModal(true)
        setItemModal(item)
    }

    return(
        <Container key={key}>

            <h2>{title}</h2>


            <div className='buttonRigth' onClick={handleLeft}>
                <FiChevronLeft size={30} color='#fff' />
            </div>

            <div className='buttonLeft' onClick={handleRight}>
                <FiChevronRight size={30} color='#fff' />
            </div>




            <ContainerArea className="movie--list-area">
                <div className="movie--list" style={{
                    marginLeft: scrollX,
                    width: items.data.results.length * 150
                }}>
                    {items.data.results.length > 0 && items.data.results.map((item, index)=>(
                        <div onClick={()=> handleOpenModal(item)}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
              
            </ContainerArea>

            {modal && (
                <Modal isModal={modal} handleCloseModal={handleCloseModal} item={itemModal}
                
                />
            )}
           
        </Container>
    )

}