import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="Frame1Black">
        <h1>John <br/> Alencar</h1>
        <h3>Gosto de criar novos sitemas e automizar o que for possível</h3>
        <p>Apaixonado por desenvolvimento Web desde 2024</p>
      </div> 
      
      <div>
        <Image 
          src="/john.jpg" 
          alt="John Alencar" 
          width={300} 
          height={300} 
        />
      </div>

      <div class="Frame1White">

      </div>


      <div class="Frame2White">
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

      <div class="Frame2Black">

      </div>

      <div class="Frame3Black">
        
      </div>
    </>
    
    
  );
}
