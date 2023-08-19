import { FC } from "react"
import { HotelFilterProps } from "../../types/Hotel"
import FiltersPanel from "../Filters"

const MainHeader:FC<HotelFilterProps> = (props) => {
  return (
    <header className="flex relative justify-center items-center py-20 border-b-2 border-slate-500">
        <h1 className="capitalize text-2xl">The hotel app</h1>
        <div className="absolute -bottom-10"><FiltersPanel {...props}/></div>
    </header>
  )
}

export {MainHeader}