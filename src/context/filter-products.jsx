import { createContext, useState } from "react"

export const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const [filteredProductName, setFilteredProductName] = useState('')

    return(
        <FilterContext.Provider value={{filteredProductName, setFilteredProductName}}>    
            {children}
        </FilterContext.Provider>
    )
}