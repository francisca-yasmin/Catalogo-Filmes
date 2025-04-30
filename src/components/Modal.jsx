import estilos from './Modal.module.css';

export function Modal({ movie, onClose }){
    if(!movie){
        return null;
    }
    console.log(movie);

    return (
        <>
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                
                <div className={estilos.ModalHeader}> 
                    <h2>{movie.title}</h2> {/* puxa titulo do filme da API */ }
                    <button onClick={onClose}>X</button>
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <div className={estilos.imgDetails}>
                        <ul>
                            {/* bloco de informações presentes no modal */}
                            <li>{`Popularidade : ${movie.popularity}`}</li>
                            <li>{`Data de Lançamento: ${movie.release_date}`}</li>
                            <li>{`Quantidade de votos: ${movie.vote_count}`}</li>
                        </ul>
                        {/* sinopse do filme */}
                        <p>{movie.overview}</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}