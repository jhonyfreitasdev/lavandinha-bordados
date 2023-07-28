import { useContext } from "react"
import { FilterContext } from "../../context/filter-products"
import { SelectButton } from "../../components/select-product-button"
import { ProductList } from "../../components/product-list"
import { FilteredList } from "../../components/filtered-list"

export const Products = () => {
    const { filteredProductName } = useContext(FilterContext)
 
    return (
        <>
            <SelectButton />
            {filteredProductName === '' ? <ProductList /> : <FilteredList />}
        </>
    )
}