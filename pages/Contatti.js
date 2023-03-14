import styles from '../styles/Home.module.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contatti() {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      const SERVICE = process.env.REACT_APP_SERVICE
      // NICE TO HAVE ma al momento non va process.env (prima andava così)
      //emailjs.sendForm(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE, form.current, "kIP4C5F3zqtBdKR8t")
      emailjs.sendForm("service_9fm0fbn","template_78yuxve", form.current, "kIP4C5F3zqtBdKR8t")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className={styles.container} > 
            <div className="lg:flex flex-row items-center justify-center p-12 bg-gray-100 mt-2 mb-2 lg:inline-block md:min-h-[95vh]">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-6 lg:mb-10 max-w-[510px]">
                            <h1 className="text-3xl uppercase sm:text-4xl md:text-[40px] mb-4">
                                Contatti
                            </h1>
                            <p className="text-base color:#637381; hidden md:block">
                                Sono sempre felici di sentirti! Se hai bisogno di aiuto, hai domande o vorresti fissare un appuntamento o ricevere un preventivo, sono a tua disposizione. Compila il form per inviarni un messaggio e sarei contattato al più presto. Grazie!
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className="mx-auto w-full max-w-[550px]">
                    <form ref={form} onSubmit={sendEmail} isRequired>
                        

                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="contact-label"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="sender"
                                id="sender"
                                placeholder="Enter your email"
                                className="contact-general-input"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="contact-label"
                            >
                            Numero di telefono
                            </label>
                            <input
                                type="tel"
                                name="telefono"
                                id="telefono"
                                placeholder="Enter your phone numebr"
                                className="contact-general-input"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="subject"
                                className="contact-label"
                            >
                                Oggetto
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your subject"
                                className="contact-general-input"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="body"
                                className="contact-label"
                            >
                               Messaggio
                            </label>
                            <textarea
                                rows="4"
                                name="body"
                                id="body"
                                placeholder="Type your message"
                                className="contect-message"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                className="submit-style"
                                >
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    )
}