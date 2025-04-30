import estilos from './Header.module.css';

// estrutura basica para os componentes
export function Header(){

    return (
        <>
            <header className={estilos.conteiner}>
                {/* titulo da pagina -> presente em todas as telas */}
                <h1 className={estilos.titulo}> ChicaFlix </h1>
            </header>  
        </>
    )
}