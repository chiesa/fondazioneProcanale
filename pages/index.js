import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}> 

      <div class="mx-auto inline-block lg:h-screen mt-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:h-screen">
          <div class="max-h-90 lg:h-screen">
            <img class="w-screen object-cover object-top lg:h-screen" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          </div>
          <div class="flex bg-gray-100 p-10">
            <div class="mb-auto mt-auto">
              <h1 class="text-3xl uppercase mb-2">Smart Contract Developer</h1>
              <p class="font-semibold mb-5">Samuele Chiesa</p>
              <p class="text-base text-body-color text-justify"> Samuele Chiesa è un esperto sviluppatore di contratti intelligenti che è venuto in contatto con Bitcoin nel 2013. Con un background di trading e investimenti in criptovalute, Samuele ha poi continuato ad approfondire la sua conoscenza dell'informatica presso l'Università degli Studi di Milano, dove ha conseguito una brillante laurea. Prima di diventare un sviluppatore autonomo e indipendente, Samuele ha lavorato come esperto in cyber security presso KPMG. Con la sua vasta conoscenza dei linguaggi di programmazione come Solidity, Node, HTML, CSS, Next.js, GraphQL e NoSQL, Samuele è pronto a offrire soluzioni di qualità superiore per la creazione di contratti intelligenti decentralizzati e sicuri.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}