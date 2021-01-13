
const addElement = (e, node = 'div', txt='tekst', attr='style', value='font-size:50px') => {
    e.preventDefault()
    const element = document.createElement(node);
    
    if(txt) {
    const text = document.createTextNode(txt);
    element.appendChild(text);
    }
    if(attr) {
    element.setAttribute(attr, value)
    }
    document.querySelector('.content').appendChild(element)
}




const searchElements = (e, nameElement) => {
e.preventDefault();
const infoElement = document.querySelector('.result');
infoElement.textContent = '';
const elements = document.querySelectorAll(nameElement)
console.log(elements)
if(elements.length) {
    infoElement.innerHTML = `<p class="result__number-info">I found: <strong> ${elements.length} </strong> elements <strong> ${nameElement}</strong></p>`;
    showInfo(elements, infoElement)
} else {
    infoElement.innerHTML = `<p class="result__info">I don't find elements: <strong> ${nameElement} </strong> </p>`
    return;

}

}

const showInfo = (elements, infoElement) => {
    console.log(elements);
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>class/classes: ${element.className}</div>
        <div>Height: ${element.offsetHeight}</div>
        <div>Width: ${element.offsetWidth}</div>
        <div>Left: ${element.offsetLeft}</div>
        <div>Top: ${element.offsetTop}</div>
        <div>Child element number:${element.childElementCount}</div>
        `;
        infoElement.appendChild(item)
    })

}

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
    
    ))


    const searchForm = document.querySelector('.form--search');
    searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-elements'].value));