// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.s
function createElement(element, className, text, node){
    const e = document.createElement(element)
          className != '' ? e.classList.add(className) : false
          text != '' ? e.textContent = text : false 
          node != '' ? node.appendChild(e) : false
    return e
}


function cardCreator(headline, authorPhoto, authorName){
    const articleCard = createElement('div', 'card', '', document.querySelector('.cards-container'))
    const headLine = createElement('div', 'headline', headline, articleCard)
    const cardAuthorDiv = createElement('div', 'author', '', articleCard)
    const imgDiv = createElement('div', 'img-container', '', cardAuthorDiv)
    const img = createElement('img', '', '', imgDiv)
          img.src = authorPhoto
    const span = createElement('span', '', `By: ${authorName}`, cardAuthorDiv)
    console.log('each article!', articleCard)

    return articleCard;
}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(res => {
        console.log(res)
        const a = res.data.articles

        const subject = Object.keys(a)
        // const arr = Object.keys(a).map((i) => {
        //     return [Number(i), a[i]];
        // })
        console.log('subjects', subject)

        subject.forEach(articleSubjects => {
            a[articleSubjects].forEach(article => {
                cardCreator(article.headline, article.authorPhoto, article.authorName)
            }) 
        })
    })
    .catch(err => {console.error('error in cards GET', err)})