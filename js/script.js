function getHistory(){ 
    return document.getElementById("history-value").innerText;
}

function printHistory(num){ 
    document.getElementById("history-value").innerText=num;
}

function getOutput(){ 
    return document.getElementById("output-value").innerText;
}

function printOutput(num){ 

    if(num==""){ // used for clearing 
        document.getElementById("output-value").innerText=num; //no formatting    
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){ //used for comma seprated output

    if(num=="-"){
        return "";
    }

    var n = Number(num); //converts any data-type to number
    var value = n.toLocaleString("en"); //locale string is numeric representation
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,'')); //  /<--- put here what you want to replace --->/g
}

// printOutput("8465618965");
// alert(reverseNumberFormat(getOutput()));


var operator = document.getElementsByClassName("operator"); //returns array
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){        //calls function whenever user clicks operator 
        
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }

        else if(this.id == "backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){                                     //has value
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }

        else{                                               //if screen is empty operator will not work
            var output =getOutput();
            var history=getHistory();

            if(output=="" && history!=""){          //8*9*  //because prev. we where not able to change what has gone to history
                if(isNaN(history[history.length-1])){       //if last char of history is not num,must be operator
                        history=history.substr(0,history.length-1);
                }   
            }


            if(output!="" || history!=""){                  //if yes than evaluate

                output = output==""?output:output=reverseNumberFormat(output);

                history=history+output;

                if(this.id == "="){                         //when =
                    var result =eval(history);              //eval history
                    printOutput(result);                    //output
                    printHistory("");                       //set history to null
                }
                else{
                    history=history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }


        }

    });
}


var number = document.getElementsByClassName("number"); //returns array
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){          //adds event listener whenever we click number function will be called
       var output =reverseNumberFormat(getOutput());        //get from screen

       if(output!=NaN){
           output = output + this.id;                       //concat
           printOutput(output);                             //print
       }

    });
}