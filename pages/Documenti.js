import styles from '../styles/Home.module.css'

export default function NFT_Gallery() {

  return (
    <div className={styles.container}> 
        <div className="md:p-12 md:bg-gray-100 md:mt-2 md:mb-2 md:h-[73vh]">
            <div class='pt-10 md:pr-10 md:pl-10'>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Documento
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Download
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Bilancio d'esercizio 2023
                                </th>
                                <td class="px-6 py-4">
                                    30 Dicembre 2022
                                </td>
                                <td class="px-6 py-4">
                                    <a href="/documenti/bilancio d'esercizio 2023.pdf" class="font-medium text-grey-600 dark:text-grey-500 hover:underline" download>Scarica</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Relazione OdC 2022
                                </th>
                                <td class="px-6 py-4">
                                    30 Dicembre 2022
                                </td>
                                <td class="px-6 py-4">
                                    <a href="/documenti/relazione OdC 2022.pdf" class="font-medium text-grey-600 dark:text-grey-500 hover:underline" download>Scarica</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)}