import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import estilos from  './Perfil.module.css';
import miranha from '../assets/miranha.jpg';


export function Perfil(){
    return(
         <>

                {/* bloco de perfil do usuario onde contem, icone de imagem
                    seção de ultimos assistidos, favoritos e uma lista do usuario */}
            <div className={estilos.container}>
            <div className={estilos.header}>
                <img src={miranha} alt="Avatar" className={estilos.avatar} />
                <div>
                <h2>Chiquinha</h2>
                <p>Nível: Louco por filmes</p>
                </div>
            </div>

            <div className={estilos.section}>
                <h3>🎬 Últimos assistidos</h3>
                <ul>
                <li>A paixão de Cristo</li>
                <li>Barbie</li>
                <li>Duna: Parte 2</li>
                </ul>
            </div>

            <div className={estilos.section}>
                <h3>⭐ Filmes Favoritos</h3>
                <ul>
                <li>Enrolados</li>
                <li>Cartas para Julieta</li>
                <li>Mufasa</li>
                </ul>
            </div>

            <div className={estilos.section}>
                <h3> 🐱‍🐉 Series Favoritas </h3>
                <ul>
                <li>The Rain</li>
                <li>The Umbrella Academy</li>
                <li>Peaky Blinders</li>
                </ul>
            </div>

            <div className={estilos.section}>
                <h3>🎀 Minha Lista</h3>
                <ul>
                <li>Matrix</li>
                <li>La La Land</li>
                <li>The Last Of Us</li>
                </ul>
            </div>
            </div>
        
        </>
    )
}
