import styles from '../styles/Home.module.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contatti() {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE, form.current, 'kIP4C5F3zqtBdKR8t')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className={styles.container} > 
            <div class="lg:flex flex-row items-center justify-center p-12 bg-gray-100 mt-2 mb-2 inline-block md:min-h-[95vh]">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full px-4">
                        <div class="text-center mx-auto mb-6 lg:mb-10 max-w-[510px]">
                            <h1 class="text-3xl uppercase sm:text-4xl md:text-[40px] mb-4">
                                Contatti
                            </h1>
                            <p class="text-base color:#637381; hidden md:block">
                            Sono sempre felici di sentirti! Se hai bisogno di aiuto, hai domande o vorresti fissare un appuntamento o ricevere un preventivo, sono a tua disposizione. Compila il form per inviarni un messaggio e sarei contattato al più presto. Grazie!
                            </p>
                        </div>
                    </div>
                </div>
            
                <div class="mx-auto w-full max-w-[550px]">
                    <form ref={form} onSubmit={sendEmail}>
                        

                        <div class="mb-5">
                            <label
                            for="email"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Email
                            </label>
                            <input
                            type="email"
                            name="sender"
                            id="sender"
                            placeholder="Enter your email"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                            />
                        </div>
                        <div class="mb-5">
                            <label
                            for="name"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Numero di telefono
                            </label>
                            <input
                            type="tel"
                            name="telefono"
                            id="telefono"
                            placeholder="Enter your phone numebr"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                            />
                        </div>
                        <div class="mb-5">
                            <label
                            for="subject"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Oggetto
                            </label>
                            <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Enter your subject"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                            />
                        </div>
                        <div class="mb-5">
                            <label
                            for="body"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Messaggio
                            </label>
                            <textarea
                            rows="4"
                            name="body"
                            id="body"
                            placeholder="Type your message"
                            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md h-[25vh]"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
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