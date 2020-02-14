
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createElement(element, className, text, node){
    const e = document.createElement(element)
          className != '' ? e.classList.add(className) : false
          text != '' ? e.textContent = text : false 
          node != '' ? node.appendChild(e) : false
    return e
}
axios.get('https://lambda-times-backend.herokuapp.com/topics').then(res => {
    res.data.topics.forEach( topic => {
        createElement("div", "tab", topic, document.querySelector(".topics"));
    })
}).catch( error => {
    console.log(error);
})