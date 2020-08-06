class CalcController {

    //teste cases
    //deve somar dois numeros
    //deve subtrair dois numeros

    constructor(){
        console.log('contructorOK')
        //this._output = "";
        //this._displayEl = document.getElementById('display');

        //associate the HTMLwith JS
        //this.initialize();
        
        
    }

    adicionar(num1, num2){
        //this.updateDisplay(elementText);
        if(isNaN(num1) || isNaN(num2)){
            return 0;
        };
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        valor = num1 + num2;
        //this.updateDisplay(valor);
        return valor;
    }

    initialize(){

        //associate the JS with DOM
        let buttonsEl = document.getElementsByClassName('btn btn-number col-sm');
        let operationsEl = document.getElementsByClassName('btn btn-others col-sm');
        //this.display = "0";
        
        //add listeners for number buttons and fill output
        this.listenButtons(buttonsEl);
        this.listenButtons(operationsEl);
    }

    updateDisplay(value){
        
        //console.log(this.displayEl.innerText);
        this.display = value;

    }

    listenButtons(){

    }


    listenButtonsOLD(value){

        for (let i=0; i < value.length; i++){
            let element = value[i];
            element.addEventListener('click', e=>{   
                let elementText = element.innerHTML;  
                /*
                switch(elementText){
                    case "X":
                        elementText = "*";
                        break;
                    case "÷":
                        elementText = "/"
                        break
                    case ",":
                        elementText = "."
                        break;
                } 
                */          
                //this._output = this._output + elementText;
                //this._output = this.adicionar(this._output, elementText);
                //console.log(this._output);
                /*
                if(!isNaN(elementText)){
                    this.updateDisplay(elementText);
                }
                if (elementText == '='){                    
                    this._output = eval(this._output.slice(0, this._output.length - 1));
                    this.display = this._output;
                    console.log('igual', this._output);
                }
                */
                return 0;
            });

        }

        //returns the pressed button
        //return this._output;

    }

    validateNewOperation(){
        //validates if an opertion is added
        if(this._output ){
            //TODO
        }
    }

    operations(){

        console.log(this._output);

    }

    get display(){
        return this._displayEl.innerText;
    }

    set display(value){
        this._displayEl.innerText = value;
    }


}

module.exports = CalcController;