
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJmb3JtIiwidXNlckluZm8iLCJoYW5kbGVTdWJtaXRGb3JtMSIsImJpbmQiLCJoYW5kbGVTdWJtaXRGb3JtMiIsImhhbmRsZVN1Ym1pdEZvcm0zIiwiaGFuZGxlUmV0dXJuIiwiZm9ybTFJbmZvIiwibmV3SW5mbyIsImtleSIsInB1c2giLCJzZXRTdGF0ZSIsImZvcm0ySW5mbyIsImNvbmNhdCIsImZvcm0zSW5mbyIsInJlbmRlciIsIkZvcm1PbmUiLCJuYW1lVmFsdWUiLCJlbWFpbFZhbHVlIiwicGFzc3dvcmRWYWx1ZSIsImhhbmRsZUZvcm0xSW5mb3JtYXRpb24iLCJoYW5kbGVOYW1lSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxJbnB1dCIsImhhbmRsZVBhc3N3b3JkSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdDEiLCJlIiwiRm9ybVR3byIsImFkZHJlc3MxVmFsdWUiLCJhZGRyZXNzMlZhbHVlIiwiY2l0eVZhbHVlIiwic3RhdGVWYWx1ZSIsInppcGNvZGVWYWx1ZSIsInBob25lTnVtYmVyVmFsdWUiLCJoYW5kbGVGb3JtMkluZm9ybWF0aW9uIiwiaGFuZGxlQWRkcmVzczFJbnB1dCIsImhhbmRsZUFkZHJlc3MySW5wdXQiLCJoYW5kbGVDaXR5SW5wdXQiLCJoYW5kbGVTdGF0ZUlucHV0IiwiaGFuZGxlWmlwQ29kZUlucHV0IiwiaGFuZGxlUGhvbmVOdW1iZXJJbnB1dCIsInN1Ym1pdDIiLCJGb3JtVGhyZWUiLCJjcmVkaXRDYXJkVmFsdWUiLCJleHBpcmF0aW9uRGF0ZVZhbHVlIiwiY2N2VmFsdWUiLCJiaWxsaW5nWmlwQ29kZVZhbHVlIiwiaGFuZGxlRm9ybTNJbmZvcm1hdGlvbiIsImhhbmRsZUNyZWRpdENhcmRJbnB1dCIsImhhbmRsZUV4cGlyYXRpb25EYXRlSW5wdXQiLCJoYW5kbGVDQ1ZJbnB1dCIsImhhbmRsZUJpbGxpbmdaaXBDb2RlSW5wdXQiLCJzdWJtaXQzIiwiVGhhbmtZb3UiLCJob21lUGFnZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVkMsa0JBQU0sQ0FESTtBQUVWQyxzQkFBVTtBQUZBLFNBQWI7QUFJSixhQUFLQyxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxhQUFLQyxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxhQUFLRSxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QkYsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxhQUFLRyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JILElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0M7O0FBRURELHNCQUFrQkssU0FBbEIsRUFBNkI7QUFDekIsWUFBSUMsVUFBVSxFQUFkO0FBQ0EsYUFBSyxJQUFJQyxHQUFULElBQWdCRixTQUFoQixFQUEwQjtBQUN0QkMsb0JBQVFFLElBQVIsQ0FBYUgsVUFBVUUsR0FBVixDQUFiO0FBQ0g7QUFDSCxhQUFLRSxRQUFMLENBQWM7QUFDVlgsa0JBQU0sQ0FESTtBQUVWQyxzQkFBVU87QUFGQSxTQUFkO0FBSUQ7O0FBRURKLHNCQUFrQlEsU0FBbEIsRUFBNkI7QUFDekIsWUFBSUosVUFBVSxFQUFkO0FBQ0EsYUFBSSxJQUFJQyxHQUFSLElBQWVHLFNBQWYsRUFBMEI7QUFDeEJKLG9CQUFRRSxJQUFSLENBQWFFLFVBQVVILEdBQVYsQ0FBYjtB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O0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLFNBQVNBLE1BQU0yRCxRQUF2QjtBQUFBO0FBQUE7QUFGRixLQURGO0FBTUgsQ0FQRDs7QUFVQUMsU0FBUzNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QjRDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICBmb3JtOiAxLFxuICAgICAgICAgICB1c2VySW5mbzogW11cbiAgICAgICAgfVxuICAgIHRoaXMuaGFuZGxlU3VibWl0Rm9ybTEgPSB0aGlzLmhhbmRsZVN1Ym1pdEZvcm0xLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXRGb3JtMiA9IHRoaXMuaGFuZGxlU3VibWl0Rm9ybTIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdEZvcm0zID0gdGhpcy5oYW5kbGVTdWJtaXRGb3JtMy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUmV0dXJuID0gdGhpcy5oYW5kbGVSZXR1cm4uYmluZCh0aGlzKTtcbiAgICB9XG4gXG4gICAgaGFuZGxlU3VibWl0Rm9ybTEoZm9ybTFJbmZvKSB7XG4gICAgICAgIGxldCBuZXdJbmZvID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmb3JtMUluZm8pe1xuICAgICAgICAgICAgbmV3SW5mby5wdXNoKGZvcm0xSW5mb1trZXldKVxuICAgICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb3JtOiAyLFxuICAgICAgICAgIHVzZXJJbmZvOiBuZXdJbmZvXG4gICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdEZvcm0yKGZvcm0ySW5mbykge1xuICAgICAgICBsZXQgbmV3SW5mbyA9IFtdO1xuICAgICAgICBmb3IodmFyIGtleSBpbiBmb3JtMkluZm8pIHtcbiAgICAgICAgICBuZXdJbmZvLnB1c2goZm9ybTJJbmZvW2tleV0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb3JtOiAzLFxuICAgICAgICAgICAgdXNlckluZm86IHRoaXMuc3RhdGUudXNlckluZm8uY29uY2F0KG5ld0luZm8pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGhhbmRsZVN1Ym1pdEZvcm0zKGZvcm0zSW5mbykge1xuICAgICAgICAgIGxldCBuZXdJbmZvID0gW107XG4gICAgICAgIGZvcih2YXIga2V5IGluIGZvcm0zSW5mbykge1xuICAgICAgICAgIG5ld0luZm8ucHVzaChmb3JtM0luZm9ba2V5XSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvcm06IDQsXG4gICAgICAgICAgICB1c2VySW5mbzogdGhpcy5zdGF0ZS51c2VySW5mby5jb25jYXQobmV3SW5mbykgIFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBoYW5kbGVSZXR1cm4oKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGZvcm06IDFcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZih0aGlzLnN0YXRlLmZvcm0gPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybU9uZSBzdWJtaXQxPXt0aGlzLmhhbmRsZVN1Ym1pdEZvcm0xfS8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZm9ybSA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtVHdvIHN1Ym1pdDI9e3RoaXMuaGFuZGxlU3VibWl0Rm9ybTJ9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm0gPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybVRocmVlIHN1Ym1pdDM9e3RoaXMuaGFuZGxlU3VibWl0Rm9ybTN9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxUaGFua1lvdSBob21lUGFnZT17dGhpcy5oYW5kbGVSZXR1cm59Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgRm9ybU9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIGVtYWlsVmFsdWU6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmRWYWx1ZTogJydcbiAgICAgICAgfVxuICAgIHRoaXMuaGFuZGxlRm9ybTFJbmZvcm1hdGlvbiA9IHRoaXMuaGFuZGxlRm9ybTFJbmZvcm1hdGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZU5hbWVJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWVWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlRW1haWxJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtYWlsVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVBhc3N3b3JkSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwYXNzd29yZFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVGb3JtMUluZm9ybWF0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5zdWJtaXQxKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPXsoZSkgPT4ge3RoaXMuaGFuZGxlRm9ybTFJbmZvcm1hdGlvbihlKX19IG5hbWUgPSBcImZvcm0xXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbElucHV0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkSW5wdXQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwiU3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY2xhc3MgRm9ybVR3byBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWRkcmVzczFWYWx1ZTogJycsXG4gICAgICAgICAgICBhZGRyZXNzMlZhbHVlOiAnbi9hJyxcbiAgICAgICAgICAgIGNpdHlWYWx1ZTogJycsXG4gICAgICAgICAgICBzdGF0ZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIHppcGNvZGVWYWx1ZTogJycsXG4gICAgICAgICAgICBwaG9uZU51bWJlclZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgdGhpcy5oYW5kbGVGb3JtMkluZm9ybWF0aW9uID0gdGhpcy5oYW5kbGVGb3JtMkluZm9ybWF0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQWRkcmVzczFJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFkZHJlc3MxVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUFkZHJlc3MySW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhZGRyZXNzMlZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDaXR5SW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaXR5VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN0YXRlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGF0ZVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlWmlwQ29kZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgemlwY29kZVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlUGhvbmVOdW1iZXJJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBob25lTnVtYmVyVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUZvcm0ySW5mb3JtYXRpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLnN1Ym1pdDIodGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9eyhlKSA9PiB7dGhpcy5oYW5kbGVGb3JtMkluZm9ybWF0aW9uKGUpfX0gbmFtZSA9IFwiZm9ybTFcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgQWRkcmVzczE6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFkZHJlc3MxSW5wdXQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgQWRkcmVzczI6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQWRkcmVzczJJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBDaXR5OlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNpdHlJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIFN0YXRlOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGF0ZUlucHV0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgWmlwQ29kZTpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWmlwQ29kZUlucHV0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgOS1EaWdpdC1QaG9uZU51bWJlcjpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGhvbmVOdW1iZXJJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCJTdWJtaXRcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jbGFzcyBGb3JtVGhyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNyZWRpdENhcmRWYWx1ZTogJycsXG4gICAgICAgICAgICBleHBpcmF0aW9uRGF0ZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIGNjdlZhbHVlOiAnJyxcbiAgICAgICAgICAgIGJpbGxpbmdaaXBDb2RlVmFsdWU6ICcnXG4gICAgICAgIH1cbiAgICB0aGlzLmhhbmRsZUZvcm0zSW5mb3JtYXRpb24gPSB0aGlzLmhhbmRsZUZvcm0zSW5mb3JtYXRpb24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDcmVkaXRDYXJkSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjcmVkaXRDYXJkVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUV4cGlyYXRpb25EYXRlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBpcmF0aW9uRGF0ZVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlQ0NWSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjY3ZWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQmlsbGluZ1ppcENvZGVJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJpbGxpbmdaaXBDb2RlVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUZvcm0zSW5mb3JtYXRpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLnN1Ym1pdDModGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9eyhlKSA9PiB7dGhpcy5oYW5kbGVGb3JtM0luZm9ybWF0aW9uKGUpfX0gbmFtZSA9IFwiZm9ybTFcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgQ3JlZGl0IENhcmQgIzpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ3JlZGl0Q2FyZElucHV0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEV4cGlyYXRpb24gRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFeHBpcmF0aW9uRGF0ZUlucHV0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIENDVjpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDQ1ZJbnB1dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBCaWxsaW5nIFppcCBDb2RlOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJpbGxpbmdaaXBDb2RlSW5wdXQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwiU3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgVGhhbmtZb3UgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VGhhbmsgWW91IEZvciBZb3VyIFB1cmNoYXNlITwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaG9tZVBhZ2V9PkNsaWNrIEhlcmUgVG8gUmV0dXJuIFRvIHRoZSBIb21lIFBhZ2UhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19