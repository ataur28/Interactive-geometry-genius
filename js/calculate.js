// triangle
document.getElementById('triangle-calcutale-btn').addEventListener('click', function () {
    const triangleBValue = inputFieldValue('triangle-b-input');
    const triangleHValue = inputFieldValue('triangle-h-input');

    const area = 0.5 * triangleBValue * triangleHValue;
    console.log(area);

    const triangleText = textFieldValue('triangle-text');
    console.log(triangleText);


    // const container = document.getElementById('add-calculation-value');
    // const tr = document.createElement("tr");
    // tr.innerHTML= `
    // <td style="padding-right: 10px">${triangleText}</td>
    // <td style="padding-right: 10px">${area}cm<sup>2</sup></td>
    // <td><button class="text-white px-1 py-1 bg-blue-600 rounded-lg hover:bg-blue-400">Convert to m<sup>2</sup> </button></td>
    // `;
    // container.appendChild(tr);

    // const container = document.getElementById('add-calculation-value');
    // const li = document.createElement("li");
    // li.innerHTML= `
    // <td style="padding-right: 10px">${triangleText}</td>
    // <td style="padding-right: 10px">${area}cm<sup>2</sup></td>
    // <td><button class="text-white px-1 py-1 bg-blue-600 rounded-lg hover:bg-blue-400">Convert to m<sup>2</sup> </button></td>
    // `;
    // container.appendChild(li);

    areaCalcutation(triangleText,area);


});



