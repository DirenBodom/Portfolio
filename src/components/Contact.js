import React from 'react';

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {show: true};
    }

    componentDidMount() {
        console.log("The contact component was successfully mounted!!");
    }

    deleteForm = () => {
        this.setState({show: false});
    }

    render() {
        let contactForm;

        if (this.state.show) {
            contactForm = <ContactForm />;
        } else {
            contactForm = <p>Thank you for submitting your message, I'll get back to you as soon as possible!</p>
        };
        return (
            <div>
                <h1>Contact</h1><hr />
                <fieldset>
                    <form retur="false">
                        {contactForm}
                        <button type="button" onClick={this.deleteForm}  className="btn btn-primary">Delete Header</button>
                    </form>
                </fieldset>                
            </div>
        )
    }    
}

class ContactForm extends React.Component {
    componentWillUnmount() {
        console.log("Removing the form from the screen");
    }
    constructor(props) {
        super(props);
        this.state = {personName: "", message: ""};
    }
    render() {
    return (
        <div>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text"
                    value={this.state.personName}
                    onChange={(event) => this.setState({personName: event.target.value, message: this.state.message})}
                    id="personName"
                    className="form-control"
                    name="personName"
                />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea value={this.state.message}
                                    onChange={(event) => this.setState({personName: this.state.personName,message: event.target.value})}
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="15"
                        />
              </div>
        </div>
      );
    }
}

export default Contact;
