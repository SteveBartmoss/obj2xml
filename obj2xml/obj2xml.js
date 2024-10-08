import file from 'fs'
import {Writable} from 'stream'

export function createXml(dataObject,route,name){

    let content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"; // Encabezado XML

    function parserXml(obj){
        let xmlContent = "";

        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                let value = obj[key]

                if(typeof(value) === 'object' && value !==null){
                    xmlContent += `<${key}>\n` + parserXml(value) + `</${key}>\n`
                } else {
                    xmlContent += `<${key}>${value}</${key}>\n`
                }
            }
        }

        return xmlContent
    }

    content += parserXml(dataObject)

    try{
        file.writeFileSync(`${route}${name}.xml`,content,'utf8')
        console.log("Archivo XML creado exitosamente.")
    } catch(error){
        console.error("Error al escribir el archivo XML:", error);
    }

    

    //console.log(labels)
    //console.log(values)
    //console.log(dataObject)
}

export function createXmlStream(dataObject,writableStream){

    writableStream.write('<?xml version="1.0" encoding="UTF-8"?>\n')

    function parserXml(obj,stream){
        for(let key in obj){

            if(obj.hasOwnProperty(key)){
                let value = obj[key]

                if(typeof value === 'object' && value !== null){
                    stream.write(`<${key}>\n`)
                    parserXml(value, stream)
                    stream.write(`</${key}>\n`)
                }else{
                    stream.write(`<${key}>${value}</${key}>\n`)
                }
            }
        }
    }

    parserXml(dataObject,writableStream)

    writableStream.end()
}