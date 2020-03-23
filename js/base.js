//this is blank box of code which ensures the working of history, output
//as well as it knows which button is clicked using event listener

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
    operator[i].addEventListener('click',function(){
       
    });
}


var number = document.getElementsByClassName("number"); //returns array
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
       
    });
}