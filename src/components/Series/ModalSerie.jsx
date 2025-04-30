import estilos from './ModalSerie.module.css';

export function ModalSerie({ serie, onClose }){
    if(!serie){
        return null;
    }
    console.log(serie);

    return (
        <>
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                
                <div className={estilos.ModalHeader}> 
                    <h2>{serie.name}</h2>
                    <button onClick={onClose}>X</button>
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} />
                    <div className={estilos.imgDetails}>
                        <ul>
                            <li>{`Popularidade : ${serie.popularity}`}</li>
                            <li>{`Data de Lançamento: ${serie.first_air_date}`}</li>
                            <li>{`Quantidade de votos: ${serie.vote_count}`}</li>
                        </ul>
                         {/* sinopse da serie */}
                        <p>{serie.overview}</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}