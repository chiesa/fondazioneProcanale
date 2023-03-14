import styles from '../styles/Home.module.css'

export default function Footer() {
    return (

        <div className="bg-gray-100">
        <footer className={styles.footer}>

                <a
                    href="/contatti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500"
                >
                    Powered by {'Samuele Chiesa'}

                </a>
        </footer>
        </div>
    )
}