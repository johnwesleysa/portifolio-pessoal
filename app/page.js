"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";


export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div id="home" className={styles.Frame1}>
        <div className={styles.Frame1Black}>
          <div className={styles.Frame1BlackHeader}>
            
            <img
              src="/logo.png"
              alt="John Alencar"
              className={styles.Frame1BlackLogo}
            />

            {/* Botão hambúrguer visível apenas no mobile */}
            <button
              className={styles.menuToggle}
              onClick={() => setMenuAberto(!menuAberto)}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>


            {/* Menu desktop */}
            <ul className={styles.menuDesktop}>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#educacao">Educação</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>

            {/* Menu mobile */}
            {menuAberto && (
              <ul className={styles.menuMobile}>
                <li><a href="#projetos" onClick={() => setMenuAberto(false)}>Projetos</a></li>
                <li><a href="#skills" onClick={() => setMenuAberto(false)}>Skills</a></li>
                <li><a href="#educacao" onClick={() => setMenuAberto(false)}>Educação</a></li>
                <li><a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
              </ul>
            )}
          </div>

          <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>John <br /> Alencar</h1>
          </motion.div>
            <br />
            <p>Gosto de criar novos sistemas e automatizar o que for possível</p>
            <h4 className={styles.pApaixonado}>
              Apaixonado por desenvolvimento Web desde 2024
            </h4>
          </div>
        </div>

        <div className={styles.Frame1White}></div>
        <img
          src="/john.jpg"
          alt="John Alencar"
          className={styles.Frame1Image}
        />
      </div>

      {/* Botão flutuante */}
      {showButton && (
        <button onClick={scrollToTop} className={styles.scrollToTopButton}>
          <ArrowUp size={32} color="#FFF" />
        </button>
      )}

      {/* Frame 2 - Projetos & Skills */}
      <div id="projetos" className={styles.Frame2}>
        <div className={styles.Frame2White}>
          <div className={styles.Frame2WhiteContent}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projetos
          </motion.h1>
            <ul>
              <li>
                <a href="#home">Portfólio Pessoal</a>
                <ul className={styles.Frame2WhiteContentUl}>
                  <li>
                    <a href="#"><img src="/github.svg" alt="GitHub" /></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="skills" className={styles.Frame2Black}>
          <div className={styles.Frame2BlackContent}>
            <motion.div
              initial={{ opacity: 0, y: 50}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.6}}
            >
              <h1>Skills</h1>
              </motion.div>
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

      {/* Frame 3 - Educação & Cursos */}
      <div id="educacao" className={styles.Frame3}>
        <div className={styles.Frame3Black}>
          <div className={styles.Frame3BlackContent}>
            <motion.div
              initial={{ opacity: 0, y:50}}
              whileInView={{ opacity: 1, y:0}}
              transition={{ duration:0.6}}
            >
              <motion.div
                intial={{ opacity: 0, y:50}}
                whileInView={{ opacity: 1, y:0}}
                transition={{ duration: 0.6}}
              >
                <h1>Educação</h1>
              </motion.div>
            </motion.div>
            <ul>
              <li>
                <p>Redes de Computadores</p>
                <ul><li><p>UNIBRA - 2021</p></li></ul>
              </li>
              <li>
                <p>Análise e Desenvolvimento de Sistemas</p>
                <ul><li><p>SENAC - 2026</p></li></ul>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.Frame3White}>
          <div className={styles.Frame3WhiteContent}>
            <motion.div
              initial={{ opacity: 0, y: 50}}
              whileInView={{ opacity: 1, y:0}}
              transition={{ duration: 0.6}}
            >
              <h1>Cursos</h1>
            </motion.div>
            <ul>
              <li>
                <p>Python 3 do básico ao avançado</p>
                <ul><li><p>Luiz Otávio Miranda</p></li></ul>
              </li>
              <li>
                <p>Python Essentials 1</p>
                <ul><li><p>Cisco Academy</p></li></ul>
              </li>
              <li>
                <p>XP inc. - Full Stack Developer</p>
                <ul><li><p>DIO - Bootcamp</p></li></ul>
              </li>
              <li>
                <p>Trilha Digital - Engenharia de dados</p>
                <ul><li><p>ADA TECH</p></li></ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Frame 4 - Contato & Redes Sociais */}
      <div id="contato" className={styles.Frame4}>
        <div className={styles.Frame4White}>
          <div className={styles.Frame4WhiteContent}>
            <motion.div
              initial={{ opacity: 0, y:50}}
              whileInView={{ opacity: 1, y:0}}
              transition={{ duration: 0.6}}
            >
              <h1>Contato</h1>
            </motion.div>
            <ul>
              <li>
                <p>Telefone</p>
                <ul><li><p>(81) 9 99413-2082</p></li></ul>
              </li>
              <li>
                <p>Email</p>
                <ul><li><p>johnnalencarr@gmail.com</p></li></ul>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.Frame4Black}>
          <div className={styles.Frame4BlackContent}>
            <motion.div
              initial={{ opacity: 0, y: 50}}
              whileInView={{ opacity: 1, y:0}}
              transition={{ duration: 0.6}}
            >
              <h1>Redes Sociais</h1>
            </motion.div>
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
