import styles from '../styles/Home.module.css'
import { Illustration } from "web3uikit"


export default function Servizi() {

  return (

<div className={styles.container}> 
    <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
    <script src="https://cdn.tailwindcss.com"></script>
        <section className="pt-20 lg:pt-[30px] pb-10 lg:pb-[30px] bg-gray-200 mt-2 mb-2">
            <div className="place-content-center container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-6 lg:mb-10 max-w-[510px]">
                            <h1 className="text-3xl uppercase sm:text-4xl md:text-[40px] mb-4">
                                Servizi offerti
                            </h1>
                            <p className="text-base color:#637381;">
                                Ecco alcuni dei servizi offerti da Samuele Chiesa, in qualità di esperto <b> smart contract developer</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="service-spot0">
                        <div className="service-spot">
                            <div
                                className="service-img"
                                style={{
                                    backgroundColor: '#C7D2FE',
                                    height: '90px'
                                }}                            
                                >
                                <Illustration height="70px" width='75px' logo="polygon"/>
                                <Illustration height="70px" width='75px' logo="ethereum" />
                                <Illustration height="70px" width='75px' logo="binance" />
                            </div>
                            <h4 className="service-h4">
                                Sviluppo Solidity
                            </h4>
                            <p className="text-body-color text-center">
                                Offriamo servizi di sviluppo di smart contract utilizzando Solidity 
                                per la creazione di soluzioni decentralizzate su blockchain come Ethereum.
                            </p>
                        </div>
                    </div>
                    <div className="service-spot0">
                        <div className="service-spot">
                            <div
                                className="service-img"
                                style={{
                                    backgroundColor: '#C7D2FE',
                                    height: '90px'
                                    }}                            
                                >
                                <Illustration height="75px" width='80px' logo="comingSoon"/>
                                <Illustration height="75px" width='80px' logo="confirmed" />
                            </div>
                            <h4 className="service-h4">
                                Creazione DApp
                            </h4>
                            <p className="text-body-color text-center">
                                Creiamo applicazioni decentralizzate (DApp) utilizzando tecnologie 
                                blockchain per fornire soluzioni affidabili e sicure ai nostri clienti.
                            </p>
                        </div>
                    </div>
                    <div className="service-spot0">
                        <div className="service-spot">
                            <div
                                className="service-img"
                                style={{
                                    backgroundColor: '#C7D2FE',
                                    height: '90px'
                                    }}                            
                                >
                                <Illustration height="80px" width='95px' logo="pack"/>
                                <Illustration height="80px" width='95px' logo="marketplace" />
                            </div>
                            <h4 className="service-h4">
                                Creazione NFT
                            </h4>
                            <p className="text-body-color text-center">
                                Sviluppiamo e creiamo token non fungibili (NFT) per le tue esigenze 
                                di proprietà digitale e di mercato. <br /> <br />
                            </p>
                        </div>
                    </div>
                    <div className="service-spot0">
                        <div className="service-spot">
                            <div
                                className="service-img"
                                style={{
                                    backgroundColor: '#C7D2FE',
                                    height: '90px'
                                    }}                            
                                >
                                <Illustration height="80px" width='80px' logo="token"/>
                                <Illustration height="80px" width='80px' logo="looking" />
                            </div>
                            <h4 className="service-h4">
                                Tokenomics
                            </h4>
                            <p className="text-body-color text-center">
                            Aiuto nella creazione e nell'implementazione di token personalizzati per la tua 
                            attività, comprese le strategie di distribuzione e la definizione del modello di token. 
                            </p>
                        </div>
                    </div>
                    <div className="service-spot0">
                        <div className="service-spot">
                            <div
                                className="service-img"
                                style={{
                                    backgroundColor: '#C7D2FE',
                                    height: '90px'
                                    }}                            
                                >
                                <Illustration height="70px" width='80px' logo="documentation"/>
                            </div>
                            <h4 className="service-h4">
                                White paper
                            </h4>
                            <p className="text-body-color text-center">
                                Offriamo servizi di scrittura di white paper per aiutare 
                                le aziende a presentare e descrivere le loro idee e progetti 
                                a potenziali investitori e stakeholder.  <br /><br />
                            </p>
                        </div>
                    </div>
                    <div className="service-spot0">
                        <div className="service-spot">
                            <div
                                className="service-img"
                                style={{
                                    backgroundColor: '#C7D2FE',
                                    height: '90px'
                                    }}                            
                                >
                                <Illustration height="80px" width='80px' logo="servers" />
                                <Illustration height="80px" width='80px' logo="chest" />
                            </div>
                            <h4 className="service-h4">
                                Consulenza sulla blockchain
                            </h4>
                            <p className="text-body-color text-center">
                                Offriamo consulenza esperta per aiutarti a scegliere la migliore
                                soluzione blockchain per le tue esigenze e a implementare al meglio la tecnologia.  <br /> <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}
