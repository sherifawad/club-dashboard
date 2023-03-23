import { Item } from "@/type";

export const merge = (array: Item[]): Item[] => {
    return array.reduce((acc: Item[], cur: Item) => {
        let found = acc.find((x) => x.type === cur.type);
        if (!found) return [...acc, { ...cur }];
        const index = acc.indexOf(found);
        Object.entries(cur).forEach(([key, value]) => {
            if (
                key !== "type" &&
                key !== "sportId" &&
                key !== "date" &&
                !isNaN(Number(value))
            ) {
                found![key as keyof Omit<Item, "sportType" | "date">] =
                    Math.round(found![key as keyof Item] + value);
            }
        });
        acc[index] = found;
        return acc;
    }, []);
};
