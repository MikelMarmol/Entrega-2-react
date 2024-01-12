import React from 'react'
import {ContainerBtn, FilterBtn} from '../../styles/AllProductsPageStyles'

const Categories = () => {
    return (
        <ContainerBtn>
        <FilterBtn>
            TODOS
        </FilterBtn>

        <FilterBtn>
            EJERCITOS
        </FilterBtn>

        <FilterBtn>
            ALDEAS
        </FilterBtn>

        <FilterBtn>
            OTROS
        </FilterBtn>
    </ContainerBtn>
    );
}

export default Categories;