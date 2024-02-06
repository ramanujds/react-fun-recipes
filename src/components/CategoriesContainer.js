import React from 'react'
import CategoryCard from './CategoryCard'

const CategoriesContainer = ({categories,deleteItem}) => {
  return (
    <div className='row'>
      {categories.map((category, index) =>
            <CategoryCard key={category.idCategory} category={category} deleteItem={deleteItem} />
      ) 
      }
    </div>
  )
}

export default CategoriesContainer
