import { Dispatch } from "react";
import { ActionType, Filters } from "../store";
import { Facility, Image } from "./misc";

export interface Hotel {
id: string,
name: string,
description: string,
address1: string,
address2: string | "",
postcode: string,
town: string,
countryCode: string,
country: string,
facilities: Facility[] | [],
telephone: string | number,
email: string,
images: Image[] | [],
checkInHours: number,
checkInMinutes: number,
checkOutHours: number,
checkOutMinutes: number,
position: {
latitude: number,
longitude: number,
timezone: string
},
starRating: number | string
}




export interface HotelFilterProps {
    filters: Filters;
    setFilters: Dispatch<ActionType>;
}