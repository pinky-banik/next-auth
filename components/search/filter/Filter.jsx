import SortHotel from "../../sort/SortHotel";

import FilterByStarCategory from "./FilterByStarCatagory";
import FilterByAmenities from "./FilterByAmenities";
import FilterByPriceRange from "./FilterByPriceRange";

const Filter = () => {
    return (
        <>
            <div className="col-span-3 space-y-4">
                <SortHotel />

                <FilterByPriceRange />
                <FilterByStarCategory />
                <FilterByAmenities />

            </div>
        </>
    );
};

export default Filter;