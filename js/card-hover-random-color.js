function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}
//Triangle
document.getElementById('card-one-hover-random-color').addEventListener('mouseover', event => {
    const hoverColor = document.getElementById('card-one-hover-random-color');
    hoverColor.style.backgroundColor = randomColor();
});

document.getElementById('card-one-hover-random-color').addEventListener('mouseout', event => {
    const hoverColor = document.getElementById('card-one-hover-random-color');
    hoverColor.style.backgroundColor ='';
});

// Rectangle
document.getElementById('card-two-hover-random-color').addEventListener('mouseover', event => {
    const hoverColor = document.getElementById('card-two-hover-random-color');
    hoverColor.style.backgroundColor = randomColor();
});

document.getElementById('card-two-hover-random-color').addEventListener('mouseout', event => {
    const hoverColor = document.getElementById('card-two-hover-random-color');
    hoverColor.style.backgroundColor = '';
});

// Parallelogram
document.getElementById('card-three-hover-random-color').addEventListener('mouseover', event => {
    const hoverColor = document.getElementById('card-three-hover-random-color');
    hoverColor.style.backgroundColor = randomColor();
});

document.getElementById('card-three-hover-random-color').addEventListener('mouseout', event => {
    const hoverColor = document.getElementById('card-three-hover-random-color');
    hoverColor.style.backgroundColor = '';
});

// Rhombus
document.getElementById('card-four-hover-random-color').addEventListener('mouseover', event => {
    const hoverColor = document.getElementById('card-four-hover-random-color');
    hoverColor.style.backgroundColor = randomColor();
});

document.getElementById('card-four-hover-random-color').addEventListener('mouseout', event => {
    const hoverColor = document.getElementById('card-four-hover-random-color');
    hoverColor.style.backgroundColor = '';
});

// Pentagon
document.getElementById('card-five-hover-random-color').addEventListener('mouseover', event => {
    const hoverColor = document.getElementById('card-five-hover-random-color');
    hoverColor.style.backgroundColor = randomColor();
});

document.getElementById('card-five-hover-random-color').addEventListener('mouseout', event => {
    const hoverColor = document.getElementById('card-five-hover-random-color');
    hoverColor.style.backgroundColor = '';
});
// Ellipse
document.getElementById('card-six-hover-random-color').addEventListener('mouseover', event => {
    const hoverColor = document.getElementById('card-six-hover-random-color');
    hoverColor.style.backgroundColor = randomColor();
});

document.getElementById('card-six-hover-random-color').addEventListener('mouseout', event => {
    const hoverColor = document.getElementById('card-six-hover-random-color');
    hoverColor.style.backgroundColor = '';
});