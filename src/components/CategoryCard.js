import React from 'react'

const CategoryCard = ({category,deleteItem}) => {

  return (
    <div className='col-4'>
          <div className='card'>
            <img src={category.strCategoryThumb} className='card-img-top' alt={category.strCategory} />  
            <div className='card-body'>
              <h5 className='card-title'>{category.strCategory}</h5>
              <button className='btn btn-primary'>Explore</button>
              <button className='btn btn-danger' onClick={()=>deleteItem(category.idCategory)}>Delete</button>
            </div>
            </div>
        </div>
  )
}

export default CategoryCard
