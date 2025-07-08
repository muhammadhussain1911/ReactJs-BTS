import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.jsx'

function MyApp(){
    const admin = "Muhammad Hussain"
    return (
        <div>
            <h1>
                This app is made by {admin} 
                {/* This is evaluated expression. Evaluated expression can be injected inside return context, not a javascript code. Because evaluated expressions are injected into object made by react and in object we cannot add javascript code like loop, conditions etc. See detail below.*/}
            </h1>
        </div>
    )
}

// const dummyObject = {
//     if (condition) {
//         execute
//     }
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
// }


const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "Muhammad Hussain"

// this is a syntax that react use to render HTML element into an object.
const reactElement = React.createElement(
    'a',
    {href: 'www.linkedin.com/in/muhammadhussain1911',target: '_blank' },
    'Click here to see LinkedIn Profile of ',
    anotherUser // After creation of all tree, now variables are injected. See detail in MyApp function.
     
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)