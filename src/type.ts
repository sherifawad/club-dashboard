export enum sportType {
    all,
    team,
    private,
    school,
    special,
    prep,
    practice,
    old,
    free,
    private_type1,
    private_type2,
    private_type3,
    private_type4,
    private_type5,
    private_type6,
}

export interface Item {
    sportId: number;
    date: Date;
    type: sportType;
    total: number;
    recites: number;
    noDiscount_recites: number;
    noDiscount_total: number;
    discount_recites: number;
    discount_total: number;
    discount_1_recites: number;
    discount_1_total: number;
    discount_2_recites: number;
    discount_2_total: number;
    discount_other_recites: number;
    discount_other_total: number;
}

export interface DataState {
    data: Item[];
    filteredData: Item[];
    startDate: Date;
    endDate: Date;
    private_type1?: Item;
    private_type2?: Item;
    private_type3?: Item;
    private_type4?: Item;
    private_type5?: Item;
    private_type6?: Item;
    all?: Item;
    team?: Item;
    priv?: Item;
    school?: Item;
    prep?: Item;
    special?: Item;
    practice?: Item;
    old?: Item;
    free?: Item;
    setFilteredData: (data: Item[]) => void;
}
