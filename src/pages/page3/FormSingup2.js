import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export default class FormDataComponent extends Component {
    user0Data;

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNazwa = this.onChangeNazwa.bind(this);
        this.onChangeUprawa = this.onChangeUprawa.bind(this);
        this.onChangeOdmiana = this.onChangeOdmiana.bind(this);
        this.onChangeUprawa2 = this.onChangeUprawa2.bind(this);
        this.state = {
            
            email: '',
            nazwa: '',
            uprawa: '',
            odmiana: '',
            uprawa2: ''
        }
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeNazwa(e) {
        this.setState({ nazwa: e.target.value })
    }
    onChangeUprawa(e) {
        this.setState({ uprawa: e.target.value })
    }
    onChangeOdmiana(e) {
        this.setState({ odmiana: e.target.value })
    }
    onChangeUprawa2(e) {
        this.setState({ uprawa2: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        this.setState({
            
            email: '',
            nazwa: '',
            uprawa: '',
            odmiana: '',
            uprawa2: ''
            
        })
    }
    componentDidMount() {
        this.user0Data = JSON.parse(localStorage.getItem('user0'));
        if (localStorage.getItem('user0')) {
            this.setState({
                email: this.user0Data.email,
                nazwa: this.user0Data.nazwa,
                uprawa: this.user0Data.uprawa,
                odmiana: this.user0Data.odmiana,
                uprawa2: this.user0Data.uprawa2
                
            })
        } else {
            this.setState({
                
                email: '',
                nazwa: '',
                uprawa: '',
                odmiana: '',
                uprawa2:''

                
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user0', JSON.stringify(nextState));
    }
    
    
    render() {
        return (
            <div className="form-content-right2">
                <form className="form2">
                    
                    <div className="form-inputs2">
                        <label htmlFor='nazwa' 
                        className='form-label2'>
                            Nazwa
                            
                        </label>
                        <input 
                            id='nazwa'
                            type='text' 
                            name='nazwa' 
                            className='form-input2'
                            placeholder="Nazwa"
                            value={this.state.email} onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-inputs3">
                        <label htmlFor='nazwa_wlasna' 
                        className='form-label3'>
                            Nazwa własna
                            
                        </label>
                        <input 
                            id='nazwa_wlasna'
                            type='text' 
                            name='nazwa_wlasna' 
                            className='form-input3'
                            placeholder="Podaj nazwę własną"
                            value={this.state.nazwa} onChange={this.onChangeNazwa}
                        />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor='uprawa' 
                        className='form-label4'>
                            Uprawa
                            
                        </label>
                        <input 
                            id='Uprawa'
                            type='text' 
                            name='uprawa' 
                            className='form-input4'
                            placeholder="Uprawa"
                            value={this.state.uprawa} onChange={this.onChangeUprawa}
                        />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor='odmiana' 
                        className='form-label5'>
                            Odmiana
                            
                        </label>
                        <input 
                            id='odpiana'
                            type='text' 
                            name='odmiana' 
                            className='form-input5'
                            placeholder="Odmiana"
                            value={this.state.odmiana} onChange={this.onChangeOdmiana}
                        />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor='Powierzchnia uprawna' 
                        className='form-label6'>
                            Powierzchnia uprawna
                            
                        </label>
                        <input 
                            id='Powierzchnia uprawna'
                            type='text' 
                            name='Powierzchnia uprawna' 
                            className='form-input6'
                            placeholder="Powierzchnia uprawna"
                            value={this.state.uprawa2} onChange={this.onChangeUprawa2}
                        />
                    </div>
                    <Link to='trzecia'>
                        <button  className='form-input-btn2'  >
                            Dalej
                        </button>
                        
                    </Link>
                    <Link to='pierwsza'>
                        
                        <button  className='form-input-btn3'  >
                            Wróć
                        </button>
                    </Link>
                    
                </form>
                
            </div>
        
        )
    
    
    }
}


