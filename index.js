var firstNum = 0; 
var  op = 0; 
//讀取數值
function numClick(num) {

    if (document.getElementById("result").value == 0) {
        document.getElementById("result").value = num;
    } else {
        document.getElementById("result").value = document.getElementById("result").value + num;
    }
}

function operatorClick(str) {

     answer();

    op = str;

    temp = document.getElementById("result").value;
   
    document.getElementById("result").value = "";
    console.log(temp);
    console.log(op);
}

function answer() {

    switch (op) {
        case '+':
            document.getElementById("result").value = parseInt(temp) + parseInt(document.getElementById("result").value);
            break;
        case '-':
            document.getElementById("result").value = parseInt(temp) - parseInt(document.getElementById("result").value);
            break;
        case '*':
            document.getElementById("result").value = parseInt(temp) * parseInt(document.getElementById("result").value);
            break;
        case '/':
            document.getElementById("result").value = parseInt(temp) / parseInt(document.getElementById("result").value);
            break;
        default:
            break;
    }
    

    firstNum = null;
    op = null;
}
//清除
function numClear(str) {
    firstNum = 0;
    op = 0;
    valueM = 0;
    document.getElementById("result").value = '0';

}