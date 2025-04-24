import  { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { Body } from '../components/Body';
import { Footer } from '../components/Footer';

export function Inicial(){
    return(
        <>
            <Header/>
            <Navbar/>
            <Body/>
            <Outlet/>
            <Footer/>
        </>
    )
}