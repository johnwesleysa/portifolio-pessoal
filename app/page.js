import Image from "next/image";
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.Frame1}>
        <div className={styles.Frame1Black}>
          <div>
            <h1>John <br/> Alencar.</h1>
            <br/>
            <p>Gosto de criar novos sitemas e automizar o que for possível</p>
            <h4 className={styles.pApaixonado}>Apaixonado por desenvolvimento Web desde 2024</h4>
          </div>
          
        </div>
        
        
        <div className={styles.Frame1White}>
          
        </div>
      </div>


      <div className="Frame2White">
        <h2>Projetos</h2>
        <ul>
          <li>
            <p>Portifolio Pesosal</p>
            <ul>
              <li><a href="#">Site</a></li>
              <li><a href="#">Github</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="Frame2Black">
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

      <div className="Frame3Black">
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

      <div className="Frame3White">
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


      <div className="Frame4White">
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
    </>
    
    
  );
}
