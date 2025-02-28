"use client";

import styles from "./page.module.css"
import { useEffect, useState } from "react";  
import { ArrowUp } from "lucide-react";

export default function Home() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth' });
  }
  

  return (
    <>
      <div id="home" className={styles.Frame1}>
        <div className={styles.Frame1Black}>
          <div className={styles.Frame1BlackHeader}>
          <img src="/logo.png" alt="John Alencar" className={styles.Frame1BlackLogo} />
            <ul>
              <li>
                <a href="#projetos">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#educacao">
                  Educação
                </a>
              </li>
              <li>
                <a href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>John <br/> Alencar.</h1>
            <br/>
            <p>Gosto de criar novos sitemas e automizar o que for possível</p>
            <h4 className={styles.pApaixonado}>Apaixonado por desenvolvimento Web desde 2024</h4>
          </div>
          
        </div>
        
        
        <div className={styles.Frame1White}>
          
        </div>

        <img src="/john.jpg" alt="John Alencar" className={styles.Frame1Image}/>
      </div>

      {/*Botão flutuante :)*/}
      {showButton && (
        <button onClick={scrollToTop} className={styles.scrollToTopButton}> 
          <ArrowUp size={32} color="#FFF" />
        </button>
      )}


      <div id="projetos" className={styles.Frame2}>
        <div className={styles.Frame2White}>
          <div className={styles.Frame2WhiteContent}>
            <h1>Projetos</h1>
            <ul>
              <li>
                <a href="#home">
                  Portifolio Pessoal
                </a>
                <ul className = {styles.Frame2WhiteContentUl}>
                  <li>
                    <a href="#"><img src="/github.svg" alt="Image GitHub" /></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="skills" className={styles.Frame2Black}>
          <div className={styles.Frame2BlackContent}>
            <h1>Skills</h1>
            <ul>
              <li>Python</li>
              <li>Python para análise de dados</li>
              <li>Django</li>
              <li>Selenium</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript (JS)</li>
              <li>Typescript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Next.JS</li>
              <li>Swagger</li>
              <li>SQL Server</li>
              <li>C++</li>
              <li>C#</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="educacao" className={styles.Frame3}>
        <div className={styles.Frame3Black}>
          <div className={styles.Frame3BlackContent}>
            <h1>Educação</h1>
            <ul>
              <li>
                <p>Redes de Computadores</p>
                <ul>
                  <li><p>UNIBRA - 2021</p></li>
                </ul>
              </li>
              <li>
                <p>Análise e Desenvolvimento de Sistemas</p>
                <ul>
                  <li><p>SENAC - 2026</p></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.Frame3White}>
          <div className={styles.Frame3WhiteContent}>
            <h1>Cursos</h1>
            <ul>
              <li>
                <p>Python 3 do básico ao avançado</p>
                <ul>
                  <li><p>Luiz Otávio Miranda</p></li>
                </ul>
              </li>
              <li>
                <p>Python Essentials 1</p>
                <ul>
                  <li><p>Cisco Academy</p></li>
                </ul>
              </li>
              <li>
                <p>XP inc. - Full Stack Developer (.NET, SQL Server, React, Next.js, Node.js, Azure)</p>
                <ul>
                  <li><p>DIO - Bootcamp</p></li>
                </ul>
              </li>
              <li>
                <p>Trilha Digital - Engenharia de dados</p>
                <ul>
                  <li><p>ADA TECH</p></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div id="contato" className={styles.Frame4}>
        <div className={styles.Frame4White}>
          <div className={styles.Frame4WhiteContent}>
            <h1>Contato</h1>
            <ul>
              <li>
                <p>Telefone</p>
                <ul>
                  <li><p>(81) 9 99413-2082</p></li>
                </ul>
              </li>
              <li>
                <p>Email</p>
                <ul>
                  <li>johnnalencarr@gmail.com</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.Frame4Black}>
          <div className={styles.Frame4BlackContent}>
            <h1>Redes Sociais</h1>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/johnnalencar/">
                  Linkedin
                </a>
              </li>
              </ul>
          </div>
        </div>
      </div>
    </>
    
    
  );
}
