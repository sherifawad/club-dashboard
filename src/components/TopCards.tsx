"use client";
import { TbSwimming } from "react-icons/tb";
import { BiSwim } from "react-icons/bi";
import { FaSwimmer } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { GiSwimfins } from "react-icons/gi";
import { GrSwim } from "react-icons/gr";
import { SiMicrosoftteams } from "react-icons/si";
import { MdShutterSpeed } from "react-icons/md";
import { TbPool } from "react-icons/tb";
import { useStore } from "./Header";
import { useEffect } from "react";
import { merge } from "@/helpers/dataArray";
import { sportType } from "@/type";
import { ConvertToArabicNumbers } from "@/helpers/localizationHelper";

interface SportData {
    total: number;
    recites: number;
}

interface Props {
    all: SportData;
    team: SportData;
    priv: SportData;
    school: SportData;
    prep: SportData;
    special: SportData;
    practice: SportData;
    old: SportData;
    free: SportData;
}

const TopCards = () => {
    const { all, team, priv, school, prep, special, practice, old, free } =
        useStore();

    return (
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {all ? (
                <div className="bg-white grid grid-cols-[25px_3fr_2fr]  place-items-center border gap-4 p-4 rounded-lg w-full overflow-hidden  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-1 text-white bg-purple-800 rounded-full">
                            <TbSwimming size={20} />
                        </div>
                        <p className="text-purple-400">الكل</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            ج {ConvertToArabicNumbers(all.total)}
                        </p>
                        <p className="text-gray-600">الإجمالي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            {ConvertToArabicNumbers(all.recites)}
                        </p>
                        <p className="text-gray-600">العدد</p>
                    </div>
                </div>
            ) : (
                ""
            )}
            {team ? (
                <div className="bg-white grid grid-cols-[25px_3fr_2fr] w-full overflow-hidden  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 place-items-center border gap-4 p-4 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-1 text-white bg-purple-800 rounded-full">
                            <SiMicrosoftteams size={20} />
                        </div>
                        <p className="text-purple-400">فريق</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            ج {ConvertToArabicNumbers(team.total)}
                        </p>
                        <p className="text-gray-600">الإجمالي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            {ConvertToArabicNumbers(team.recites)}
                        </p>
                        <p className="text-gray-600">العدد</p>
                    </div>
                </div>
            ) : (
                ""
            )}
            {priv ? (
                <div className="bg-white grid grid-cols-[25px_3fr_2fr] w-full overflow-hidden  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 place-items-center border gap-4 p-4 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-1 text-white bg-purple-800 rounded-full">
                            <BiSwim size={20} />
                        </div>
                        <p className="text-purple-400">خاص</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            ج {ConvertToArabicNumbers(priv.total)}
                        </p>
                        <p className="text-gray-600">الإجمالي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            {ConvertToArabicNumbers(priv.recites)}
                        </p>
                        <p className="text-gray-600">العدد</p>
                    </div>
                </div>
            ) : (
                ""
            )}
            {school ? (
                <div className="bg-white grid grid-cols-[25px_3fr_2fr] w-full overflow-hidden  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 place-items-center border gap-4 p-4 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-1 text-white bg-purple-800 rounded-full">
                            <FaSwimmer size={20} />
                        </div>
                        <p className="text-purple-400">مدارس</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            ج {ConvertToArabicNumbers(school.total)}
                        </p>
                        <p className="text-gray-600">الإجمالي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            {ConvertToArabicNumbers(school.recites)}
                        </p>
                        <p className="text-gray-600">العدد</p>
                    </div>
                </div>
            ) : (
                ""
            )}
            {special ? (
                <div className="bg-white grid grid-cols-[25px_3fr_2fr] w-full overflow-hidden  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 place-items-center border gap-4 p-4 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-1 text-white bg-purple-800 rounded-full">
                            <GiSwimfins size={20} />
                        </div>
                        <p className="text-purple-400">مميزة</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            ج {ConvertToArabicNumbers(special.total)}
                        </p>
                        <p className="text-gray-600">الإجمالي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            {ConvertToArabicNumbers(special.recites)}
                        </p>
                        <p className="text-gray-600">العدد</p>
                    </div>
                </div>
            ) : (
                ""
            )}
            {prep ? (
                <div className="bg-white grid grid-cols-[25px_3fr_2fr] w-full overflow-hidden  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 place-content-center place-items-center border gap-4 p-4 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-1 text-white bg-purple-800 rounded-full">
                            <GrSwim size={20} />
                        </div>
                        <p className="text-purple-400">تجهيزي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            ج {ConvertToArabicNumbers(prep.total)}
                        </p>
                        <p className="text-gray-600">الإجمالي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            {ConvertToArabicNumbers(prep.recites)}
                        </p>
                        <p className="text-gray-600">العدد</p>
                    </div>
                </div>
            ) : (
                ""
            )}
            {practice ? (
                <div className="bg-white grid grid-cols-[25px_3fr_2fr] w-full overflow-hidden  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 place-items-center border gap-4 p-4 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-1 text-white bg-purple-800 rounded-full">
                            <TbPool size={20} />
                        </div>
                        <p className="text-purple-400">ممارسة</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            ج {ConvertToArabicNumbers(practice.total)}
                        </p>
                        <p className="text-gray-600">الإجمالي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            {ConvertToArabicNumbers(practice.recites)}
                        </p>
                        <p className="text-gray-600">العدد</p>
                    </div>
                </div>
            ) : (
                ""
            )}
            {old ? (
                <div className="bg-white grid grid-cols-[25px_3fr_2fr] w-full overflow-hidden  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 place-items-center border gap-4 p-4 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-1 text-white bg-purple-800 rounded-full">
                            <MdShutterSpeed size={20} />
                        </div>
                        <p className="text-purple-400">كبار</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            ج {ConvertToArabicNumbers(old.total)}
                        </p>
                        <p className="text-gray-600">الإجمالي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            {ConvertToArabicNumbers(old.recites)}
                        </p>
                        <p className="text-gray-600">العدد</p>
                    </div>
                </div>
            ) : (
                ""
            )}
            {free ? (
                <div className="bg-white grid grid-cols-[25px_3fr_2fr] w-full overflow-hidden  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 place-items-center border gap-4 p-4 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-1 text-white bg-purple-800 rounded-full">
                            <FaSwimmingPool size={20} />
                        </div>
                        <p className="text-purple-400">حرة</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            ج {ConvertToArabicNumbers(free.total)}
                        </p>
                        <p className="text-gray-600">الإجمالي</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                            {ConvertToArabicNumbers(free.recites)}
                        </p>
                        <p className="text-gray-600">العدد</p>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default TopCards;
