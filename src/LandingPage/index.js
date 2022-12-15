import { useState } from 'react';
import logo from '../assets/barbearia-logo.png';
import sol from '../assets/sun.png';
import lua from '../assets/moon.png';
import './style.css';

function Conteudo(){

    const [ ehTemaEscuro, setEhTemaEscuro ] = useState(false);

    const alterar = () => {
       setEhTemaEscuro(!ehTemaEscuro);
    }

    //Segunda fora de fazer a função
    // function alterar(){
    //     if(ehTemaEscuro === false){
    //         setEhTemaEscuro(!ehTemaEscuro)
    //     }else{
    //         setEhTemaEscuro(!ehTemaEscuro)
    //     }
    // }

    return(
        <div className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
            <header>
                <div>
                    <img src={logo} alt="logo" className='logo'/>
                    <button onClick={alterar} className={ehTemaEscuro ? 'modo-escuro':'modo-claro'}>
                        <img alt="lua-sol" src={ehTemaEscuro ? sol : lua } / >
                        {ehTemaEscuro ? 'Light' : 'Dark'}
                    </button>
                </div>
            </header>
            <main>
                <section className="secao-banner"></section>

                <section className="secao-conteudo">
                    <h1>Bem-vindo a barbearia Shop</h1>
                    <p className='p-negrito'>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    <p className='assinatura'>S. Kelly</p>
                </section>
            </main>
        </div>
    );
}

export default Conteudo;