console.log("hellow im working")


function createElement(elem, container){
    tag = document.createElement(`${elem.type}`);
    for (const att in elem.attr){
        tag.setAttribute(att, elem.attr[att]);
    }
    tag.innerHTML = elem.content
    container.appendChild(tag)
}

const rootElem = document.querySelector('#root')


const anchor = {
    type: "a",
    attr: {
        href: "https://www.google.com",
        target: "_blank"
    },
    content: "Click me to open Google"
}


createElement(anchor, rootElem);