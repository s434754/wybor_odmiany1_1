import React from 'react'
import { Link } from 'react-router-dom';




const FormSingup1 = () => {
    return (    
        <div className='pole22' >
            
            
            
            
            <Link to='/druga'>
                    <button  className='form-input-btn1_1'  >
                        Dodaj całą działkę
                    </button>
                    
            </Link>
            <Link to='/druga'>
                    
                    <button  className='form-input-btn2_2'  >
                        Wydziel część działki
                    </button>
            </Link>
            <Link to='/'>
                    
                    <button  className='form-input-btn3_3'  >
                        Wróć
                    </button>
            </Link>
            <p className='numer'>Numer TERYT</p>
            <p className='miejscowosc'>Miejscowość</p>
            <p className='powierzchnia'>Powierzchnia</p>
        </div>
        
    )
}

export default FormSingup1