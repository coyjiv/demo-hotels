import { Facility, Image } from "./misc"
export interface Room {
        id: string
        name: string
        shortDescription?: string
        longDescription: string
        occupancy: {
            maxAdults: number
            maxChildren: number
            maxOverall: number
        },
        disabledAccess: boolean
        bedConfiguration: string
        images: Image[] | []
        facilities: Facility[]
}