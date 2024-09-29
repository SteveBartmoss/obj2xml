import { createXml } from "./obj2xml/obj2xml.js"


let prueba = {
    person: {
        name: 'John',
        age: 30,
        address: {
            city: 'New York',
            zip: '10001'
        }
    },
    job: 'Developer'
}

createXml(prueba,"","prueba")
