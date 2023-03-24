"use client";

import { merge } from "@/helpers/dataArray";
import { sportType } from "@/type";
import { Radar } from "react-chartjs-2";
import { useStore } from "./Header";

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface Props {
    labels: string[];
    label: string;
    legendTitle?: string;
    values: number[];
}

const RadarChart = () => {
    const {
        private_type1,
        private_type2,
        private_type3,
        private_type4,
        private_type5,
        private_type6,
    } = useStore();
    const dataToDisplay = {
        labels: ["بدون خصم", "خصم10", "خصم20", "خصومات إخرى"],
        datasets: [
            {
                label: "4 حصص",
                data: [
                    private_type1?.noDiscount_recites,
                    private_type1?.discount_1_recites,
                    private_type1?.discount_2_recites,
                    private_type1?.discount_other_recites,
                ],
                fill: true,
                backgroundColor: "rgba(101, 10, 66, 0.2)",
                borderColor: "rgb(101, 10, 66)",
                pointBackgroundColor: "rgb(101, 10, 66)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(101, 10, 66)",
            },
            {
                label: "8 حصص",
                data: [
                    private_type2?.noDiscount_recites,
                    private_type2?.discount_1_recites,
                    private_type2?.discount_2_recites,
                    private_type2?.discount_other_recites,
                ],
                fill: true,
                backgroundColor: "rgba(251, 110, 245, 0.2)",
                borderColor: "rgb(251, 110, 245)",
                pointBackgroundColor: "rgb(251, 110, 245)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(251, 110, 245)",
            },
            {
                label: "12 حصة",
                data: [
                    private_type3?.noDiscount_recites,
                    private_type3?.discount_1_recites,
                    private_type3?.discount_2_recites,
                    private_type3?.discount_other_recites,
                ],
                fill: true,
                backgroundColor: "rgba(43, 215, 243, 0.2)",
                borderColor: "rgb(43, 215, 243)",
                pointBackgroundColor: "rgb(43, 215, 243)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(43, 215, 243)",
            },
            {
                label: "24 حصة",
                data: [
                    private_type4?.noDiscount_recites,
                    private_type4?.discount_1_recites,
                    private_type4?.discount_2_recites,
                    private_type4?.discount_other_recites,
                ],
                fill: true,
                backgroundColor: "rgba(31, 139, 116, 0.2)",
                borderColor: "rgb(31, 139, 116)",
                pointBackgroundColor: "rgb(31, 139, 116)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(31, 139, 116)",
            },
            {
                label: "مجموعة 8",
                data: [
                    private_type5?.noDiscount_recites,
                    private_type5?.discount_1_recites,
                    private_type5?.discount_2_recites,
                    private_type5?.discount_other_recites,
                ],
                fill: true,
                backgroundColor: "rgba(12, 255, 136, 0.2)",
                borderColor: "rgb(12, 255, 136)",
                pointBackgroundColor: "rgb(12, 255, 136)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(12, 255, 136)",
            },
            {
                label: "مجموعة 12",
                data: [
                    private_type6?.noDiscount_recites,
                    private_type6?.discount_1_recites,
                    private_type6?.discount_2_recites,
                    private_type6?.discount_other_recites,
                ],
                fill: true,
                backgroundColor: "rgba(242, 255, 10, 0.2)",
                borderColor: "rgb(242, 255, 10)",
                pointBackgroundColor: "rgb(242, 255, 10)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(242, 255, 10)",
            },
        ],
    };

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartOptions({
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Daily Revenue",
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <>
            <div className="w-full relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Radar
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
                                text: "الإيصالات حسب نوع الخصم لكل نوع في الخاص",
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
                            },
                            x: {
                                display: false,
                            },
                        },
                    }}
                />
            </div>
        </>
    );
};

export default RadarChart;
