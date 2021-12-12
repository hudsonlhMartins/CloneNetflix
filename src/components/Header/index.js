import Logo from '../../assets/Netflix_logo.svg'
import AvatarImg from '../../assets/avatar.svg'
import {Container} from './styles'
import {FiSearch, FiBell} from 'react-icons/fi'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'


export default function Header ({black}){

    const amountList = useSelector(state => state.ListSalve.length)


    return (
        <Container hasItem={amountList > 0 ? true : false} className={black ? 'black' : ''}>

            <nav>
                <Link to='/'>
                    <img src={Logo} alt='Logo imagem'/>
                </Link>
                
                <ul>
                    <Link to='/'>Inicio</Link>
                    <li>Series</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <Link to='/mysalve'>Minha lista</Link>
                </ul>
            </nav>

            <div>
                <div>
                    <FiSearch size={24} color='#fff' />
                </div>
                <a>Infantil</a>
                <section>
                    <Link to='/mysalve'>
                        <FiBell size={24} color='#fff' />
                    </Link>
                    
                    <span >
                        {amountList > 0 ? amountList : '' }
                    </span>

                </section>
                
                <img src={AvatarImg} alt='Logo imagem'/>
            </div>


        </Container>
    )
}