const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerData = new Schema({
    name: String,
    email: String,
    password: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    phoneNumber: String,
    creditCard: String,
    expirationDate: String,
    ccv: String,
    billingZipCode: String
})

const model = mongoose.model('CustomerModel', customerData);

module.exports = {
    Schema,
    customerData,
    model
}