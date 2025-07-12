var input = document.getElementById('inputBox');

var buttons= document.querySelectorAll('button');

var total=""

var btnArray = Array.from(buttons);

btnArray.forEach(button=>{
    button.addEventListener('click',(e)=>{
        const buttonValue = e.target.innerHTML;

        if(buttonValue=="AC"){
            total="";
            input.value="";
        }

        else if(buttonValue=="DEL"){
            total=total.substring(0,total.length-1);
            input.value=total;
        }

        else if(buttonValue=="="){
            total = eval(total); //eval is Javascript builtin function to calulate 
            input.value = total;
        }

        else{
            total+=buttonValue;
            input.value=total;
        }
    })
})