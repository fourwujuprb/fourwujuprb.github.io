

// console.log(liElement);
// console.log(txtNode);
// console.log(attrNode);


const newItem = () => {
    let liElement = document.createElement('li');
    let txtNode = document.createTextNode('Item 4');
    let attrNode = document.createAttribute('class');
    attrNode.value = 'item';

    liElement.appendChild(txtNode);
    liElement.setAttributeNode(attrNode);

    let item = document.getElementById('items');
    item.appendChild(liElement);

}

let btn = document.getElementById('newItem');

btn.addEventListener('click', newItem);
