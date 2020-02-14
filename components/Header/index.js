// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function createElement(element, className, text, node){
    const e = document.createElement(element)
          className != '' ? e.classList.add(className) : false
          text != '' ? e.textContent = text : false 
          node != '' ? node.appendChild(e) : false
    return e
}

function Header() {
    const divH = createElement('div', 'header', '', '')
    const spanH = createElement('span', 'date', 'SMARCH 28, 2019', divH)
    const h1H = createElement('h1', '', 'Lambda Times', divH)
    const span2H = createElement('span', 'temp', '98°', divH)
    return divH
}




const headerParent = document.querySelector('.header-container')
headerParent.appendChild(Header())


