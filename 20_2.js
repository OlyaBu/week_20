async function getLoad() {
   let gif = await fetch("https://favqs.com/api/qotd");
let data = await gif.json();
console.log(data);

let resultNode =document.createElement("div");
let text = document.createElement("h2");
let authortxt = document.createElement("h3");
text.textContent=data.quote.body;
authortxt.textContent=data.quote.author;

resultNode.append(text);
resultNode.append(authortxt);

document.body.append(resultNode)
}

getLoad();
