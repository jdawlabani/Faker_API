const { faker } = require('@faker-js/faker');

const express = require("express");

const app = express()
const port = 8000

const createUser = () => ({
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    _id: faker.datatype.uuid(),
})
// // Test
// const newData = faker.address.city()
// console.log(newData)
// // 
const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
})
    

app.get("/api/users/new", (req, res) => {
    const newUser= createUser()
    res.json(newUser)
})

app.get("/api/companies/new", (req, res) => {
    const newCo = createCompany()
    res.json(newCo)
})

app.get("/api/users/company", (req, res) => {
    const newUser= createUser()
    const newCo = createCompany()
    const resObj = {
        user: newUser,
        company: newCo
    }
    res.json(resObj)
})

//app.listen needs to stay at the bottom
app.listen( port, () => console.log(`Listening on port: ${port}`) )

