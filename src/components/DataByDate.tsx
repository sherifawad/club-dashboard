"use client";

import { useState } from "react";
import parseISO from "date-fns/parseISO";
import isWithinInterval from "date-fns/isWithinInterval";
import { useStore } from "./Header";
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
    };

    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:flex sm:grid-cols-2 place-items-end">
            <div className="grid grid-cols-2 gap-4 my-1 sm:place-items-end">
                <div className="flex flex-col items-center">
                    <label>من</label>
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
                    <label>الى</label>
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
            </div>
            <div className="grid grid-cols-2 gap-4 place-items-center sm:place-items-start">
                <button
                    className="w-16 p-2 text-lg text-white bg-green-300 rounded-lg hover:bg-green-600"
                    onClick={applyDateFilter}
                >
                    موافق
                </button>
                <button
                    className="w-16 p-2 text-lg text-white bg-gray-700 rounded-lg hover:bg-pink-600"
                    onClick={() =>
                        setValue({
                            startDate: "",
                            endDate: "",
                        })
                    }
                >
                    الغ
                </button>
            </div>
        </div>
    );
};

export default DataByDate;
