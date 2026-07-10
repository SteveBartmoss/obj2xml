import * as fs from 'fs/promises'

export class FileSytem {


    async read(path,encoding){
        try{

            const data = await fs.readFile(path,encoding)

            return data

        }catch(error){
            console.error('Error during read file', error)
        }
    }

    async write(path,data,encoding) {
        try{

            await fs.appendFile(path,data,encoding)

        }catch(error){
            console.error('Error during write file',error)
        }
    }

}