const calculate = () =>{
    const billTotal = Number(document.getElementById('billTotalInput').value);
    const tip = Number(document.getElementById('tipInput').value);
    const tipAmt = tip * 0.01 * billTotal;
    let numberOfPeople = document.getElementById('numberOfPeople').innerText;
    const total = (billTotal+tipAmt)/Number(numberOfPeople);    
    document.getElementById('result').innerText = total;
}

const input = document.querySelectorAll('.inputStyle');
input.forEach(element =>{
    element.onkeyup = () =>{
        calculate();
    }
});

const button = document.querySelectorAll('.btn');
button.forEach(element =>{
    element.onmouseup = () =>{
        let id = element.id;
        if(id == 'btn1'){
            let numOfPeople = Number(document.getElementById('numberOfPeople').innerText) + 1;
            document.getElementById('numberOfPeople').innerText = numOfPeople;
        }
        else if(id == 'btn2'){
            let numOfPeople = Number(document.getElementById('numberOfPeople').innerText);
            if(numOfPeople > 1){
                numOfPeople -=1;
            }
            document.getElementById('numberOfPeople').innerText = numOfPeople;
        }
        calculate();
    }
})