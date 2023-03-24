import { Inter } from "next/font/google";
import DataByDate from "@/components/DataByDate";
import TopCards from "@/components/TopCards";
import DoughnutChart from "@/components/DoughnutChart";
import RadarChart from "@/components/RadarChart";
import StackedBar from "@/components/StackedBar";
import PolarChart from "@/components/PolarChart";
import ScatterChart from "@/components/ScatterChart";
import BubbleChart from "@/components/BubbleChart";
import GroupedBar from "@/components/GroupedBar";
import MultiSeriesPieChart from "@/components/MultiSeriesPieChart";
import DoughnutChartRecites from "@/components/DoughnutChartRecites";
import PolarChartRecites from "@/components/PolarChartRecites";

const labels = [
    "فريق",
    "خاص",
    "مدارس",
    "تجهيزي",
    "مميزة",
    "ممارسة",
    "تعليم كبار",
    "فترة حرة",
];

const label = "%";

const values = [100, 800, 200, 300, 50, 10, 3, 5];

export default function Home() {
    return (
        <div className="grid grid-cols-1 gap-4 p-4">
            <DataByDate />
            <TopCards />
            <DoughnutChart />
            <DoughnutChartRecites />
            <MultiSeriesPieChart />
            <GroupedBar />
            <PolarChart />
            <PolarChartRecites />
            <StackedBar />
            <RadarChart />
            <ScatterChart />
            <BubbleChart />
        </div>
    );
}
