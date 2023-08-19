
import { FC } from "react"
import { HotelFilterProps } from "../../types/Hotel"
import { Rating } from "../Rating"

const FiltersPanel: FC<HotelFilterProps> = ({ filters, setFilters }) => {
    const changeRating = (rating: number) => {
        setFilters({ type: 'SET_RATING', payload: rating })
    }
    const setAdultCount = (count: number) => {
        setFilters({ type: 'SET_ADULT_COUNT', payload: count })
    }
    const setChildrenCount = (count: number) => {
        setFilters({ type: 'SET_CHILDREN_COUNT', payload: count })
    }
    const toggleFilters = () => { 
        setFilters({ type: 'SET_IS_ACTIVE', payload: !filters.isActive })
    }

    return (
        <div className="border flex flex-wrap gap-5 px-5 py-3 bg-slate-800">
            <div className="flex items-center gap-3">
                <p>Rating : </p>
                <Rating rating={filters.rating} changeable={true} changeRating={changeRating} />
            </div>
            <div className="flex items-center gap-3">
                <p>Adults : </p>
                <input type="number" className="border max-w-[60px] text-center rounded-md px-2 py-1" value={filters.adultCount} onChange={(e) => setAdultCount(parseInt(e.target.value))} />
            </div>
            <div className="flex items-center gap-3">
                <p>Children</p>
                <input className="border max-w-[60px] text-center rounded-md px-2 py-1" type="number" value={filters.childrenCount} onChange={(e) => setChildrenCount(parseInt(e.target.value))} />
            </div>
            <button 
                className={`border rounded-md px-2 py-1 ${filters.isActive ? 'bg-slate-500 text-white' : 'bg-slate-200 text-slate-800'} transition-colors min-w-[150px]`}
                onClick={toggleFilters}
            >{filters.isActive ? "Disable filters" : "Enable filters"}</button>
            <button className="border rounded-md px-2 py-1 bg-slate-500 text-white" onClick={() => setFilters({ type: 'RESET_FILTERS' })}>Reset</button>
        </div>
    )
}

export default FiltersPanel