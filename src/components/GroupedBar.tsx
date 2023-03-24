"use client";

import { merge } from "@/helpers/dataArray";
import { sportType } from "@/type";
import { Bar, Radar } from "react-chartjs-2";
import { useStore } from "./Header";

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
    labels: string[];
    label: string;
    legendTitle?: string;
    values: number[];
}

const GroupedBar = () => {
    const { team, priv, school, prep, special, practice, old, free } =
        useStore();
    const dataToDisplay = {
        labels: ["بدون خصم", "خصم 10%", "خصم 20%", "خصومات آخرى"],
        datasets: [
            {
                label: "فريق",
                data: [
                    team?.noDiscount_total,
                    team?.discount_1_total,
                    team?.discount_2_total,
                    team?.discount_other_total,
                ],
                backgroundColor: "rgba(101, 10, 66, 1)",
            },
            {
                label: "مدارس",
                data: [
                    school?.noDiscount_total,
                    school?.discount_1_total,
                    school?.discount_2_total,
                    school?.discount_other_total,
                ],
                backgroundColor: "rgba(251, 110, 245, 1)",
            },
            {
                label: "مدارس مميزة",
                data: [
                    special?.noDiscount_total,
                    special?.discount_1_total,
                    special?.discount_2_total,
                    special?.discount_other_total,
                ],
                backgroundColor: "rgba(43, 215, 243, 1)",
            },
            {
                label: "تجهيزي",
                data: [
                    prep?.noDiscount_total,
                    prep?.discount_1_total,
                    prep?.discount_2_total,
                    prep?.discount_other_total,
                ],
                backgroundColor: "rgba(31, 139, 116, 1)",
            },
            {
                label: "ممارسة",
                data: [
                    practice?.noDiscount_total,
                    practice?.discount_1_total,
                    practice?.discount_2_total,
                    practice?.discount_other_total,
                ],
                backgroundColor: "rgba(12, 255, 136, 1)",
            },
            {
                label: "تعليم كبار",
                data: [
                    old?.noDiscount_total,
                    old?.discount_1_total,
                    old?.discount_2_total,
                    old?.discount_other_total,
                ],
                backgroundColor: "rgba(242, 255, 10, 1)",
            },
            {
                label: "خاص",
                data: [
                    priv?.noDiscount_total,
                    priv?.discount_1_total,
                    priv?.discount_2_total,
                    priv?.discount_other_total,
                ],
                backgroundColor: "rgba(255, 59, 0, 1)",
            },
        ],
    };

    return (
        <>
            <div className="w-full relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Bar
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
                                text: "المبالغ حسب نوع الخصم لكل نوع",
                                font: {
                                    size: 22,
                                    weight: "bold",
                                },
                                color: "black",
                            },
                        },
                        scales: {
                            y: {
                                ticks: {
                                    color: "black",
                                },
                                title: {
                                    display: true,
                                    text: "المبلغ",
                                    color: "black",
                                    font: {
                                        size: 14,
                                    },
                                },
                            },
                            x: {
                                ticks: {
                                    color: "black",
                                },
                                title: {
                                    display: true,
                                    text: "أنواع الخصومات",
                                    color: "black",
                                    font: {
                                        size: 14,
                                    },
                                },
                            },
                        },
                    }}
                />
            </div>
        </>
    );
};

export default GroupedBar;
