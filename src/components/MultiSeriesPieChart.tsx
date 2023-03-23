"use client";

import { Pie } from "react-chartjs-2";
import { useStore } from "./Sidebar";

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

const MultiSeriesPieChart = () => {
    const { team, priv, school, prep, special, practice, old, free } =
        useStore();
    const dataToDisplay = {
        labels: ["بدون خصم", "خصم10", "خصم20", "خصومات إخرى"],
        datasets: [
            {
                label: "خاص",
                data: [
                    priv?.noDiscount_recites,
                    priv?.discount_1_recites,
                    priv?.discount_2_recites,
                    priv?.discount_other_recites,
                ],
                backgroundColor: [
                    "rgba(12, 255, 136, 1)",
                    "rgba(242, 255, 10, 1)",
                    "rgba(254, 205, 50, 1)",
                    "rgba(255, 59, 0, 1)",
                ],
            },
            {
                label: "فريق",
                data: [
                    team?.noDiscount_recites,
                    team?.discount_1_recites,
                    team?.discount_2_recites,
                    team?.discount_other_recites,
                ],
                backgroundColor: [
                    "rgba(101, 10, 66, 1)",
                    "rgba(251, 110, 245, 1)",
                    "rgba(43, 215, 243, 1)",
                    "rgba(31, 139, 116, 1)",
                ],
            },
            {
                label: "مدارس",
                data: [
                    school?.noDiscount_recites,
                    school?.discount_1_recites,
                    school?.discount_2_recites,
                    school?.discount_other_recites,
                ],
                backgroundColor: [
                    "rgba(12, 255, 136, 1)",
                    "rgba(242, 255, 10, 1)",
                    "rgba(254, 205, 50, 1)",
                    "rgba(255, 59, 0, 1)",
                ],
            },
            {
                label: "مدارس مميزة",
                data: [
                    special?.noDiscount_recites,
                    special?.discount_1_recites,
                    special?.discount_2_recites,
                    special?.discount_other_recites,
                ],
                backgroundColor: [
                    "rgba(101, 10, 66, 1)",
                    "rgba(251, 110, 245, 1)",
                    "rgba(43, 215, 243, 1)",
                    "rgba(31, 139, 116, 1)",
                ],
            },
            {
                label: "تجهيزي",
                data: [
                    prep?.noDiscount_recites,
                    prep?.discount_1_recites,
                    prep?.discount_2_recites,
                    prep?.discount_other_recites,
                ],
                backgroundColor: [
                    "rgba(12, 255, 136, 1)",
                    "rgba(242, 255, 10, 1)",
                    "rgba(254, 205, 50, 1)",
                    "rgba(255, 59, 0, 1)",
                ],
            },
            {
                label: "ممارسة",
                data: [
                    practice?.noDiscount_recites,
                    practice?.discount_1_recites,
                    practice?.discount_2_recites,
                    practice?.discount_other_recites,
                ],
                backgroundColor: [
                    "rgba(101, 10, 66, 1)",
                    "rgba(251, 110, 245, 1)",
                    "rgba(43, 215, 243, 1)",
                    "rgba(31, 139, 116, 1)",
                ],
            },
            {
                label: "تعلين كبار",
                data: [
                    old?.noDiscount_recites,
                    old?.discount_1_recites,
                    old?.discount_2_recites,
                    old?.discount_other_recites,
                ],
                backgroundColor: [
                    "rgba(12, 255, 136, 1)",
                    "rgba(242, 255, 10, 1)",
                    "rgba(254, 205, 50, 1)",
                    "rgba(255, 59, 0, 1)",
                ],
            },
        ],
    };

    return (
        <>
            <div className="w-full relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Pie
                    data={dataToDisplay}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
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
                                    text: "عدد الإيصالات لكل نوع الخصم",
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

export default MultiSeriesPieChart;
