import * as fs from 'fs/promises'

export class FileSytem {


    read(path,encoding){
        try{

            const data = await fs.readFile(path,encoding)

            return data

        }catch(error){
            console.error('Error during read file', error)
        }
    }

}