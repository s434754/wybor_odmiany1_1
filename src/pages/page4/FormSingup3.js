import React from 'react'
import { Link } from 'react-router-dom';




const FormSingup3 = () => {
    return (    
        <div className='pole22' >
            
            <div className='pole1' ></div>
            <div className='pole2' ></div>
            <button><img className='przycisk1' src='img/przycisk2.svg' /></button>
            <p className='napis3'>Dodaj klasę</p>
            <Link to='czwarta'>
                    <button  className='form-input-btn4'  >
                        Dalej
                    </button>
                    
                </Link>
                <Link to='/druga'>
                    
                    <button  className='form-input-btn5'  >
                        Wróć
                    </button>
            </Link>
            <p className='klasa1'>Klasa I</p>
            <p className='klasa2'>Klasa II</p>
            <p className='pole2_1'>3a</p>
            <p className='pole2_2'>3b</p>
        </div>
        
    )
}

export default FormSingup3
