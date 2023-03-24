"use client";

import { useStore } from "./Header";
import { Scatter } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { ar } from "date-fns/locale";

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeSeriesScale,
    TimeScale,
    TimeUnit,
    TimeScaleOptions,
} from "chart.js";
import { sportType } from "@/type";

ChartJS.register(
    TimeSeriesScale,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const ScatterChart = () => {
    const { filteredData } = useStore();

    const private_type1 = filteredData.filter(
        (x) => x.type === sportType.private_type1
    );

    const private_type2 = filteredData.filter(
        (x) => x.type === sportType.private_type2
    );

    const private_type3 = filteredData.filter(
        (x) => x.type === sportType.private_type3
    );

    const private_type4 = filteredData.filter(
        (x) => x.type === sportType.private_type4
    );

    const private_type5 = filteredData.filter(
        (x) => x.type === sportType.private_type5
    );

    const private_type6 = filteredData.filter(
        (x) => x.type === sportType.private_type6
    );
    const dataToDisplay = {
        datasets: [
            {
                label: "4 حصص",
                data: private_type1.map((value) => ({
                    x: value.date,
                    y: value.recites,
                })),
                backgroundColor: "rgba(101, 10, 66, 1)",
            },
            {
                label: "8 حصص",
                data: private_type2.map((value) => ({
                    x: value.date,
                    y: value.recites,
                })),
                backgroundColor: "rgba(251, 110, 245, 1)",
            },
            {
                label: "12 حصة",
                data: private_type3.map((value) => ({
                    x: value.date,
                    y: value.recites,
                })),
                backgroundColor: "rgba(43, 215, 243, 1)",
            },
            {
                label: "24 حصة",
                data: private_type4.map((value) => ({
                    x: value.date,
                    y: value.recites,
                })),
                backgroundColor: "rgba(31, 139, 116, 1)",
            },
            {
                label: "مجموعة 8",
                data: private_type5.map((value) => ({
                    x: value.date,
                    y: value.recites,
                })),
                backgroundColor: "rgba(12, 255, 136, 1)",
            },
            {
                label: "مجموعة 12",
                data: private_type6.map((value) => ({
                    x: value.date,
                    y: value.recites,
                })),
                backgroundColor: "rgba(242, 255, 10, 1)",
            },
        ],
    };

    return (
        <>
            <div className="w-full relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Scatter
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
                                text: "عدد إيصالات الخاص حسب اليوم",
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
                                    text: "عدد الإيصالات",
                                    display: true,
                                    color: "black",
                                    font: {
                                        size: 14,
                                    },
                                },
                            },
                            x: {
                                adapters: {
                                    date: {
                                        locale: ar,
                                    },
                                },
                                type: "time",
                                time: {
                                    unit: "day",
                                    tooltipFormat: "MMM dd",
                                },
                                ticks: {
                                    color: "black",
                                },
                                title: {
                                    text: "التاريخ",
                                    display: true,
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

export default ScatterChart;
