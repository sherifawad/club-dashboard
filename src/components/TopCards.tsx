import { TbSwimming } from "react-icons/tb";
import { BiSwim } from "react-icons/bi";
import { FaSwimmer } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { GiSwimfins } from "react-icons/gi";
import { GrSwim } from "react-icons/gr";
import { SiMicrosoftteams } from "react-icons/si";
import { MdShutterSpeed } from "react-icons/md";
import { TbPool } from "react-icons/tb";
import { useStore } from "./Sidebar";
import { useEffect } from "react";

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

const TopCards = ({
    all,
    team,
    priv,
    school,
    prep,
    special,
    practice,
    old,
    free,
}: Props) => {
    const { filteredData } = useStore();
    useEffect(() => {
        console.log(filteredData);
    }, [filteredData]);

    return (
        <div className="flex flex-wrap gap-4 p-4">
            <div className="bg-white grid grid-cols-[25px_3fr_2fr] sm:w-fit w-full place-items-center border gap-4 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-800 text-white p-1 rounded-full inline-block">
                        <TbSwimming size={20} />
                    </div>
                    <p className="text-purple-400">الكل</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">${all.total}</p>
                    <p className="text-gray-600">الإجمالي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">{all.recites}</p>
                    <p className="text-gray-600">العدد</p>
                </div>
            </div>
            <div className="bg-white grid grid-cols-[25px_3fr_2fr] sm:w-fit w-full place-items-center border gap-4 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-800 text-white p-1 rounded-full inline-block">
                        <SiMicrosoftteams size={20} />
                    </div>
                    <p className="text-purple-400">فريق</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">${team.total}</p>
                    <p className="text-gray-600">الإجمالي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">{team.recites}</p>
                    <p className="text-gray-600">العدد</p>
                </div>
            </div>
            <div className="bg-white grid grid-cols-[25px_3fr_2fr] sm:w-fit w-full place-items-center border gap-4 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-800 text-white p-1 rounded-full inline-block">
                        <BiSwim size={20} />
                    </div>
                    <p className="text-purple-400">خاص</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">${priv.total}</p>
                    <p className="text-gray-600">الإجمالي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">{priv.recites}</p>
                    <p className="text-gray-600">العدد</p>
                </div>
            </div>
            <div className="bg-white grid grid-cols-[25px_3fr_2fr] sm:w-fit w-full place-items-center border gap-4 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-800 text-white p-1 rounded-full inline-block">
                        <FaSwimmer size={20} />
                    </div>
                    <p className="text-purple-400">مدارس</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">${school.total}</p>
                    <p className="text-gray-600">الإجمالي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">{school.recites}</p>
                    <p className="text-gray-600">العدد</p>
                </div>
            </div>
            <div className="bg-white grid grid-cols-[25px_3fr_2fr] sm:w-fit w-full place-items-center border gap-4 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-800 text-white p-1 rounded-full inline-block">
                        <GiSwimfins size={20} />
                    </div>
                    <p className="text-purple-400">مميزة</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">${special.total}</p>
                    <p className="text-gray-600">الإجمالي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">{special.recites}</p>
                    <p className="text-gray-600">العدد</p>
                </div>
            </div>
            <div className="bg-white grid grid-cols-[25px_3fr_2fr] sm:w-fit w-full place-content-center place-items-center border gap-4 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-800 text-white p-1 rounded-full inline-block">
                        <GrSwim size={20} />
                    </div>
                    <p className="text-purple-400">تجهيزي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">${prep.total}</p>
                    <p className="text-gray-600">الإجمالي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">{prep.recites}</p>
                    <p className="text-gray-600">العدد</p>
                </div>
            </div>
            <div className="bg-white grid grid-cols-[25px_3fr_2fr] sm:w-fit w-full place-items-center border gap-4 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-800 text-white p-1 rounded-full inline-block">
                        <TbPool size={20} />
                    </div>
                    <p className="text-purple-400">ممارسة</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">${practice.total}</p>
                    <p className="text-gray-600">الإجمالي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">{practice.recites}</p>
                    <p className="text-gray-600">العدد</p>
                </div>
            </div>
            <div className="bg-white grid grid-cols-[25px_3fr_2fr] sm:w-fit w-full place-items-center border gap-4 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-800 text-white p-1 rounded-full inline-block">
                        <MdShutterSpeed size={20} />
                    </div>
                    <p className="text-purple-400">كبار</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">${old.total}</p>
                    <p className="text-gray-600">الإجمالي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">{old.recites}</p>
                    <p className="text-gray-600">العدد</p>
                </div>
            </div>
            <div className="bg-white grid grid-cols-[25px_3fr_2fr] sm:w-fit w-full place-items-center border gap-4 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <div className="bg-purple-800 text-white p-1 rounded-full inline-block">
                        <FaSwimmingPool size={20} />
                    </div>
                    <p className="text-purple-400">حرة</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">${free.total}</p>
                    <p className="text-gray-600">الإجمالي</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">{free.recites}</p>
                    <p className="text-gray-600">العدد</p>
                </div>
            </div>
        </div>
    );
};

export default TopCards;
