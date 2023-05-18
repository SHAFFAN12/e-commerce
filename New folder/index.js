let i = 0 
function cartno () {
    alert("added to cart")
    i = i + 1
    this.i = i

    document.getElementById("count").innerHTML=i
}
class addToCart{
    constructor(Price, Description, Image){
        a = localStorage.getItem(Price);
        b = localStorage.getItem(Description);
        c = localStorage.getItem(Image);
        let myProducts;
        JSON.parse(a);
        JSON.parse(b);
        JSON.parse(c);

        let obj = {
            price:JSON.parse(a), Description:JSON.parse(b),Image:JSON.parse(c)
        }
        myProducts.push(JSON.stringify(obj));

        let store = localStorage.setItem(myProducts);
        this.JSON.parse(store)= store;

    }
}

function showcart() {
    let product= document.getElementById('cai')
    //   let a = [{description:"des", p:"123"}]
    //  let p =  localStorage.getItem('product')
    //  let a = JSON.stringify(p)
    let w = JSON.stringify(store)
    for(let so of 10){
        let mainDiv = document.childElement('div')
        let headingText = document.createTextNode(so.w)
        let heading = document.createElement('h2')
        heading.appendChild(headingText)
        mainDiv.appendChild(heading)
        let descriptionText = document.createTextNode(so.image)
        let description = document.createElement('p')
        description.appendChild(descriptionText)
        mainDiv.appendChild(description)
        // let button text
        document.createElementTextNode("Confirm Order")
        // let button
        document.createElement('button')
        button.appendChild(buttonText)
        button.addEventListener('click',seeMore)
        mainDiv.appendChild(button)
        productDiv.appendChild(mainDiv)   
    }    
}
showcart();