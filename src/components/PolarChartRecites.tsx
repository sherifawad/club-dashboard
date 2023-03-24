"use client";

import { merge } from "@/helpers/dataArray";
import { sportType } from "@/type";
import { useStore } from "./Header";
import { PolarArea } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    values: number[];
}

const PolarChartRecites = () => {
    const {
        private_type1,
        private_type2,
        private_type3,
        private_type4,
        private_type5,
        private_type6,
    } = useStore();

    const dataToDisplay = {
        labels: ["4 حصص", "8 حصص", "12 حصة", "24 حصة", "مجموعة 8", "مجموعة 12"],
        datasets: [
            {
                label: "عدد الايصالات",
                data: [
                    private_type1?.recites,
                    private_type2?.recites,
                    private_type3?.recites,
                    private_type4?.recites,
                    private_type5?.recites,
                    private_type6?.recites,
                ],
                backgroundColor: [
                    "rgba(101, 10, 66, 1)",
                    "rgba(251, 110, 245, 1)",
                    "rgba(43, 215, 243, 1)",
                    "rgba(31, 139, 116, 1)",
                    "rgba(12, 255, 136, 1)",
                    "rgba(242, 255, 10, 1)",
                    "rgba(254, 205, 50, 1)",
                    "rgba(255, 59, 0, 1)",
                ],
                borderColor: [
                    "rgba(101, 10, 66, 1)",
                    "rgba(251, 110, 245, 1)",
                    "rgba(43, 215, 243, 1)",
                    "rgba(31, 139, 116, 1)",
                    "rgba(12, 255, 136, 1)",
                    "rgba(242, 255, 10, 1)",
                    "rgba(254, 205, 50, 1)",
                    "rgba(255, 59, 0, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <div className="w-full relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <PolarArea
                    data={dataToDisplay}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        locale: "ar",
                        font: {
                            size: 14,
                            weight: "bold",
                        },
                        color: "black",

                        plugins: {
                            legend: {
                                display: true,
                                align: "center",
                                rtl: true,

                                labels: {
                                    color: "black",
                                    textAlign: "right",
                                    font: {
                                        size: 9,
                                        weight: "bold",
                                    },
                                },
                            },

                            title: {
                                display: true,
                                text: "إجمالي عدد الإيصالات للخاص",
                                font: {
                                    size: 22,
                                    weight: "bold",
                                },
                                color: "black",
                            },
                        },
                        scales: {
                            y: {
                                display: false,
                                ticks: {
                                    color: "black",
                                },
                            },
                            x: {
                                display: false,
                                ticks: {
                                    color: "black",
                                },
                            },
                        },
                    }}
                />
            </div>
        </>
    );
};

export default PolarChartRecites;
