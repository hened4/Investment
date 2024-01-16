function calculateReturn(){
    let start=parseFloat(document.getElementById("startValue").value);
    let growth=Math.pow(parseFloat(document.getElementById("annualReturn").value)/100+1,1/12);
    let duration=parseInt(document.getElementById("investmentLength").value)*12;
    let monthly=parseFloat(document.getElementById("monthlyContribution").value);
    let total=start*growth;
    for(var i=0;i<duration-1;i++){
        total=(total+monthly)*growth;
    }
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Estimated Return: $" + total.toFixed(2);
}