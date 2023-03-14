import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}> 

      <div className="mx-auto inline-block lg:h-screen mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:h-screen">
          <div className="max-h-90 lg:h-screen">
            <img className="w-screen object-cover object-top lg:h-screen" 
                  src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="image problem"
            />
          </div>
          <div className="flex bg-gray-100 p-10">
            <div className="mb-auto mt-auto">
              <h1 className="text-3xl uppercase mb-2">Smart Contract Developer</h1>
              <p className="font-semibold mb-5">Samuele Chiesa</p>
              <p className="text-base text-body-color text-justify"> 
                  Samuele è un esperto sviluppatore di Smart Contract che è venuto in contatto con Bitcoin nel 2013. Con un background di trading e investimenti in criptovalute, ha poi continuato ad approfondire la sua conoscenza dell'informatica presso l'Università degli Studi di Milano, dove ha conseguito una brillante laurea. Prima di diventare un sviluppatore autonomo e indipendente, ha lavorato come esperto in cyber security presso KPMG. Con la sua vasta conoscenza dei linguaggi di programmazione come Solidity, Node, HTML, CSS, Next.js, GraphQL e NoSQL, è pronto a offrire soluzioni di qualità superiore per la creazione di contratti intelligenti decentralizzati e sicuri.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}