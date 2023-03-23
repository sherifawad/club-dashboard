"use client";

import { merge } from "@/helpers/dataArray";
import { sportType } from "@/type";
import { Bar, Radar } from "react-chartjs-2";
import { useStore } from "./Sidebar";

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

const StackedBar = () => {
    const {
        private_type1,
        private_type2,
        private_type3,
        private_type4,
        private_type5,
        private_type6,
    } = useStore();
    const dataToDisplay = {
        labels: ["بدون خصم", "خصم 10%", "خصم 20%", "خصومات آخرى"],
        datasets: [
            {
                label: "4 حصص",
                data: [
                    private_type1?.noDiscount_total,
                    private_type1?.discount_1_total,
                    private_type1?.discount_2_total,
                    private_type1?.discount_other_total,
                ],
                backgroundColor: "rgba(101, 10, 66, 1)",
            },
            {
                label: "8 حصص",
                data: [
                    private_type2?.noDiscount_total,
                    private_type2?.discount_1_total,
                    private_type2?.discount_2_total,
                    private_type2?.discount_other_total,
                ],
                backgroundColor: "rgba(251, 110, 245, 1)",
            },
            {
                label: "12 حصة",
                data: [
                    private_type3?.noDiscount_total,
                    private_type3?.discount_1_total,
                    private_type3?.discount_2_total,
                    private_type3?.discount_other_total,
                ],
                backgroundColor: "rgba(43, 215, 243, 1)",
            },
            {
                label: "24 حصة",
                data: [
                    private_type4?.noDiscount_total,
                    private_type4?.discount_1_total,
                    private_type4?.discount_2_total,
                    private_type4?.discount_other_total,
                ],
                backgroundColor: "rgba(31, 139, 116, 1)",
            },
            {
                label: "مجموعة 8",
                data: [
                    private_type5?.noDiscount_total,
                    private_type5?.discount_1_total,
                    private_type5?.discount_2_total,
                    private_type5?.discount_other_total,
                ],
                backgroundColor: "rgba(12, 255, 136, 1)",
            },
            {
                label: "مجموعة 12",
                data: [
                    private_type6?.noDiscount_total,
                    private_type6?.discount_1_total,
                    private_type6?.discount_2_total,
                    private_type6?.discount_other_total,
                ],
                backgroundColor: "rgba(242, 255, 10, 1)",
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
                                text: "المبالغ حسب نوع الخصم لكل نوع في الخاص",
                                font: {
                                    size: 22,
                                    weight: "bold",
                                },
                                color: "black",
                            },
                        },
                        scales: {
                            y: {
                                stacked: true,
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
                                stacked: true,
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

export default StackedBar;
