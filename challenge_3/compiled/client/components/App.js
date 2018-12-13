class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: 1,
            userInfo: []
        };
        this.handleSubmitForm1 = this.handleSubmitForm1.bind(this);
        this.handleSubmitForm2 = this.handleSubmitForm2.bind(this);
        this.handleSubmitForm3 = this.handleSubmitForm3.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
        this.handlePostRequest = this.handlePostRequest.bind(this);
    }

    handleSubmitForm1(form1Info) {
        let newInfo = [];
        for (var key in form1Info) {
            newInfo.push(form1Info[key]);
        }
        this.setState({
            form: 2,
            userInfo: newInfo
        });
    }

    handleSubmitForm2(form2Info) {
        let newInfo = [];
        for (var key in form2Info) {
            newInfo.push(form2Info[key]);
        }
        this.setState({
            form: 3,
            userInfo: this.state.userInfo.concat(newInfo)
        });
    }

    handleSubmitForm3(form3Info) {
        let newInfo = [];
        for (var key in form3Info) {
            newInfo.push(form3Info[key]);
        }
        this.setState({
            form: 4,
            userInfo: this.state.userInfo.concat(newInfo)
        });

        //////this.setState is async so setTime out makes sure this.state.userInfo is updated
        setTimeout(() => {
            this.handlePostRequest();
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
                billingZipCode: this.state.userInfo[12]
            })
        });
    }

    handleReturn() {
        this.setState({
            form: 1
        });
    }

    render() {
        if (this.state.form === 1) {
            return React.createElement(FormOne, { submit1: this.handleSubmitForm1 });
        } else if (this.state.form === 2) {
            return React.createElement(FormTwo, { submit2: this.handleSubmitForm2 });
        } else if (this.state.form === 3) {
            return React.createElement(FormThree, { submit3: this.handleSubmitForm3 });
        } else {
            return React.createElement(ThankYou, { homePage: this.handleReturn });
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
        };
        this.handleForm1Information = this.handleForm1Information.bind(this);
    }

    handleNameInput(event) {
        this.setState({
            nameValue: event.target.value
        });
    }

    handleEmailInput(event) {
        this.setState({
            emailValue: event.target.value
        });
    }

    handlePasswordInput(event) {
        this.setState({
            passwordValue: event.target.value
        });
    }

    handleForm1Information(event) {
        event.preventDefault();
        this.props.submit1(this.state);
    }

    render() {
        return React.createElement(
            'form',
            { onSubmit: e => {
                    this.handleForm1Information(e);
                }, name: 'form1' },
            React.createElement(
                'label',
                null,
                'Name:',
                React.createElement('input', { type: 'text', name: 'name', onChange: this.handleNameInput.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                'Email:',
                React.createElement('input', { type: 'text', name: 'email', onChange: this.handleEmailInput.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                'Password:',
                React.createElement('input', { type: 'text', name: 'password', onChange: this.handlePasswordInput.bind(this) })
            ),
            React.createElement('input', { type: 'submit', value: 'Submit' })
        );
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
        };
        this.handleForm2Information = this.handleForm2Information.bind(this);
    }

    handleAddress1Input(event) {
        this.setState({
            address1Value: event.target.value
        });
    }

    handleAddress2Input(event) {
        this.setState({
            address2Value: event.target.value
        });
    }

    handleCityInput(event) {
        this.setState({
            cityValue: event.target.value
        });
    }

    handleStateInput(event) {
        this.setState({
            stateValue: event.target.value
        });
    }
    handleZipCodeInput(event) {
        this.setState({
            zipcodeValue: event.target.value
        });
    }
    handlePhoneNumberInput(event) {
        this.setState({
            phoneNumberValue: event.target.value
        });
    }

    handleForm2Information(event) {
        event.preventDefault();
        this.props.submit2(this.state);
    }

    render() {
        return React.createElement(
            'form',
            { onSubmit: e => {
                    this.handleForm2Information(e);
                }, name: 'form1' },
            React.createElement(
                'label',
                null,
                'Address1:',
                React.createElement('input', { type: 'text', name: 'name', onChange: this.handleAddress1Input.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                'Address2:',
                React.createElement('input', { type: 'text', name: 'email', onChange: this.handleAddress2Input.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                'City:',
                React.createElement('input', { type: 'text', name: 'password', onChange: this.handleCityInput.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                'State:',
                React.createElement('input', { type: 'text', name: 'name', onChange: this.handleStateInput.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                'ZipCode:',
                React.createElement('input', { type: 'text', name: 'name', onChange: this.handleZipCodeInput.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                '9-Digit-PhoneNumber:',
                React.createElement('input', { type: 'text', name: 'name', onChange: this.handlePhoneNumberInput.bind(this) })
            ),
            React.createElement('input', { type: 'submit', value: 'Submit' })
        );
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
        };
        this.handleForm3Information = this.handleForm3Information.bind(this);
    }

    handleCreditCardInput(event) {
        this.setState({
            creditCardValue: event.target.value
        });
    }

    handleExpirationDateInput(event) {
        this.setState({
            expirationDateValue: event.target.value
        });
    }

    handleCCVInput(event) {
        this.setState({
            ccvValue: event.target.value
        });
    }

    handleBillingZipCodeInput(event) {
        this.setState({
            billingZipCodeValue: event.target.value
        });
    }

    handleForm3Information(event) {
        event.preventDefault();
        this.props.submit3(this.state);
    }

    render() {
        return React.createElement(
            'form',
            { onSubmit: e => {
                    this.handleForm3Information(e);
                }, name: 'form1' },
            React.createElement(
                'label',
                null,
                'Credit Card #:',
                React.createElement('input', { type: 'text', name: 'name', onChange: this.handleCreditCardInput.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                'Expiration Date:',
                React.createElement('input', { type: 'text', name: 'email', onChange: this.handleExpirationDateInput.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                'CCV:',
                React.createElement('input', { type: 'text', name: 'password', onChange: this.handleCCVInput.bind(this) })
            ),
            React.createElement(
                'label',
                null,
                'Billing Zip Code:',
                React.createElement('input', { type: 'text', name: 'password', onChange: this.handleBillingZipCodeInput.bind(this) })
            ),
            React.createElement('input', { type: 'submit', value: 'Submit' })
        );
    }
}

const ThankYou = props => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Thank You For Your Purchase!'
        ),
        React.createElement(
            'button',
            { onClick: props.homePage },
            'Click Here To Return To the Home Page!'
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJmb3JtIiwidXNlckluZm8iLCJoYW5kbGVTdWJtaXRGb3JtMSIsImJpbmQiLCJoYW5kbGVTdWJtaXRGb3JtMiIsImhhbmRsZVN1Ym1pdEZvcm0zIiwiaGFuZGxlUmV0dXJuIiwiaGFuZGxlUG9zdFJlcXVlc3QiLCJmb3JtMUluZm8iLCJuZXdJbmZvIiwia2V5IiwicHVzaCIsInNldFN0YXRlIiwiZm9ybTJJbmZvIiwiY29uY2F0IiwiZm9ybTNJbmZvIiwic2V0VGltZW91dCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInppcGNvZGUiLCJwaG9uZU51bWJlciIsImNyZWRpdENhcmQiLCJleHBpcmF0aW9uRGF0ZSIsImNjdiIsImJpbGxpbmdaaXBDb2RlIiwicmVuZGVyIiwiRm9ybU9uZSIsIm5hbWVWYWx1ZSIsImVtYWlsVmFsdWUiLCJwYXNzd29yZFZhbHVlIiwiaGFuZGxlRm9ybTFJbmZvcm1hdGlvbiIsImhhbmRsZU5hbWVJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbWFpbElucHV0IiwiaGFuZGxlUGFzc3dvcmRJbnB1dCIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0MSIsImUiLCJGb3JtVHdvIiwiYWRkcmVzczFWYWx1ZSIsImFkZHJlc3MyVmFsdWUiLCJjaXR5VmFsdWUiLCJzdGF0ZVZhbHVlIiwiemlwY29kZVZhbHVlIiwicGhvbmVOdW1iZXJWYWx1ZSIsImhhbmRsZUZvcm0ySW5mb3JtYXRpb24iLCJoYW5kbGVBZGRyZXNzMUlucHV0IiwiaGFuZGxlQWRkcmVzczJJbnB1dCIsImhhbmRsZUNpdHlJbnB1dCIsImhhbmRsZVN0YXRlSW5wdXQiLCJoYW5kbGVaaXBDb2RlSW5wdXQiLCJoYW5kbGVQaG9uZU51bWJlcklucHV0Iiwic3VibWl0MiIsIkZvcm1UaHJlZSIsImNyZWRpdENhcmRWYWx1ZSIsImV4cGlyYXRpb25EYXRlVmFsdWUiLCJjY3ZWYWx1ZSIsImJpbGxpbmdaaXBDb2RlVmFsdWUiLCJoYW5kbGVGb3JtM0luZm9ybWF0aW9uIiwiaGFuZGxlQ3JlZGl0Q2FyZElucHV0IiwiaGFuZGxlRXhwaXJhdGlvbkRhdGVJbnB1dCIsImhhbmRsZUNDVklucHV0IiwiaGFuZGxlQmlsbGluZ1ppcENvZGVJbnB1dCIsInN1Ym1pdDMiLCJUaGFua1lvdSIsImhvbWVQYWdlIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1ZDLGtCQUFNLENBREk7QUFFVkMsc0JBQVU7QUFGQSxTQUFiO0FBSUosYUFBS0MsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0EsYUFBS0MsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0EsYUFBS0UsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJGLElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0EsYUFBS0csWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCSCxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLGFBQUtJLGlCQUFMLEdBQXlCLEtBQUtBLGlCQUFMLENBQXVCSixJQUF2QixDQUE0QixJQUE1QixDQUF6QjtBQUNDOztBQUVERCxzQkFBa0JNLFNBQWxCLEVBQTZCO0FBQ3pCLFlBQUlDLFVBQVUsRUFBZDtBQUNBLGFBQUssSUFBSUMsR0FBVCxJQUFnQkYsU0FBaEIsRUFBMEI7QUFDdEJDLG9CQUFRRSxJQUFSLENBQWFILFVBQVVFLEdBQVYsQ0FBYjtBQUNIO0FBQ0gsYUFBS0UsUUFBTCxDQUFjO0FBQ1ZaLGtCQUFNLENBREk7QUFFVkMsc0JBQVVRO0FBRkEsU0FBZDtBQUlEOztBQUVETCxzQkFBa0JTLFNBQWxCLEVBQTZCO0FBQ3pCLFlBQUlKLFVBQVUsRUFBZDtBQUNBLGFBQUksSUFBSUMsR0FBUixJQUFlRyxTQUFmLEVBQTBCO0FBQ3hCSixvQkFBUUUsSUFBUixDQUFhRSxVQUFVSCxHQUFWLENBQWI7QUFDRDtBQUNELGFBQUtFLFFBQUwsQ0FBYztBQUNWWixrQkFBTSxDQURJO0FBRVZDLHNCQUFVLEtBQUtGLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQmEsTUFBcEIsQ0FBMkJMLE9BQTNCO0FBRkEsU0FBZDtBQUlEOztBQUVESixzQkFBa0JVLFNBQWxCLEVBQTZCO0FBQ3pCLFlBQUlOLFVBQVUsRUFBZDtBQUNGLGFBQUksSUFBSUMsR0FBUixJQUFlSyxTQUFmLEVBQTBCO0FBQ3hCTixvQkFBUUUsSUFBUixDQUFhSSxVQUFVTCxHQUFWLENBQWI7QUFDRDtBQUNELGFBQUtFLFFBQUwsQ0FBYztBQUNWWixrQkFBTSxDQURJO0FBRVZDLHNCQUFVLEtBQUtGLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQmEsTUFBcEIsQ0FBMkJMLE9BQTNCO0FBRkEsU0FBZDs7QUFLQTtBQUNBTyxtQkFBVyxNQUFNO0FBQ2IsaUJBQUtULGlCQUFMO0FBQ0gsU0FGRCxFQUVHLENBRkg7QUFHRDs7QUFFREEsd0JBQW9CO0FBQ2xCVSxjQUFNLEdBQU4sRUFBVztBQUNQQyxvQkFBUSxNQUREO0FBRVBDLHFCQUFTO0FBQ0xDLHdCQUFRLGtCQURIO0FBRUwsZ0NBQWdCO0FBRlgsYUFGRjtBQU1QQyxrQkFBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ25CQyxzQkFBTSxLQUFLekIsS0FBTCxDQUFXRSxRQUFYLENBQW9CLENBQXBCLENBRGE7QUFFbkJ3Qix1QkFBTyxLQUFLMUIsS0FBTCxDQUFXRSxRQUFYLENBQW9CLENBQXBCLENBRlk7QUFHbkJ5QiwwQkFBVSxLQUFLM0IsS0FBTCxDQUFXRSxRQUFYLENBQW9CLENBQXBCLENBSFM7QUFJbkIwQiwwQkFBVSxLQUFLNUIsS0FBTCxDQUFXRSxRQUFYLENBQW9CLENBQXBCLENBSlM7QUFLbkIyQiwwQkFBVSxLQUFLN0IsS0FBTCxDQUFXRSxRQUFYLENBQW9CLENBQXBCLENBTFM7QUFNbkI0QixzQkFBTSxLQUFLOUIsS0FBTCxDQUFXRSxRQUFYLENBQW9CLENBQXBCLENBTmE7QUFPbkJGLHVCQUFPLEtBQUtBLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQixDQUFwQixDQVBZO0FBUW5CNkIseUJBQVMsS0FBSy9CLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQixDQUFwQixDQVJVO0FBU25COEIsNkJBQWEsS0FBS2hDLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQixDQUFwQixDQVRNO0FBVW5CK0IsNEJBQVksS0FBS2pDLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQixDQUFwQixDQVZPO0FBV25CZ0MsZ0NBQWdCLEtBQUtsQyxLQUFMLENBQVdFLFFBQVgsQ0FBb0IsRUFBcEIsQ0FYRztBQVluQmlDLHFCQUFLLEtBQUtuQyxLQUFMLENBQVdFLFFBQVgsQ0FBb0IsRUFBcEIsQ0FaYztBQWFuQmtDLGdDQUFnQixLQUFLcEMsS0FBTCxDQUFXRSxRQUFYLENBQW9CLEVBQXBCO0FBYkcsYUFBZjtBQU5DLFNBQVg7QUFzQkQ7O0FBRURLLG1CQUFlO0FBQ1gsYUFBS00sUUFBTCxDQUFjO0FBQ1ZaLGtCQUFNO0FBREksU0FBZDtBQUdIOztBQUVIb0MsYUFBUztBQUNMLFlBQUcsS0FBS3JDLEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixDQUF2QixFQUEwQjtBQUN0QixtQkFDQSxvQkFBQyxPQUFELElBQVMsU0FBUyxLQUFLRSxpQkFBdkIsR0FEQTtBQUdILFNBSkQsTUFJTyxJQUFJLEtBQUtILEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixDQUF4QixFQUEyQjtBQUM5QixtQkFDQSxvQkFBQyxPQUFELElBQVMsU0FBUyxLQUFLSSxpQkFBdkIsR0FEQTtBQUdILFNBSk0sTUFJQSxJQUFJLEtBQUtMLEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixDQUF4QixFQUEyQjtBQUM5QixtQkFDQSxvQkFBQyxTQUFELElBQVcsU0FBUyxLQUFLSyxpQkFBekIsR0FEQTtBQUdILFNBSk0sTUFJQTtBQUNILG1CQUNBLG9CQUFDLFFBQUQsSUFBVSxVQUFVLEtBQUtDLFlBQXpCLEdBREE7QUFHSDtBQUNKO0FBckc2Qjs7QUF3R2xDLE1BQU0rQixPQUFOLFNBQXNCMUMsTUFBTUMsU0FBNUIsQ0FBc0M7QUFDbENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUdUMsdUJBQVcsRUFERjtBQUVUQyx3QkFBWSxFQUZIO0FBR1RDLDJCQUFlO0FBSE4sU0FBYjtBQUtKLGFBQUtDLHNCQUFMLEdBQThCLEtBQUtBLHNCQUFMLENBQTRCdEMsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBOUI7QUFDQzs7QUFFRHVDLG9CQUFnQkMsS0FBaEIsRUFBdUI7QUFDbkIsYUFBSy9CLFFBQUwsQ0FBYztBQUNWMEIsdUJBQVdLLE1BQU1DLE1BQU4sQ0FBYUM7QUFEZCxTQUFkO0FBR0g7O0FBRURDLHFCQUFpQkgsS0FBakIsRUFBd0I7QUFDcEIsYUFBSy9CLFFBQUwsQ0FBYztBQUNWMkIsd0JBQVlJLE1BQU1DLE1BQU4sQ0FBYUM7QUFEZixTQUFkO0FBR0g7O0FBRURFLHdCQUFvQkosS0FBcEIsRUFBMkI7QUFDdkIsYUFBSy9CLFFBQUwsQ0FBYztBQUNWNEIsMkJBQWVHLE1BQU1DLE1BQU4sQ0FBYUM7QUFEbEIsU0FBZDtBQUdIOztBQUVESiwyQkFBdUJFLEtBQXZCLEVBQThCO0FBQzVCQSxjQUFNSyxjQUFOO0FBQ0EsYUFBS2xELEtBQUwsQ0FBV21ELE9BQVgsQ0FBbUIsS0FBS2xELEtBQXhCO0FBQ0Q7O0FBRURxQyxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUEsY0FBTSxVQUFZYyxDQUFELElBQU87QUFBQyx5QkFBS1Qsc0JBQUwsQ0FBNEJTLENBQTVCO0FBQStCLGlCQUF4RCxFQUEwRCxNQUFPLE9BQWpFO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFFQSwrQ0FBTyxNQUFPLE1BQWQsRUFBcUIsTUFBSyxNQUExQixFQUFpQyxVQUFVLEtBQUtSLGVBQUwsQ0FBcUJ2QyxJQUFyQixDQUEwQixJQUExQixDQUEzQztBQUZBLGFBREo7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUVJLCtDQUFPLE1BQU8sTUFBZCxFQUFxQixNQUFLLE9BQTFCLEVBQWtDLFVBQVUsS0FBSzJDLGdCQUFMLENBQXNCM0MsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBNUM7QUFGSixhQUxKO0FBU0k7QUFBQTtBQUFBO0FBQUE7QUFFSSwrQ0FBTyxNQUFPLE1BQWQsRUFBcUIsTUFBSyxVQUExQixFQUFxQyxVQUFVLEtBQUs0QyxtQkFBTCxDQUF5QjVDLElBQXpCLENBQThCLElBQTlCLENBQS9DO0FBRkosYUFUSjtBQWFJLDJDQUFPLE1BQU8sUUFBZCxFQUF1QixPQUFRLFFBQS9CO0FBYkosU0FESjtBQWlCSDtBQXBEaUM7O0FBdUR0QyxNQUFNZ0QsT0FBTixTQUFzQnhELE1BQU1DLFNBQTVCLENBQXNDO0FBQ2xDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVHFELDJCQUFlLEVBRE47QUFFVEMsMkJBQWUsS0FGTjtBQUdUQyx1QkFBVyxFQUhGO0FBSVRDLHdCQUFZLEVBSkg7QUFLVEMsMEJBQWMsRUFMTDtBQU1UQyw4QkFBa0I7QUFOVCxTQUFiO0FBUUosYUFBS0Msc0JBQUwsR0FBOEIsS0FBS0Esc0JBQUwsQ0FBNEJ2RCxJQUE1QixDQUFpQyxJQUFqQyxDQUE5QjtBQUNDOztBQUVEd0Qsd0JBQW9CaEIsS0FBcEIsRUFBMkI7QUFDdkIsYUFBSy9CLFFBQUwsQ0FBYztBQUNWd0MsMkJBQWVULE1BQU1DLE1BQU4sQ0FBYUM7QUFEbEIsU0FBZDtBQUdIOztBQUVEZSx3QkFBb0JqQixLQUFwQixFQUEyQjtBQUN2QixhQUFLL0IsUUFBTCxDQUFjO0FBQ1Z5QywyQkFBZVYsTUFBTUMsTUFBTixDQUFhQztBQURsQixTQUFkO0FBR0g7O0FBRURnQixvQkFBZ0JsQixLQUFoQixFQUF1QjtBQUNuQixhQUFLL0IsUUFBTCxDQUFjO0FBQ1YwQyx1QkFBV1gsTUFBTUMsTUFBTixDQUFhQztBQURkLFNBQWQ7QUFHSDs7QUFFRGlCLHFCQUFpQm5CLEtBQWpCLEVBQXdCO0FBQ3BCLGFBQUsvQixRQUFMLENBQWM7QUFDVjJDLHdCQUFZWixNQUFNQyxNQUFOLENBQWFDO0FBRGYsU0FBZDtBQUdIO0FBQ0RrQix1QkFBbUJwQixLQUFuQixFQUEwQjtBQUN0QixhQUFLL0IsUUFBTCxDQUFjO0FBQ1Y0QywwQkFBY2IsTUFBTUMsTUFBTixDQUFhQztBQURqQixTQUFkO0FBR0g7QUFDRG1CLDJCQUF1QnJCLEtBQXZCLEVBQThCO0FBQzFCLGFBQUsvQixRQUFMLENBQWM7QUFDVjZDLDhCQUFrQmQsTUFBTUMsTUFBTixDQUFhQztBQURyQixTQUFkO0FBR0g7O0FBRURhLDJCQUF1QmYsS0FBdkIsRUFBOEI7QUFDNUJBLGNBQU1LLGNBQU47QUFDQSxhQUFLbEQsS0FBTCxDQUFXbUUsT0FBWCxDQUFtQixLQUFLbEUsS0FBeEI7QUFDRDs7QUFFRHFDLGFBQVM7QUFDTCxlQUNJO0FBQUE7QUFBQSxjQUFNLFVBQVljLENBQUQsSUFBTztBQUFDLHlCQUFLUSxzQkFBTCxDQUE0QlIsQ0FBNUI7QUFBK0IsaUJBQXhELEVBQTBELE1BQU8sT0FBakU7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUVBLCtDQUFPLE1BQU8sTUFBZCxFQUFxQixNQUFLLE1BQTFCLEVBQWlDLFVBQVUsS0FBS1MsbUJBQUwsQ0FBeUJ4RCxJQUF6QixDQUE4QixJQUE5QixDQUEzQztBQUZBLGFBREo7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUVJLCtDQUFPLE1BQU8sTUFBZCxFQUFxQixNQUFLLE9BQTFCLEVBQWtDLFVBQVUsS0FBS3lELG1CQUFMLENBQXlCekQsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBNUM7QUFGSixhQUxKO0FBU0k7QUFBQTtBQUFBO0FBQUE7QUFFSSwrQ0FBTyxNQUFPLE1BQWQsRUFBcUIsTUFBSyxVQUExQixFQUFxQyxVQUFVLEtBQUswRCxlQUFMLENBQXFCMUQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBL0M7QUFGSixhQVRKO0FBYUk7QUFBQTtBQUFBO0FBQUE7QUFFQSwrQ0FBTyxNQUFPLE1BQWQsRUFBcUIsTUFBSyxNQUExQixFQUFpQyxVQUFVLEtBQUsyRCxnQkFBTCxDQUFzQjNELElBQXRCLENBQTJCLElBQTNCLENBQTNDO0FBRkEsYUFiSjtBQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUVBLCtDQUFPLE1BQU8sTUFBZCxFQUFxQixNQUFLLE1BQTFCLEVBQWlDLFVBQVUsS0FBSzRELGtCQUFMLENBQXdCNUQsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBM0M7QUFGQSxhQWpCSjtBQXFCSTtBQUFBO0FBQUE7QUFBQTtBQUVBLCtDQUFPLE1BQU8sTUFBZCxFQUFxQixNQUFLLE1BQTFCLEVBQWlDLFVBQVUsS0FBSzZELHNCQUFMLENBQTRCN0QsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBM0M7QUFGQSxhQXJCSjtBQXlCSSwyQ0FBTyxNQUFPLFFBQWQsRUFBdUIsT0FBUSxRQUEvQjtBQXpCSixTQURKO0FBNkJIO0FBbkZpQzs7QUFzRnRDLE1BQU0rRCxTQUFOLFNBQXdCdkUsTUFBTUMsU0FBOUIsQ0FBd0M7QUFDcENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUb0UsNkJBQWlCLEVBRFI7QUFFVEMsaUNBQXFCLEVBRlo7QUFHVEMsc0JBQVUsRUFIRDtBQUlUQyxpQ0FBcUI7QUFKWixTQUFiO0FBTUosYUFBS0Msc0JBQUwsR0FBOEIsS0FBS0Esc0JBQUwsQ0FBNEJwRSxJQUE1QixDQUFpQyxJQUFqQyxDQUE5QjtBQUNDOztBQUVEcUUsMEJBQXNCN0IsS0FBdEIsRUFBNkI7QUFDekIsYUFBSy9CLFFBQUwsQ0FBYztBQUNWdUQsNkJBQWlCeEIsTUFBTUMsTUFBTixDQUFhQztBQURwQixTQUFkO0FBR0g7O0FBRUQ0Qiw4QkFBMEI5QixLQUExQixFQUFpQztBQUM3QixhQUFLL0IsUUFBTCxDQUFjO0FBQ1Z3RCxpQ0FBcUJ6QixNQUFNQyxNQUFOLENBQWFDO0FBRHhCLFNBQWQ7QUFHSDs7QUFFRDZCLG1CQUFlL0IsS0FBZixFQUFzQjtBQUNsQixhQUFLL0IsUUFBTCxDQUFjO0FBQ1Z5RCxzQkFBVTFCLE1BQU1DLE1BQU4sQ0FBYUM7QUFEYixTQUFkO0FBR0g7O0FBRUQ4Qiw4QkFBMEJoQyxLQUExQixFQUFpQztBQUM3QixhQUFLL0IsUUFBTCxDQUFjO0FBQ1YwRCxpQ0FBcUIzQixNQUFNQyxNQUFOLENBQWFDO0FBRHhCLFNBQWQ7QUFHSDs7QUFFRDBCLDJCQUF1QjVCLEtBQXZCLEVBQThCO0FBQzVCQSxjQUFNSyxjQUFOO0FBQ0EsYUFBS2xELEtBQUwsQ0FBVzhFLE9BQVgsQ0FBbUIsS0FBSzdFLEtBQXhCO0FBQ0Q7O0FBRURxQyxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUEsY0FBTSxVQUFZYyxDQUFELElBQU87QUFBQyx5QkFBS3FCLHNCQUFMLENBQTRCckIsQ0FBNUI7QUFBK0IsaUJBQXhELEVBQTBELE1BQU8sT0FBakU7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUVBLCtDQUFPLE1BQU8sTUFBZCxFQUFxQixNQUFLLE1BQTFCLEVBQWlDLFVBQVUsS0FBS3NCLHFCQUFMLENBQTJCckUsSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FBM0M7QUFGQSxhQURKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFFSSwrQ0FBTyxNQUFPLE1BQWQsRUFBcUIsTUFBSyxPQUExQixFQUFrQyxVQUFVLEtBQUtzRSx5QkFBTCxDQUErQnRFLElBQS9CLENBQW9DLElBQXBDLENBQTVDO0FBRkosYUFMSjtBQVNJO0FBQUE7QUFBQTtBQUFBO0FBRUksK0NBQU8sTUFBTyxNQUFkLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsVUFBVSxLQUFLdUUsY0FBTCxDQUFvQnZFLElBQXBCLENBQXlCLElBQXpCLENBQS9DO0FBRkosYUFUSjtBQWFJO0FBQUE7QUFBQTtBQUFBO0FBRUksK0NBQU8sTUFBTyxNQUFkLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsVUFBVSxLQUFLd0UseUJBQUwsQ0FBK0J4RSxJQUEvQixDQUFvQyxJQUFwQyxDQUEvQztBQUZKLGFBYko7QUFpQkksMkNBQU8sTUFBTyxRQUFkLEVBQXVCLE9BQVEsUUFBL0I7QUFqQkosU0FESjtBQXFCSDtBQS9EbUM7O0FBa0V4QyxNQUFNMEUsV0FBWS9FLEtBQUQsSUFBVztBQUN4QixXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLFNBQVNBLE1BQU1nRixRQUF2QjtBQUFBO0FBQUE7QUFGRixLQURGO0FBTUgsQ0FQRDs7QUFVQUMsU0FBUzNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QjRDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgZm9ybTogMSxcbiAgICAgICAgICAgdXNlckluZm86IFtdXG4gICAgICAgIH1cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdEZvcm0xID0gdGhpcy5oYW5kbGVTdWJtaXRGb3JtMS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0Rm9ybTIgPSB0aGlzLmhhbmRsZVN1Ym1pdEZvcm0yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXRGb3JtMyA9IHRoaXMuaGFuZGxlU3VibWl0Rm9ybTMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVJldHVybiA9IHRoaXMuaGFuZGxlUmV0dXJuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQb3N0UmVxdWVzdCA9IHRoaXMuaGFuZGxlUG9zdFJlcXVlc3QuYmluZCh0aGlzKTtcbiAgICB9XG4gXG4gICAgaGFuZGxlU3VibWl0Rm9ybTEoZm9ybTFJbmZvKSB7XG4gICAgICAgIGxldCBuZXdJbmZvID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmb3JtMUluZm8pe1xuICAgICAgICAgICAgbmV3SW5mby5wdXNoKGZvcm0xSW5mb1trZXldKVxuICAgICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb3JtOiAyLFxuICAgICAgICAgIHVzZXJJbmZvOiBuZXdJbmZvXG4gICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdEZvcm0yKGZvcm0ySW5mbykge1xuICAgICAgICBsZXQgbmV3SW5mbyA9IFtdO1xuICAgICAgICBmb3IodmFyIGtleSBpbiBmb3JtMkluZm8pIHtcbiAgICAgICAgICBuZXdJbmZvLnB1c2goZm9ybTJJbmZvW2tleV0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb3JtOiAzLFxuICAgICAgICAgICAgdXNlckluZm86IHRoaXMuc3RhdGUudXNlckluZm8uY29uY2F0KG5ld0luZm8pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGhhbmRsZVN1Ym1pdEZvcm0zKGZvcm0zSW5mbykge1xuICAgICAgICAgIGxldCBuZXdJbmZvID0gW107XG4gICAgICAgIGZvcih2YXIga2V5IGluIGZvcm0zSW5mbykge1xuICAgICAgICAgIG5ld0luZm8ucHVzaChmb3JtM0luZm9ba2V5XSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvcm06IDQsXG4gICAgICAgICAgICB1c2VySW5mbzogdGhpcy5zdGF0ZS51c2VySW5mby5jb25jYXQobmV3SW5mbykgIFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vLy8vL3RoaXMuc2V0U3RhdGUgaXMgYXN5bmMgc28gc2V0VGltZSBvdXQgbWFrZXMgc3VyZSB0aGlzLnN0YXRlLnVzZXJJbmZvIGlzIHVwZGF0ZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvc3RSZXF1ZXN0KClcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGhhbmRsZVBvc3RSZXF1ZXN0KCkge1xuICAgICAgICBmZXRjaCgnLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUudXNlckluZm9bMF0sXG4gICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLnVzZXJJbmZvWzFdLFxuICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS51c2VySW5mb1syXSxcbiAgICAgICAgICAgICAgYWRkcmVzczE6IHRoaXMuc3RhdGUudXNlckluZm9bM10sXG4gICAgICAgICAgICAgIGFkZHJlc3MyOiB0aGlzLnN0YXRlLnVzZXJJbmZvWzRdLFxuICAgICAgICAgICAgICBjaXR5OiB0aGlzLnN0YXRlLnVzZXJJbmZvWzVdLFxuICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZS51c2VySW5mb1s2XSxcbiAgICAgICAgICAgICAgemlwY29kZTogdGhpcy5zdGF0ZS51c2VySW5mb1s3XSxcbiAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMuc3RhdGUudXNlckluZm9bOF0sXG4gICAgICAgICAgICAgIGNyZWRpdENhcmQ6IHRoaXMuc3RhdGUudXNlckluZm9bOV0sXG4gICAgICAgICAgICAgIGV4cGlyYXRpb25EYXRlOiB0aGlzLnN0YXRlLnVzZXJJbmZvWzEwXSxcbiAgICAgICAgICAgICAgY2N2OiB0aGlzLnN0YXRlLnVzZXJJbmZvWzExXSxcbiAgICAgICAgICAgICAgYmlsbGluZ1ppcENvZGU6IHRoaXMuc3RhdGUudXNlckluZm9bMTJdLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaGFuZGxlUmV0dXJuKCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBmb3JtOiAxXG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mb3JtID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1PbmUgc3VibWl0MT17dGhpcy5oYW5kbGVTdWJtaXRGb3JtMX0vPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm0gPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybVR3byBzdWJtaXQyPXt0aGlzLmhhbmRsZVN1Ym1pdEZvcm0yfS8+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5mb3JtID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1UaHJlZSBzdWJtaXQzPXt0aGlzLmhhbmRsZVN1Ym1pdEZvcm0zfS8+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8VGhhbmtZb3UgaG9tZVBhZ2U9e3RoaXMuaGFuZGxlUmV0dXJufS8+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIEZvcm1PbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWVWYWx1ZTogJycsXG4gICAgICAgICAgICBlbWFpbFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkVmFsdWU6ICcnXG4gICAgICAgIH1cbiAgICB0aGlzLmhhbmRsZUZvcm0xSW5mb3JtYXRpb24gPSB0aGlzLmhhbmRsZUZvcm0xSW5mb3JtYXRpb24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVOYW1lSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUVtYWlsSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbWFpbFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVQYXNzd29yZElucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGFzc3dvcmRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlRm9ybTFJbmZvcm1hdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuc3VibWl0MSh0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID17KGUpID0+IHt0aGlzLmhhbmRsZUZvcm0xSW5mb3JtYXRpb24oZSl9fSBuYW1lID0gXCJmb3JtMVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBOYW1lOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lSW5wdXQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWxJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXNzd29yZElucHV0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIlN1Ym1pdFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNsYXNzIEZvcm1Ud28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFkZHJlc3MxVmFsdWU6ICcnLFxuICAgICAgICAgICAgYWRkcmVzczJWYWx1ZTogJ24vYScsXG4gICAgICAgICAgICBjaXR5VmFsdWU6ICcnLFxuICAgICAgICAgICAgc3RhdGVWYWx1ZTogJycsXG4gICAgICAgICAgICB6aXBjb2RlVmFsdWU6ICcnLFxuICAgICAgICAgICAgcGhvbmVOdW1iZXJWYWx1ZTogJydcbiAgICAgICAgfVxuICAgIHRoaXMuaGFuZGxlRm9ybTJJbmZvcm1hdGlvbiA9IHRoaXMuaGFuZGxlRm9ybTJJbmZvcm1hdGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUFkZHJlc3MxSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhZGRyZXNzMVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVBZGRyZXNzMklucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWRkcmVzczJWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2l0eUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2l0eVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RhdGVWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGhhbmRsZVppcENvZGVJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHppcGNvZGVWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGhhbmRsZVBob25lTnVtYmVySW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwaG9uZU51bWJlclZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVGb3JtMkluZm9ybWF0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5zdWJtaXQyKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPXsoZSkgPT4ge3RoaXMuaGFuZGxlRm9ybTJJbmZvcm1hdGlvbihlKX19IG5hbWUgPSBcImZvcm0xXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIEFkZHJlc3MxOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVBZGRyZXNzMUlucHV0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEFkZHJlc3MyOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFkZHJlc3MySW5wdXQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgQ2l0eTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaXR5SW5wdXQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBTdGF0ZTpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhdGVJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIFppcENvZGU6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVppcENvZGVJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDktRGlnaXQtUGhvbmVOdW1iZXI6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBob25lTnVtYmVySW5wdXQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwiU3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY2xhc3MgRm9ybVRocmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjcmVkaXRDYXJkVmFsdWU6ICcnLFxuICAgICAgICAgICAgZXhwaXJhdGlvbkRhdGVWYWx1ZTogJycsXG4gICAgICAgICAgICBjY3ZWYWx1ZTogJycsXG4gICAgICAgICAgICBiaWxsaW5nWmlwQ29kZVZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgdGhpcy5oYW5kbGVGb3JtM0luZm9ybWF0aW9uID0gdGhpcy5oYW5kbGVGb3JtM0luZm9ybWF0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ3JlZGl0Q2FyZElucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3JlZGl0Q2FyZFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVFeHBpcmF0aW9uRGF0ZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwaXJhdGlvbkRhdGVWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGhhbmRsZUNDVklucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2N2VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUJpbGxpbmdaaXBDb2RlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBiaWxsaW5nWmlwQ29kZVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVGb3JtM0luZm9ybWF0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5zdWJtaXQzKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPXsoZSkgPT4ge3RoaXMuaGFuZGxlRm9ybTNJbmZvcm1hdGlvbihlKX19IG5hbWUgPSBcImZvcm0xXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIENyZWRpdCBDYXJkICM6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNyZWRpdENhcmRJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBFeHBpcmF0aW9uIERhdGU6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXhwaXJhdGlvbkRhdGVJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBDQ1Y6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ0NWSW5wdXQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgQmlsbGluZyBaaXAgQ29kZTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVCaWxsaW5nWmlwQ29kZUlucHV0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIlN1Ym1pdFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IFRoYW5rWW91ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlRoYW5rIFlvdSBGb3IgWW91ciBQdXJjaGFzZSE8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhvbWVQYWdlfT5DbGljayBIZXJlIFRvIFJldHVybiBUbyB0aGUgSG9tZSBQYWdlITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==