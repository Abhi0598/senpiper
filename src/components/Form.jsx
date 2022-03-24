import React, { Component } from 'react';

import './Form.css';
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formName:"Aromatic Bar",
            name: '',
            email: '',
            phoneNumber: '',
            textData: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    onSubmit() {

        if (this.state.name !== '' && this.state.email !== '' && this.state.textData !== '' && this.state.phoneNumber !== '') {
            const newdata = this.state
            const formData = JSON.parse(localStorage.getItem('userFormData'))

            if (formData) {
                formData.push(newdata)
                localStorage.setItem("userFormData", JSON.stringify(formData))
            }
            else {
                localStorage.setItem("userFormData", JSON.stringify([newdata]))
            }
            window.location.href = "/"
        }
        else {
            alert("please fill all the filed")
        }
    }
    render() {
        return (
            <React.Fragment>

                <div className="text">
                    <h1>Aromatic Bar</h1>
                    <p> We are committed to providing you with the bestdining experience possible, so we welcome your comments. Please fill
                        out this questionnaire. Thank you.</p>
                </div>

                <form className='Form' onSubmit={() => this.onSubmit()}  > 
                <div className="text-email">
                    <div className="name">
                        <label htmlFor="Name">Name</label>
                        <div className="input-name">
                            <input type="text" name="Name" id="Name" required onChange={(event) => { this.setState({ name: event.target.value }) }} />
                        </div>
                    </div>
                    
                        <div className="email">
                            <label htmlFor='Email'>Email Field</label>
                            <div className="input-email">
                                <input name='Email' id='Email' type="text" pattern="[^@\s]+@[^@\s]+" required onChange={(event) => { this.setState({ email: event.target.value }) }} />
                            </div>
                        </div>
                    </div>

                    <div className="phone-radio">
                        <div className="phone">
                            <label htmlFor="Phone">Phone Field</label>
                            <div className="input-phone">
                                <input name='Phone' id='Phone' type="text" required onChange={(event) => { this.setState({ phoneNumber: event.target.value }) }} />
                            </div>
                        </div>

                        <div className="comment">
                        <label htmlFor="Name">Comment</label>
                        <div className="input-name">
                            <input type="text" name="Text" id="Name" required onChange={(event) => { this.setState({ textData: event.target.value }) }} />
                        </div>
                    </div>
                    </div>
                   

                    <div className="radio">
                        <label htmlFor="Radio">1. Please rate the quality of the service you received from your host.</label>
                        <div className="radio-btn">
                            <div className='excellent'>
                                <input required name='serviceQuality' id='Excellent' type="radio" value="Excellent" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Excellent">Excellent</label>
                            </div>
                            <div className='good'>
                                <input required name='serviceQuality' id='Good' type="radio" value="Good" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Good">Good</label>
                            </div>
                            <div className='fair'>
                                <input required name='serviceQuality' id='Fair' type="radio" value="Fair" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Fair">Fair</label>
                            </div>
                            <div className='bad'>
                                <input required name='serviceQuality' id='Bad' type="radio" value="Bad" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Bad">Bad</label>
                            </div>
                        </div>
                    </div>

                    <div className="radio">
                        <label htmlFor="Radio">2. Please rate the quality of your beverage.</label>
                        <div className="radio-btn">
                            <div className='excellent'>
                                <input required name='beverageQuality' id='Excellent' type="radio" value="Excellent" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Excellent">Excellent</label>
                            </div>
                            <div className='good'>
                                <input required name='beverageQuality' id='Good' type="radio" value="Good" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Good">Good</label>
                            </div>
                            <div className='fair'>
                                <input required name='beverageQuality' id='Fair' type="radio" value="Fair" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Fair">Fair</label>
                            </div>
                            <div className='bad'>
                                <input required name='beverageQuality' id='Bad' type="radio" value="Bad" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Bad">Bad</label>
                            </div>
                        </div>
                    </div>

                    <div className="radio">
                        <label htmlFor="Radio">3. Was our restaurant clean?</label>
                        <div className="radio-btn">
                            <div className='excellent'>
                                <input required name='cleaningQuality' id='Excellent' type="radio" value="Excellent" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Excellent">Excellent</label>
                            </div>
                            <div className='good'>
                                <input required name='cleaningQuality' id='Good' type="radio" value="Good" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Good">Good</label>
                            </div>
                            <div className='fair'>
                                <input required name='cleaningQuality' id='Fair' type="radio" value="Fair" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Fair">Fair</label>
                            </div>
                            <div className='bad'>
                                <input required name='cleaningQuality' id='Bad' type="radio" value="Bad" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Bad">Bad</label>
                            </div>
                        </div>
                    </div>

                    <div className="radio">
                        <label htmlFor="Radio">4. Please rate your overall dining experience.</label>
                        <div className="radio-btn">
                            <div className='excellent'>
                                <input required name='diningExperience' id='Excellent' type="radio" value="Excellent" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Excellent">Excellent</label>
                            </div>
                            <div className='good'>
                                <input required name='diningExperience' id='Good' type="radio" value="Good" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Good">Good</label>
                            </div>
                            <div className='fair'>
                                <input required name='diningExperience' id='Fair' type="radio" value="Fair" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Fair">Fair</label>
                            </div>
                            <div className='bad'>
                                <input required name='diningExperience' id='Bad' type="radio" value="Bad" onChange={(e) => this.handleChange(e)} />
                                <label htmlFor="Bad">Bad</label>
                            </div>
                        </div>
                    </div>

                    <div className="submit">
                        <button>Submit</button>
                    </div>
                </form>
            </React.Fragment >
        )
    }
}

export default Form;