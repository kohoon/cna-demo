import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { DatePicker } from "antd";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <img src="/vercel.svg" />
                <Link href="/articles">
                    <a>Article List</a>
                </Link>
                <Link href="/second">
                    <a>Second Page</a>
                </Link>
                <Link href="/get-uuid">
                    <a>Get UUID</a>
                </Link>
                <div className="mb-2">
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                            Tailwind Button
                        </button>
                    </div>
                </div>
                <div>
                    <DatePicker />
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    );
}
