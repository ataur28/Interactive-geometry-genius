function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

document.getElementById('card-hover-random-color').addEventListener('mouseover', event => {
    const hoverColor = document.getElementById('card-hover-random-color');
    hoverColor.style.backgroundColor = randomColor();
});

document.getElementById('card-hover-random-color').addEventListener('mouseout', event => {
    const hoverColor = document.getElementById('card-hover-random-color');
    hoverColor.style.backgroundColor = '';
});