// triangle
document.getElementById('triangle-calcutale-btn').addEventListener('click', function () {
    const triangleBValue = inputFieldValue('triangle-b-input');
    const triangleHValue = inputFieldValue('triangle-h-input');

    if(triangleBValue<=0 || isNaN(triangleBValue)){
        alert('Please Enter Correct Value for b field');
        return;
    }
    else if(triangleHValue<=0 || isNaN(triangleHValue)){
        alert('Please Enter Correct Value for h field');
        return;
    }

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

    if(rectangleWValue<=0 || isNaN(rectangleWValue)){
        alert('Please Enter Correct Value for w field');
        return;
    }
    else if(rectanglelValue <=0 || isNaN(rectanglelValue)){
        alert('Please Enter Correct Value for l field');
        return;
    }

    const area = rectangleWValue * rectanglelValue;

    const rectangleText = textFieldValue('rectangle-text');

    areaCalcutation(rectangleText,area);

});

// Parallelogram
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function () {
    const parallelogramBValue = inputFieldValue('parallelogram-b-input');
    const parallelogramHValue = inputFieldValue('parallelogram-h-input');

    if(parallelogramBValue<=0 || isNaN(parallelogramBValue)){
        alert('Please Enter Correct Value for b field');
        return;
    }
    else if(parallelogramHValue <=0 || isNaN(parallelogramHValue)){
        alert('Please Enter Correct Value for h field');
        return;
    }

    const area = parallelogramBValue * parallelogramHValue;

    const parallelogramText = textFieldValue('parallelogram-text');

    areaCalcutation(parallelogramText,area);

});

//Rhombus

document.getElementById('rhombus-calculate-btn').addEventListener('click', function () {
    const rhombusD1Value = inputFieldValue('rhombus-d1-input');
    const rhombusD2Value = inputFieldValue('rhombus-d2-input');

    if(rhombusD1Value<=0 || isNaN(rhombusD1Value)){
        alert('Please Enter Correct Value for d1 field');
        return;
    }
    else if(rhombusD2Value <=0 || isNaN(rhombusD2Value)){
        alert('Please Enter Correct Value for d2 field');
        return;
    }

    const area = 0.5* rhombusD1Value * rhombusD2Value ;

    const rhombusText = textFieldValue('rhombus-text');
   
    areaCalcutation(rhombusText,area);

});

// Pentagon
document.getElementById('pentagon-calculate-btn').addEventListener('click', function () {
    const pentagonPValue = inputFieldValue('pentagon-p-input');
    const pentagonBValue = inputFieldValue('pentagon-b-input');

    if(pentagonPValue<=0 || isNaN(pentagonPValue)){
        alert('Please Enter Correct Value for p field');
        return;
    }
    else if(pentagonBValue<=0 || isNaN(pentagonBValue)){
        alert('Please Enter Correct Value for b field');
        return;
    }

    const area = 0.5* pentagonPValue * pentagonBValue ;

    const pentagonText = textFieldValue('pentagon-text');
   
    areaCalcutation(pentagonText,area);

});

//Ellipse
document.getElementById('ellipse-calculate-btn').addEventListener('click', function () {
    const ellipseAValue = inputFieldValue('ellipse-a-input');
    const ellipseBValue = inputFieldValue('ellipse-b-input');

    if(ellipseAValue<=0 || isNaN(ellipseAValue)){
        alert('Please Enter Correct Value for a field');
        return;
    }
    else if(ellipseBValue<=0 || isNaN(ellipseBValue)){
        alert('Please Enter Correct Value for b field');
        return;
    }

    const area = 3.14 * ellipseAValue * ellipseBValue ;

    const ellipseText = textFieldValue('ellipse-text');
   
    areaCalcutation(ellipseText,area);

});



