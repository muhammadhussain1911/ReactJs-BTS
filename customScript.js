function customRender(customElement, container){
    
    // const domElement = document.createElement(customElement.type)
    // domElement.innerHTML = customElement.anchorText
    // domElement.setAttribute('href', customElement.props.href)
    // domElement.setAttribute('target', customElement.props.target)

    // container.appendChild(domElement)

// <============ Same above logic but with better approach ============>
    

    const domElement = document.createElement(customElement.type)
    domElement.innerHTML = customElement.anchorText
    for (const prop in customElement.props) {
        if (prop === 'anchorText') continue;
        domElement.setAttribute(prop, customElement.props[prop])
    }
    container.appendChild(domElement)
}
// React render every element of html in a object like below, but this object would not work in react because react make its own DOM and has own rules. For this visit reactScript.js / reactElement
const customElement = { 
    type: 'a',
    props: {
        href: 'https://github.com/muhammadhussain1911/',
        target: '_blank'
    },
    anchorText: 'Click here to see my GitHub Profile'
}

const mainSection = document.querySelector('#root')

customRender(customElement, mainSection)