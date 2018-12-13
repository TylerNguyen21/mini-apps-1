class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           form: 1,
           userInfo: []
        }
    this.handleSubmitForm1 = this.handleSubmitForm1.bind(this);
    this.handleSubmitForm2 = this.handleSubmitForm2.bind(this);
    this.handleSubmitForm3 = this.handleSubmitForm3.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.handlePostRequest = this.handlePostRequest.bind(this);
    }
 
    handleSubmitForm1(form1Info) {
        let newInfo = [];
        for (var key in form1Info){
            newInfo.push(form1Info[key])
        }
      this.setState({
          form: 2,
          userInfo: newInfo
      })
    }

    handleSubmitForm2(form2Info) {
        let newInfo = [];
        for(var key in form2Info) {
          newInfo.push(form2Info[key])
        }
        this.setState({
            form: 3,
            userInfo: this.state.userInfo.concat(newInfo)
        })
      }

      handleSubmitForm3(form3Info) {
          let newInfo = [];
        for(var key in form3Info) {
          newInfo.push(form3Info[key])
        }
        this.setState({
            form: 4,
            userInfo: this.state.userInfo.concat(newInfo)  
        })

        //////this.setState is async so setTime out makes sure this.state.userInfo is updated
        setTimeout(() => {
            this.handlePostRequest()
        }, 0);
      }
      
      handlePostRequest() {
        fetch('/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
              name: this.state.userInfo[0],
              email: this.state.userInfo[1],
              password: this.state.userInfo[2],
              address1: this.state.userInfo[3],
              address2: this.state.userInfo[4],
              city: this.state.userInfo[5],
              state: this.state.userInfo[6],
              zipcode: this.state.userInfo[7],
              phoneNumber: this.state.userInfo[8],
              creditCard: this.state.userInfo[9],
              expirationDate: this.state.userInfo[10],
              ccv: this.state.userInfo[11],
              billingZipCode: this.state.userInfo[12],
            })
        })
      }

      handleReturn() {
          this.setState({
              form: 1
          })
      }

    render() {
        if(this.state.form === 1) {
            return (
            <FormOne submit1={this.handleSubmitForm1}/>
            );
        } else if (this.state.form === 2) {
            return (
            <FormTwo submit2={this.handleSubmitForm2}/>
            )
        } else if (this.state.form === 3) {
            return (
            <FormThree submit3={this.handleSubmitForm3}/>
            )
        } else {
            return(
            <ThankYou homePage={this.handleReturn}/>
            )
        }
    }
}

class FormOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            emailValue: '',
            passwordValue: ''
        }
    this.handleForm1Information = this.handleForm1Information.bind(this);
    }

    handleNameInput(event) {
        this.setState({
            nameValue: event.target.value
        })
    }

    handleEmailInput(event) {
        this.setState({
            emailValue: event.target.value
        })
    }

    handlePasswordInput(event) {
        this.setState({
            passwordValue: event.target.value
        })
    }

    handleForm1Information(event) {
      event.preventDefault();
      this.props.submit1(this.state);
    }

    render() {
        return(
            <form onSubmit ={(e) => {this.handleForm1Information(e)}} name = "form1">
                <label>
                Name:
                <input type = "text" name="name" onChange={this.handleNameInput.bind(this)}></input>
                </label>
                <label>
                    Email:
                    <input type = "text" name="email" onChange={this.handleEmailInput.bind(this)}></input>
                </label>
                <label>
                    Password:
                    <input type = "text" name="password" onChange={this.handlePasswordInput.bind(this)}></input>
                </label>
                <input type = "submit" value = "Submit"></input>
            </form>
        )
    }
}

class FormTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address1Value: '',
            address2Value: 'n/a',
            cityValue: '',
            stateValue: '',
            zipcodeValue: '',
            phoneNumberValue: ''
        }
    this.handleForm2Information = this.handleForm2Information.bind(this);
    }

    handleAddress1Input(event) {
        this.setState({
            address1Value: event.target.value
        })
    }

    handleAddress2Input(event) {
        this.setState({
            address2Value: event.target.value
        })
    }

    handleCityInput(event) {
        this.setState({
            cityValue: event.target.value
        })
    }

    handleStateInput(event) {
        this.setState({
            stateValue: event.target.value
        })
    }
    handleZipCodeInput(event) {
        this.setState({
            zipcodeValue: event.target.value
        })
    }
    handlePhoneNumberInput(event) {
        this.setState({
            phoneNumberValue: event.target.value
        })
    }

    handleForm2Information(event) {
      event.preventDefault();
      this.props.submit2(this.state);
    }

    render() {
        return(
            <form onSubmit ={(e) => {this.handleForm2Information(e)}} name = "form1">
                <label>
                Address1:
                <input type = "text" name="name" onChange={this.handleAddress1Input.bind(this)}></input>
                </label>
                <label>
                    Address2:
                    <input type = "text" name="email" onChange={this.handleAddress2Input.bind(this)}></input>
                </label>
                <label>
                    City:
                    <input type = "text" name="password" onChange={this.handleCityInput.bind(this)}></input>
                </label>
                <label>
                State:
                <input type = "text" name="name" onChange={this.handleStateInput.bind(this)}></input>
                </label>
                <label>
                ZipCode:
                <input type = "text" name="name" onChange={this.handleZipCodeInput.bind(this)}></input>
                </label>
                <label>
                9-Digit-PhoneNumber:
                <input type = "text" name="name" onChange={this.handlePhoneNumberInput.bind(this)}></input>
                </label>
                <input type = "submit" value = "Submit"></input>
            </form>
        )
    }
}

class FormThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creditCardValue: '',
            expirationDateValue: '',
            ccvValue: '',
            billingZipCodeValue: ''
        }
    this.handleForm3Information = this.handleForm3Information.bind(this);
    }

    handleCreditCardInput(event) {
        this.setState({
            creditCardValue: event.target.value
        })
    }

    handleExpirationDateInput(event) {
        this.setState({
            expirationDateValue: event.target.value
        })
    }
    
    handleCCVInput(event) {
        this.setState({
            ccvValue: event.target.value
        })
    }

    handleBillingZipCodeInput(event) {
        this.setState({
            billingZipCodeValue: event.target.value
        })
    }

    handleForm3Information(event) {
      event.preventDefault();
      this.props.submit3(this.state);
    }

    render() {
        return(
            <form onSubmit ={(e) => {this.handleForm3Information(e)}} name = "form1">
                <label>
                Credit Card #:
                <input type = "text" name="name" onChange={this.handleCreditCardInput.bind(this)}></input>
                </label>
                <label>
                    Expiration Date:
                    <input type = "text" name="email" onChange={this.handleExpirationDateInput.bind(this)}></input>
                </label>
                <label>
                    CCV:
                    <input type = "text" name="password" onChange={this.handleCCVInput.bind(this)}></input>
                </label>
                <label>
                    Billing Zip Code:
                    <input type = "text" name="password" onChange={this.handleBillingZipCodeInput.bind(this)}></input>
                </label>
                <input type = "submit" value = "Submit"></input>
            </form>
        )
    }
}

const ThankYou = (props) => {
    return(
      <div>
        <h1>Thank You For Your Purchase!</h1>
        <button onClick={props.homePage}>Click Here To Return To the Home Page!</button>
      </div>
    )
}


ReactDOM.render(<App />, document.getElementById('app'));