import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div className={styles.container} > 
      <div className="p-12 md:bg-gray-100 mt-2 mb-2 md:max-h-[73vh] md:bg-[url('../public/Rogeri.ico')] bg-[url('../public/testa.ico')] bg-contain bg-no-repeat bg-center">
        <p class='lg:text-10xl md:text-8xl md:text-6xl text-2xl text-center text-slate-400 font-pacifico pt-40 pb-40'>Fondazione<br></br>pro Canale</p>
      </div>
    </div>
  )
}5