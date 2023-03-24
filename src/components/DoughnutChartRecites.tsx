"use client";

import { merge } from "@/helpers/dataArray";
import { sportType } from "@/type";
import { Doughnut } from "react-chartjs-2";
import { useStore } from "./Header";

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

interface Props {
    labels: string[];
    label: string;
    legendTitle?: string;
    values: number[];
}

const DoughnutChartRecites = () => {
    const { team, priv, school, prep, special, practice, old, free } =
        useStore();
    const dataToDisplay = {
        labels: [
            "فريق",
            "خاص",
            "مدارس",
            "تجهيزي",
            "مدارس مميزة",
            "ممارسة",
            "تعليم كبار",
        ],
        datasets: [
            {
                label: "عدد الإيصالات",
                data: [
                    team?.recites,
                    priv?.recites,
                    school?.recites,
                    prep?.recites,
                    practice?.recites,
                    old?.recites,
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
                <Doughnut
                    data={dataToDisplay}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        locale: "ar",
                        plugins: {
                            legend: {
                                display: true,
                                align: "center",
                                rtl: true,
                                labels: {
                                    color: "black",
                                    textAlign: "right",
                                    font: {
                                        size: 14,
                                    },
                                },
                                title: {
                                    display: true,
                                    text: "إجمالي الإيصالات",
                                    font: {
                                        size: 22,
                                        weight: "bold",
                                    },
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

export default DoughnutChartRecites;
