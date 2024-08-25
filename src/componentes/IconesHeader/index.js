import '../IconesHeader/estilo.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader () {
    return (
        <ul className='icones'>
            { icones.map ( (icones) => (
                <li className='icone'> <img src={icones} alt='icones'></img></li>
        ) ) }
      </ul>
    )
}

export default IconesHeader;