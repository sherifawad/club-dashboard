"use client";

import { useState } from "react";
import parseISO from "date-fns/parseISO";
import isWithinInterval from "date-fns/isWithinInterval";
import { useStore } from "./Sidebar";
import { merge } from "@/helpers/dataArray";

const DataByDate = () => {
    const { data, setFilteredData } = useStore();

    const [value, setValue] = useState({
        startDate: "",
        endDate: "",
    });
    const [minDate, setMinDate] = useState(new Date().toString());
    const applyDateFilter = () => {
        if (!value.startDate) return;
        const start = parseISO(value.startDate);
        const end = parseISO(value.endDate ?? value.startDate);

        const result = data.filter((d) =>
            isWithinInterval(d.date, {
                start,
                end,
            })
        );
        setFilteredData(result);
        console.log(
            "🚀 ~ file: DataByDate.tsx:30 ~ applyDateFilter ~ result:",
            result
        );
        console.log("merged", merge(result));
    };

    return (
        <div className="flex flex-wrap items-end gap-4 p-4">
            <div className="flex flex-col items-center">
                <label>From</label>
                <input
                    type="date"
                    className="bg-transparent"
                    value={value.startDate}
                    onChange={({ target: { value } }) => {
                        setValue({ startDate: value, endDate: "" });
                        setMinDate(value);
                    }}
                />
            </div>
            <div className="flex flex-col items-center">
                <label>To</label>
                <input
                    type="date"
                    className="bg-transparent"
                    value={value.endDate}
                    onChange={({ target: { value } }) =>
                        setValue((prev) => ({ ...prev, endDate: value }))
                    }
                    min={minDate}
                />
            </div>
            <button onClick={applyDateFilter}>Apply</button>
            <button
                onClick={() =>
                    setValue({
                        startDate: "",
                        endDate: "",
                    })
                }
            >
                clear
            </button>
        </div>
    );
};

export default DataByDate;
