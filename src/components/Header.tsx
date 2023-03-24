import { data } from "@/data";
import { merge } from "@/helpers/dataArray";
import { DataState, Item, sportType } from "@/type";
import { create } from "zustand";

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
const Header = () => {
    return (
        <div className="flex justify-between px-4 pt-4">
            <h2 className="text-xl font-semibold">مرحبا بعودتك</h2>
            <h2 className="text-xl font-bold">بيانات السباحة</h2>
        </div>
    );
};

export default Header;
