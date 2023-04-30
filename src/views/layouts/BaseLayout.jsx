import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { appConfig } from "@/apps/config/app.config";
// @font
const inter = Inter({ subsets: ["latin"] });


const BaseLayout = ({ children, title, description }) => (
    <>
        <Head>
            <title>{title ? title + " | " + appConfig.appName : appConfig.appName}</title>
            <meta name="description" content={description || appConfig.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.meta} ${inter.className}`}>
            {children}
        </main>
    </>
);
export default BaseLayout;