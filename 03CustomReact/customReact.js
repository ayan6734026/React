const mainContainer=document.querySelector("#root")

const Children=( // Children: "click to visit google" / Assign type
    "click to visit google"
)

const reactElement={ //object
    type: "a",
    props:{
        href: "https://www.google.com",
        target: "_blank"
    },
    Children //Same as below
    // Children: "click to visit google"
}

function customRender(reactElement,mainContainer){
// const domElement=document.createElement(reactElement.type)
// domElement.innerHTML=reactElement.Children
// domElement.setAttribute("href",reactElement.props.href)
// domElement.setAttribute("target",reactElement.props.target)



// This is the recomended type
const domElement=document.createElement(reactElement.type);
domElement.innerHTML=reactElement.Children;
for (const prop in reactElement.props) {
    domElement.setAttribute(prop,reactElement.props[prop])   
    mainContainer.append(domElement)
}
mainContainer.appendChild(domElement)
}
customRender(reactElement,mainContainer);
