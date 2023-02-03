import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            {//<div className="body-font font-pacifico sm:text-5xl md:text-[30px]">Samuele Chiesa</div>
            }


            <div class="lg:hidden group inline-block">
            <button data-collapse-toggle="navbar-default" type="button" class="lg:hidden inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <ul
                class="rounded-sm transform scale-0 group-hover:scale-100 absolute 
                    transition duration-150 ease-in-out origin-top min-w-32 
                    flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 text-center overflow:hidden"
            >
                <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                    <Link legacyBehavior href="/">
                        <a className="mr-4 p-6">About me</a>
                    </Link>
                </li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                    <Link legacyBehavior href="/Servizi">
                        <a className="mr-4 p-6">Servizi</a>
                    </Link>
                </li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                    <Link legacyBehavior href="/NFT_Gallery">
                        <a className="mr-4 p-6">NFT Gallery</a>
                    </Link>
                </li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                    <Link legacyBehavior href="/Contatti">
                        <a className="mr-4 p-6">Contatti</a>
                    </Link>
                </li>
                <ConnectButton moralisAuth={false} />
            </ul>
            </div>



            <img src="/logo.ico" className="lg:w-2/12 w-1/2"></img>
            <div class="hidden lg:block">
                <div className="flex flex-row items-center md:w-auto">
                    <Link legacyBehavior href="/">
                        <a className="mr-4 p-6">About me</a>
                    </Link>
                    <Link legacyBehavior href="/Servizi">
                        <a className="mr-4 p-6">Servizi</a>
                    </Link>
                    <Link legacyBehavior href="/NFT_Gallery">
                        <a className="mr-4 p-6">NFT Gallery</a>
                    </Link>
                    <Link legacyBehavior href="/Contatti">
                        <a className="mr-4 p-6">Contatti</a>
                    </Link>
                    <ConnectButton moralisAuth={false} />
                </div>
            </div>
            
            



        </nav>
    )
}