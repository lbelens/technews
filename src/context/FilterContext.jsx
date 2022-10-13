import { createContext } from "react";

const FilterContext = createContext();

export function FilterProvider({children}){

    const data="google";

    return (
        <FilterContext.Provider value={data}>
            {children}
        </FilterContext.Provider>
    )

}

export default FilterContext;