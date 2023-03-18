import { Inter } from "next/font/google";
import DataByDate from "@/components/DataByDate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <DataByDate />
        </div>
    );
}
