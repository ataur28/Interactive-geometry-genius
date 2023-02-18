// triangle
document.getElementById('triangle-calcutale-btn').addEventListener('click', function () {
    const triangleBValue = inputFieldValue('triangle-b-input');
    const triangleHValue = inputFieldValue('triangle-h-input');

    const area = 0.5 * triangleBValue * triangleHValue;

    const triangleText = textFieldValue('triangle-text');


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

// Rectangle
document.getElementById('rectangle-calculate-btn').addEventListener('click', function () {
    const rectangleWValue = inputFieldValue('rectangle-w-input');
    const rectanglelValue = inputFieldValue('rectangle-l-input');

    const area = rectangleWValue * rectanglelValue;

    const rectangleText = textFieldValue('rectangle-text');

    areaCalcutation(rectangleText,area);

});

// Parallelogram
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function () {
    const parallelogramBValue = inputFieldValue('parallelogram-b-input');
    const parallelogramHValue = inputFieldValue('parallelogram-h-input');

    const area = parallelogramBValue * parallelogramHValue;

    const parallelogramText = textFieldValue('parallelogram-text');

    areaCalcutation(parallelogramText,area);

});

//Rhombus

document.getElementById('rhombus-calculate-btn').addEventListener('click', function () {
    const rhombusD1Value = inputFieldValue('rhombus-d1-input');
    const rhombusD2Value = inputFieldValue('rhombus-d2-input');

    const area = 0.5* rhombusD1Value * rhombusD2Value ;

    const rhombusText = textFieldValue('rhombus-text');
   
    areaCalcutation(rhombusText,area);

});

// Pentagon
document.getElementById('pentagon-calculate-btn').addEventListener('click', function () {
    const pentagonPValue = inputFieldValue('pentagon-p-input');
    const pentagonBValue = inputFieldValue('pentagon-b-input');

    const area = 0.5* pentagonPValue * pentagonBValue ;

    const pentagonText = textFieldValue('pentagon-text');
   
    areaCalcutation(pentagonText,area);

});


