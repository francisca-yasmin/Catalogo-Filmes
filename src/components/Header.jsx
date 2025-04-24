import estilos from './Header.module.css';

// estrutura basica para os componentes
export function Header(){
    return (
        <>
        <header className={estilos.conteiner}>
            <h1 className={estilos.titulo}> Filmes da Chica</h1>
        </header>
        
        </>
    )
}