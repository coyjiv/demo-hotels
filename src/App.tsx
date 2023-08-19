import { useReducer } from "react"
import { filtersReducer, initialState } from "./store";
import { HotelCardWrapper } from "./components/HotelCardWrapper"
import { MainHeader } from "./components/MainHeader"

function App() {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader filters={filters} setFilters={dispatch} />
      <main className="container mx-auto my-20">
        <HotelCardWrapper filters={filters} setFilters={dispatch} />
      </main>
      <footer className="border-t-2 border-slate-500 py-10 mt-auto">
        <div className="container mx-auto">
          <p className="text-center">© 2023 - The hotel app</p>
        </div>
      </footer>
    </div>
  )
}

export default App
