

export class Parser{

    #letters = /([aA-zZ])/;

    constructor(){
        this.tree = null;
    }

    #scanner(data){

        let rootsList = []

        let swapRoot = null
        let swapPrimitive = null
        let swapChilds = null
        let state = 0

        let ite = 0

        //todo: asinar un peso a las labels, de esta manera la que tenga menos peso es el padre y 
        // el de menos peso, por ende seria el hijo

        while(ite <= data.length){

            let char = data[ite]

            switch(state){

                case 0:
                    if(char === '<'){
                        state = 1
                    }
                    ite++
                    break

                case 1: 
                    if(this.#letters.test(char)||char === ':'){
                        swapRoot += char
                        ite++
                        state = 1
                    } else {
                        if(char === '>'){

                        }
                    }

            }
        }

    }

    getObject(data){

    }
}