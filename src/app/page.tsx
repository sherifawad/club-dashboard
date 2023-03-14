import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import TopCards from "@/components/TopCards";
import { dataAsTOtal } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <TopCards {...dataAsTOtal} />
        </div>
    );
}
