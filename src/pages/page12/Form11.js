import React from 'react'
import FormSingup8 from '../page9/FormSingup8'
import FormSingup10 from '../page11/FormSingup10'
import { Link } from 'react-router-dom';

import '../page11/Form10.css';


const Form11 = () => {
    return (
        

        <div>
            
            <img className='form7-img' src='img/img2-form4.png' />
            
            <img className='form9-img' src='img/tlo2.png' />
            <div className="wyb"/>
            <div className="wyb1"/>
            <div className="wyb2"/>
            <Link to='dwunasta'>
                    <button  className='t80'   >
                        <img src='img/dropdown.png'/>
                    </button>
                    
            </Link>
            <Link to='trzunasta'>
                    <button  className='dropdown1'   >
                        <img src='img/dropdown.png'/>
                    </button>
                    
            </Link>
            <Link to='czternasta'>
                    <button  className='dropdown2'   >
                        <img src='img/dropdown.png'/>
                    </button>
                    
            </Link>
            <label className="rok1">Rok 2020</label>
            <label className="rok2">Rok 2021</label>
            <label className="rok3">Rok 2022</label>
            <Link to='./'>
                    <button  className='t_dalej8'  >
                        Zapisz
                    </button>
                    
            </Link>
            <Link to='dziesiata'>
                    <button  className='t_wroc1'  >
                        Wróć
                    </button> 
                    
            </Link>

            
            
            
        </div>
        
    )
}

export default Form11