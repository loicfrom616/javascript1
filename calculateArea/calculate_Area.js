let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }


function groceryTracker () {
    price1 = parseFloat(document.getElementById('grocery1').value);
    price2 = parseFloat(document.getElementById('grocery2').value);
    price3 = parseFloat(document.getElementById('grocery3').value);

    let sum = price1 + price2 + price3 ;

    document.getElementById('total').innerText = `Price total is : ${sum}`;
}
