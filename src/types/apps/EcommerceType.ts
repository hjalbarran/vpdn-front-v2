// product shop list
type Nullable<T> = T | null;

export type Businesses = {
    // total: number;
    // status: string;
    // page: number;
    // items: number;
    businesses: Business[];
};

export type Business = {
    bathrooms: number | null;
    business_images_string: string | null;
    business_videos_string: string | null;
    courtyard: boolean | string | null;
    created_at_business: string;
    elevator: boolean | null;
    favorite: number;
    flag_outstanding: number;
    floor: number | null;
    floors: number | null;
    garage: boolean | null;
    id_autonomous_community: number;
    id_business_type: number;
    id_business: number;
    id_code_business: number;
    id_district: number | null;
    id_municipality: number;
    id_neighborhood: number | null;
    id_province: number;
    investment_business: number;
    lat_business: string;
    lng_business: string;
    name_autonomous_community: string;
    name_business_type: string;
    name_business: string | null;
    name_district: string | null;
    name_municipality: string;
    name_neighborhood: string | null;
    name_province: string;
    new_or_used: string | null;
    pool: boolean | null;
    recommendation_finished_at: string | null;
    recommended: number;
    rental: number | null;
    rooms: number | null;
    sector_ids: string;
    sector: string;
    size_business: number;
    sold: number;
    source_platform: string;
    storage: boolean | null;
    times_viewed_business: number;
    updated_at_business: string;
    year_built: string | null;
};

export type Products = {
    id: string | number | undefined;
    image: string;
    name: string;
    description?: string;
    rating?: number;
    discount?: number;
    salePrice?: number;
    offerPrice?: number;
    gender?: string;
    price?: string;
    categories?: string[];
    colors?: string[];
    popularity?: number;
    date?: number;
    created: Date;
    isStock?: boolean;
    new?: number;
    qty?: number;
    rank?: number;
};

// checkout-cart billing address
export type Address = {
    id?: string | any | Date;
    name: string;
    destination: string;
    building: string;
    city: string;
    state: string;
    phone: string;
    isDefault: boolean;
};

// product reviews list
export type Reviews = {
    id: string | number | undefined;
    rating: number;
    review: string;
    date: Date | string;
    profile: {
        avatar: string;
        name: string;
        status: boolean;
    };
};

// product shop filter
export type ProductsFilter = {
    length?: number;
    search: string;
    sort: string;
    gender: string[];
    categories: string[];
    colors: string[];
    price: string[];
    rating: number;
};

// product shop filter - sort options
export type SortOptionsProps = {
    value: string;
    label: string;
};

// product shop filter - colors options
export type ColorsOptionsProps = {
    label: string;
    value: string;
    bg: string;
};

export type PaymentOptionsProps = {
    id: number;
    value: string;
    title: string;
    caption: string;
    image: string;
    size: {
        width: number;
        height: number;
    };
};

export interface ProductStateProps {
    businessesItems: Businesses[];
    products?: Products[];
    cart?: Products[] | any;
    relatedProducts?: Products[];
    reviews?: Reviews[];
    addresses?: Address[];
    sortBy?: String;
    gender?: object | [] | String;
    category?: object | [] | String;
    price?: object | [] | String;
    error?: object | string | null;
    subTotal?: any;
    total?: number;
    discount?: any;
    color?: string;
    rank?: number;
}

export type filterObj = {
    business_type_id: number,
    id_code: number,
    min_investment: number,
    max_investment: number,
    min_rental: number,
    max_rental: number,
    name: string,
    province_id: number,
    order_by: string,
    neighborhood: any,
    sectors: any,
    my_favorite: number,
    condition: any,
    only_with_gcs: number,
    flag_smoke_outlet: boolean,
    flag_terrace: boolean,
    flag_recent: boolean,
    flag_outstanding: boolean,
    page: number,
    perPage: number,
    add_timeline: number
}
