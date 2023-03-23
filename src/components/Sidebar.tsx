import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { create } from "zustand";
import { data } from "../data";
import { DataState, Item, sportType } from "@/type";
import { merge } from "@/helpers/dataArray";

export const useStore = create<DataState>((set) => ({
    data: data,
    filteredData: data,
    startDate: data[0].date,
    endDate: data[data.length - 1].date,
    private_type1: merge(data).find((x) => x.type === sportType.private_type1),
    private_type2: merge(data).find((x) => x.type === sportType.private_type2),
    private_type3: merge(data).find((x) => x.type === sportType.private_type3),
    private_type4: merge(data).find((x) => x.type === sportType.private_type4),
    private_type5: merge(data).find((x) => x.type === sportType.private_type5),
    private_type6: merge(data).find((x) => x.type === sportType.private_type6),
    all: merge(data).find((x) => x.type === sportType.all),
    team: merge(data).find((x) => x.type === sportType.team),
    priv: merge(data).find((x) => x.type === sportType.private),
    school: merge(data).find((x) => x.type === sportType.school),
    prep: merge(data).find((x) => x.type === sportType.prep),
    special: merge(data).find((x) => x.type === sportType.special),
    practice: merge(data).find((x) => x.type === sportType.practice),
    old: merge(data).find((x) => x.type === sportType.old),
    free: merge(data).find((x) => x.type === sportType.free),
    setFilteredData: (filtered: Item[]) => {
        set((state) => ({
            ...state,
            filteredData: filtered,
            startDate: filtered[0].date,
            endDate: filtered[filtered.length - 1].date,
            private_type1: merge(filtered).find(
                (x) => x.type === sportType.private_type1
            ),
            private_type2: merge(filtered).find(
                (x) => x.type === sportType.private_type2
            ),
            private_type3: merge(filtered).find(
                (x) => x.type === sportType.private_type3
            ),
            private_type4: merge(filtered).find(
                (x) => x.type === sportType.private_type4
            ),
            private_type5: merge(filtered).find(
                (x) => x.type === sportType.private_type5
            ),
            private_type6: merge(filtered).find(
                (x) => x.type === sportType.private_type6
            ),
            all: merge(filtered).find((x) => x.type === sportType.all),
            team: merge(filtered).find((x) => x.type === sportType.team),
            priv: merge(filtered).find((x) => x.type === sportType.private),
            school: merge(filtered).find((x) => x.type === sportType.school),
            prep: merge(filtered).find((x) => x.type === sportType.prep),
            special: merge(filtered).find((x) => x.type === sportType.special),
            practice: merge(filtered).find(
                (x) => x.type === sportType.practice
            ),
            old: merge(filtered).find((x) => x.type === sportType.old),
            free: merge(filtered).find((x) => x.type === sportType.free),
        }));
    },
}));

const Sidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <main className="w-full mr-20">{children}</main>

            <div className="fixed w-20 h-screen p-4 bg-white border-l-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href="/">
                        <div className="inline-block p-3 text-white bg-purple-800 rounded-lg">
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href="/">
                        <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    <Link href="/customers">
                        <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    <Link href="/orders">
                        <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                            <HiOutlineShoppingBag size={20} />
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                            <FiSettings size={20} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
