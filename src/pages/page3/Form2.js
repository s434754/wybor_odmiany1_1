import React from 'react'
import FormSingup2 from '../page3/FormSingup2'
import '../page3/Form2.css';


const Form2 = () => {
    return (
        

        <div>
            
            <img className='form-img' src='img/img2.png' />
            <h1 className='napis'>Informacja o uprawie</h1>
            <h2 className='napis2'>Na całej działce</h2>
            <img className='mapka' src='img/mapka.png' />
            <FormSingup2 />
            
        </div>
        
    )
}

export default Form2