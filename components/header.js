import Link from "next/link"

export default function Header() {
    return (
        
        <nav className="nav-style">
            {//<div className="body-font font-pacifico sm:text-5xl md:text-[30px]">Samuele Chiesa</div>
            }


            <div className="lg:hidden group inline-block">
            <button 
                    data-collapse-toggle="navbar-default" 
                    type="button" 
                    className="button-style" 
                    id="menu-button" 
                    aria-expanded="true" 
                    aria-haspopup="true"
            >
                <span className="sr-only">Open main menu</span>
                <svg 
                        className="w-6 h-6" 
                        aria-hidden="true" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <ul className="ul-head">
                <li className="li-head">
                    <Link legacyBehavior href="/Documenti">
                        <a className="mr-4 p-6">Documenti</a>
                    </Link>
                </li>
                <li className="li-head">
                    <Link legacyBehavior href="/Contatti">
                        <a className="mr-4 p-6">Contatti</a>
                    </Link>
                </li>
            </ul>
        
            </div>
            <div class="relative lg:w-2/12 md:w-2/12 w-1/3">
            <a href="/"><img src="/favicon.ico" className=" relative right-0"/></a>
            </div>
            <div className="hidden lg:block">
                <div className="flex flex-row items-center md:w-auto">
                    <Link legacyBehavior href="/Documenti">
                        <a className="mr-4 p-6">Documenti</a>
                    </Link>
                    <Link legacyBehavior href="/Contatti">
                        <a className="mr-4 p-6">Contatti</a>
                    </Link>
                </div>
            </div>
            
        </nav>
    )
}