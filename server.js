import { faker } from '@faker-js/faker';
import express from 'express';
const app = express();
const port = 8000;

class Usuario {
    constructor() {
        this.id = 234
        this.nombre = faker.name.firstName()
        this.apellido = faker.name.lastName()
        this.numeroTel = faker.phone.number()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Empresa {
    constructor() {
        this.id = faker.datatype.uuid()
        this.nombre = faker.company.name()
        this.direccion = {
            calle: faker.address.streetAddress(),
            ciudad: faker.address.cityName(),
            estado: faker.address.state(),
            zipCode: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json( new Usuario );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Empresa );
});

app.get("/api/user/company", (req, res) => {
    let user = new Usuario
    let empresa = new Empresa
    let userEmpresa = {user, empresa}
    
    res.json(userEmpresa)

});


app.listen(port);
console.log(`Listening on port: ${port}`)