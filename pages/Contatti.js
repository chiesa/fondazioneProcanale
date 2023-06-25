import styles from '../styles/Home.module.css'
import React, { useRef } from 'react';

export default function Contatti() {

  return (
    <div className={styles.container} > 
        <div className="p-12 md:bg-gray-100 mt-2 mb-2 md:max-h-[73vh]">
            <h1 className="text-3xl uppercase sm:text-4xl md:text-[40px] text-center">
                    Dati generali
            </h1>

            <div className="items-center md:flex flex-row items-center justify-center lg:p-12 inline-block">
               
                <div className="flex flex-wrap mx-auto w-full max-w-[350px]">

                    <p className="text-base color:#637381;">
                    <br/>
                        <p className="font-bold">
                            Ragione sociale:
                        </p>
                        Fondazione pro Canale ETS <br/>
                        <br/>

                        <p className="font-bold">
                            Presidente:
                        </p>
                        Giovanni Peterlongo,<br/>
                        <br/>
                        
                        <p className="font-bold">
                            C.F. e P.IVA
                        </p> 
                        97240400156<br/>
                        <br/>

                        <p className="font-bold">
                            Coordinate bancarie:
                        </p>
                        c/c Banca Intesa<br/>
                        IBAN: IT36Y0306909606100000185333<br/>
                        BIC: BCITITMM
                    </p>
                </div>
            
                <div className="mx-auto w-full max-w-[350px]">

                    <p className="text-base color:#637381">
                        <br/>
                        <p className="font-bold">
                            Indirizzo:
                        </p> 
                        viale Vittorio Veneto 20, 20124 Milano (MI) 
                        <br/>
                        <br/>
                        <p className="font-bold">
                            Caselle di posta:
                        </p>
                        admin@procanale.it<br/>
                        fondazione@procanale.it<br/>
                        <br/>
                        <p className="font-bold">
                            Recapiti telonici:
                        </p>
                        Francesca Peterlongo: +393355459237<br/>
                        Carlo Chiesa: +390239210371
                    </p>

                </div>

            </div>
        </div>
    </div>
    )
}