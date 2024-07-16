import styles from './Rodape.module.css'
import { IoLogoGithub } from "react-icons/io";
import logo from './logo.png'
import { Link } from 'react-router-dom';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Link to="./" className={styles.logo}>
                <img src={logo} alt="LogoAluraFlix"/>
            </Link>
            <h2 className={styles.texto}>Desenvolvido por Gabriel Batistela - 2024</h2>
            <div className={styles.redes_sociais}>
                <a href="https://github.com/Gabriel-Batistela" target="_blank" rel="noopener noreferrer" >
                    <IoLogoGithub className={styles.icone} alt="imagem github" />
                </a>
            </div>
        </footer>
    )
}

export default Rodape