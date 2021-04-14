const colorBtn = document.querySelector('.random-color');


const randomNumber = () => {
	return Math.floor(Math.random() * 255);
};

const backgroundColor = () => {
	document.body.style.backgroundColor = `
  rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

const changeTextColor = () => {
	document.getElementById('text-color').style.color = `
  rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

colorBtn.addEventListener('click', backgroundColor);

