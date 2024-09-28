

export function createXml(dataObject){

    let stackClose=[]

    let labels = Object.keys(dataObject)
    let values = Object.values(dataObject)

    let content = ""

    function parserXml(element,index,array){
        content = `<${element}>` + content
        content = dataObject[element] + content
        content = `<${element}/>` + content
    }

    labels.forEach(parserXml)

    console.log(content)

    //console.log(labels)
    //console.log(values)
    //console.log(dataObject)
}