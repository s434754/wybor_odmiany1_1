import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export default class FormDataComponent extends Component {
    user1Data;

    constructor(props) {
        super(props);

        this.onChangeForm13 = this.onChangeForm13.bind(this);
        this.onChangeForm1 = this.onChangeForm1.bind(this);
        this.onChangeForm2 = this.onChangeForm2.bind(this);
        this.onChangeForm3 = this.onChangeForm3.bind(this);
        this.onChangeForm4 = this.onChangeForm4.bind(this);
        this.onChangeForm5 = this.onChangeForm5.bind(this);
        this.onChangeForm6 = this.onChangeForm6.bind(this);
        this.onChangeForm7 = this.onChangeForm7.bind(this);
        this.onChangeForm8 = this.onChangeForm8.bind(this);
        this.onChangeForm9 = this.onChangeForm9.bind(this);
        this.onChangeForm10 = this.onChangeForm10.bind(this);

        this.state = {
            form13: '',
            form1: '',
            form2: '',
            form3: '',
            form4: '',
            form5: '',
            form6: '',
            form7: '',
            form8: '',
            form9: '',
            form10: ''
            
        }
    }
    onChangeForm13(e) {
        this.setState({ form13: e.target.value })
    }
    onChangeForm1(e) {
        this.setState({ form1: e.target.value })
    }
    onChangeForm2(e) {
        this.setState({ form2: e.target.value })
    }
    onChangeForm3(e) {
        this.setState({ form3: e.target.value })
    }
    onChangeForm4(e) {
        this.setState({ form4: e.target.value })
    }
    onChangeForm5(e) {
        this.setState({ form5: e.target.value })
    }

    onChangeForm6(e) {
        this.setState({ form6: e.target.value })
    }
    onChangeForm7(e) {
        this.setState({ form7: e.target.value })
    }
    onChangeForm8(e) {
        this.setState({ form8: e.target.value })
    }
    onChangeForm9(e) {
        this.setState({ form9: e.target.value })
    }
    onChangeForm10(e) {
        this.setState({ form10: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        this.setState({
            form13: '',
            form1: '',
            form2: '',
            form3: '',
            form4: '',
            form5: '',
            form6: '',
            form7: '',
            form8: '',
            form9: '',
            form10: ''
            
        })
    }
    componentDidMount() {
        this.user1Data = JSON.parse(localStorage.getItem('user1'));
        if (localStorage.getItem('user1')) {
            this.setState({
                form13: this.user1Data.form13,
                form1: this.user1Data.form1,
                form2: this.user1Data.form2,
                form3: this.user1Data.form3,
                form4: this.user1Data.form4,
                form5: this.user1Data.form5,
                form6: this.user1Data.form6,
                form7: this.user1Data.form7,
                form8: this.user1Data.form8,
                form9: this.user1Data.form9,
                form10: this.user1Data.form10
                
                
                
            })
        } else {
            this.setState({
                form13: '',
                form1: '',
                form2: '',
                form3: '',
                form4: '',
                form5: '',
                form6: '',
                form7: '',
                form8: '',
                form9: '',
                form10: ''
                
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user1', JSON.stringify(nextState));
    }
    
    render() {
        return (
            <div className="form-content-right2">
                <form className="form4">
                    
                    <div className="form-inputs_kreator1_1">
                        <label htmlFor='nazwa' 
                        className='form-label_kreator1'>
                            Zasobność gleby:
                            
                        </label>
                        <input 
                            id='P2O5'
                            type='text' 
                            name='P2O5' 
                            className='form-input_kreator1'
                            placeholder="P2O5"
                            value={this.state.form13} onChange={this.onChangeForm13}
                        />
                    </div>
                    <div className="form-label_kreator2_2">
                        <input 
                            id='K2O'
                            type='text' 
                            name='K2O' 
                            className='form-input_kreator2_2'
                            placeholder="K2O"
                            value={this.state.form1} onChange={this.onChangeForm1}
                        />
                    </div>
                    <div className="form-label_kreator3_3">
                        <input 
                            id='Mg'
                            type='text' 
                            name='Mg' 
                            className='form-input_kreator3_3'
                            placeholder="Mg"
                            value={this.state.form2} onChange={this.onChangeForm2}
                        />
                    </div>
                    <div className="form-label_kreator4_4">
                        <input 
                            id='ph'
                            type='text' 
                            name='ph' 
                            className='form-input_kreator4_4'
                            placeholder="ph"
                            value={this.state.form3} onChange={this.onChangeForm3}
                        />
                    </div>
                    <div className="form-label_kreator5_5">
                        <label htmlFor='intensywnosc' 
                        className='form-label_kreator5'>
                            Intensywność uprawy:
                            
                        </label>
                        <input 
                            id='intensywnosc'
                            type='text' 
                            name='intensywnosc' 
                            className='form-input_kreator5_5'
                            value={this.state.form4} onChange={this.onChangeForm4}
                            
                        />
                    </div>
                    <div className="form-label_kreator6_6">
                        <label htmlFor='zmianowanie' 
                        className='form-label_kreator6'>
                            Roślina w zmianowaniu (w danym roku):
                            
                        </label>
                        <input 
                            id='zmianowanie'
                            type='text' 
                            name='zmianowanie' 
                            className='form-input_kreator6_6'
                            value={this.state.form5} onChange={this.onChangeForm5}
                            
                        />
                    </div>
                    <div className="form-label_kreator7_7">
                        <label htmlFor='przedplon' 
                        className='form-label_kreator7'>
                            Przedplon:
                            
                        </label>
                        <input 
                            id='przedplon'
                            type='text' 
                            name='zprzedplon' 
                            className='form-input_kreator7_7'
                            value={this.state.form6} onChange={this.onChangeForm6}
                            
                        />
                    </div>
                    <div className="form-label_kreator8_8">
                        <label htmlFor='nawoz' 
                        className='form-label_kreator8'>
                            Czy nawożenie obornikiem:
                            
                        </label>
                        
                    </div>
                    <select className='form-input_kreator8_8'>
                        <option value="wybierz"></option>
                        <option value="tak">Tak</option>
                        <option value="nie">Nie</option>
                    </select>
                    <div className="form-label_kreator9_9">
                        <label htmlFor='dawka' 
                        className='form-label_kreator9'>
                            Dawka (t/ha):
                            
                        </label>
                        <input 
                            id='dawka'
                            type='text' 
                            name='dawka' 
                            className='form-input_kreator9_9'
                            value={this.state.form8} onChange={this.onChangeForm8}
                            
                        />
                    </div>
                    <div className="form-label_kreator10_10">
                        <label htmlFor='sloma' 
                        className='form-label_kreator10'>
                            Gospodarowanie słomą:
                            
                        </label>
                        <input 
                            id='sloma'
                            type='text' 
                            name='sloma' 
                            className='form-input_kreator10_10'
                            value={this.state.form9} onChange={this.onChangeForm9}
                            
                        />
                    </div>
                    <div className="form-label_kreator11_11">
                        <label htmlFor='praktyki' 
                        className='form-label_kreator11'>
                            Praktyki klim.-środ:
                            
                        </label>
                        <input 
                            id='praktyki'
                            type='text' 
                            name='praktyki' 
                            className='form-input_kreator11_11'
                            value={this.state.form10} onChange={this.onChangeForm10}
                            
                        />
                    </div>
                    <Link to='piata'>
                        <button  className='form-input-btn-odmiana1'  >
                            Dalej
                        </button>
                        
                    </Link>
                    <Link to='trzecia'>
                        
                        <button  className='form-input-btn-odmiana2'  >
                            Wróć
                        </button>
                    </Link>
                    
                    
                </form>
                
            </div>
        )
    
    
    }
}
    

