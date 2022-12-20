import React from 'react'
import { Form } from 'react-bootstrap'

const FilterMovie = ({inputSearch , setInputSearch}) => {
  return (
    <div>

<Form.Control type="text" placeholder="Enter your movie"  
 onChange = {(e) => setInputSearch(e.target.value)} 
 value ={inputSearch}/>
    </div>
  )
}

export default FilterMovie