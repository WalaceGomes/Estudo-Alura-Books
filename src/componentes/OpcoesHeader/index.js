import '../OpcoesHeader/estilo.css'
const textoOpcoes = ['CATEGORIAS', 'MINHA ESTASNTE', 'FAVORITOS']

function OpcoesHeader () {
    return (
        <ul className='opcoes'>
        {
          textoOpcoes.map( (texto) => (
              <li className='opcao'><p>{texto}</p></li>
            ) ) }
        </ul>
    )
}

export default OpcoesHeader;