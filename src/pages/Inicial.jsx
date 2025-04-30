import  { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom'; {/* outlet -> import da biblioteca router-dom*/ }
import { Body } from '../components/Body';
import { Footer } from '../components/Footer';

export function Inicial(){
    return(
        <>
        {/* componentes que eu quero ver nas minhas telas */}
            <Header/>
            <Navbar/>
            <Body/>
            {/* espaço em branco que vou preencher com conteudo de outras páginas */}
            <Outlet/> 
            <Footer/>
        </>
    )
}