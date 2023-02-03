import { useMoralis } from "react-moralis"
import { Input, Button, ConnectButton, useNotification } from "web3uikit"


export default function Donation() {

    const { isWeb3Enabled, chainId, Moralis, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337"
    console.log(chainString)
    const dispatch = useNotification();


    const invalidAmount = ()=>{
        dispatch({
            type:"error",
            message: 'La quantità inserita non è valida, aggiungere un quantitativo maggiore di 0',
            title: 'INVALID AMOUNT',
            position: 'bottomR',
        })
    }

    const invalidBalance = ()=>{
        dispatch({
            type:"error",
            message: 'La quantità non coperta dal bilancio nel wallet',
            title: 'INVALID BALANCE',
            position: 'bottomR',
        })
    }

    const handlerDonation = ()=>{
        dispatch({
            type:"success",
            message: 'La donazione è avvenuta correttamente',
            title: 'DONAZIONE AVVENUTA',
            position: 'bottomR',
        })
    }

    async function donazione(prezzo) {
        console.log("stai donando: "+ prezzo.toString())
        const options = {
            type: "native",
            amount: Moralis.Units.ETH(prezzo),
            receiver: "0x8b3812c3d02bbD46552DcEF1E471b69ff0376c10",
        }
        let result = await Moralis.transfer(options);
        result ? handlerDonation() : console.log("non OK")
    }
    return (
      <div class="border-t-2 container mx-auto px-6 py-16 pt-18 text-center">
      <div class="mx-auto max-w-4xl">
        <h1 class="text-3xl font-bold text-gray-500 md:text-4xl">DONATIONS</h1>

        <p class="mt-6 text-gray-500 dark:text-gray-400">Grazie per aver visitato il mio sito web. Se sei interessato a supportare il mio lavoro come sviluppatore di smart contract, puoi farlo facilmente tramite criptovalute. Ogni donazione è apprezzata e mi aiuterà a continuare a offrire servizi di alta qualità e a sviluppare nuovi progetti. </p>
      

        {isWeb3Enabled ? (
          <div class="lg:inline-flex pt-6">
            <div class="px-2">  
              <Input
                label="how many?"
                id="Donation"
                type="integer"
              />
            </div> 
            <div class="pl-2">
              <Button
                onClick={() => {
                  let amount = document.getElementById("Donation").value;
                  (!amount) ? invalidAmount() : donazione(amount)
                }}
                size="large"
                text="INVIA"
                theme="custom"
                customize={{
                  backgroundColor: '#E2E8F0',
                  border: '4px solid #0F172A',
                  color: '#0F172A',
                  fontSize: '20px',
                  fontWeight: '700',
                  margin: '20px',
                  onHover: 'darken',
                  padding: '8px 12px'
                }}
              />
            </div> 

          </div>
          ) : (
          <div class="pt-5 place-content-center">
            <ConnectButton class="place-content-center"/>
          </div>
        )}
      </div>
    </div>
    )
}