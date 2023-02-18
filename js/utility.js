function inputFieldValue(inputId){
    const inputValueElement = document.getElementById(inputId);
    const inputValueSteing = inputValueElement.value ;
    const inputValue = parseFloat(inputValueSteing); 
    inputValueElement.value = '';
    return inputValue;
}

function textFieldValue(textId){
    const testFieldValueElement = document.getElementById(textId);
    const testFieldString = testFieldValueElement.innerText;
    return testFieldString;
}

const container = document.getElementById('add-calculation-value');
function areaCalcutation(shapeName, shepArea){
    const gap = '';
    const li = document.createElement("li");
    li.innerHTML= `
    <td style="margin-right: 10px; margin-top: 10px">${shapeName}</td>
    <td style="margin-right: 10px;"> ${shepArea}cm<sup>2</sup></td>
    <td><button style="margin-top: 10px;" class="text-white px-1 py-1 bg-blue-600 rounded-lg hover:bg-blue-400">Convert to m<sup>2</sup> </button></td>
    `;
    container.appendChild(li);
}