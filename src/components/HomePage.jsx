import React from 'react'

function HomePage(props) {
    const std='10th'
    return (
        <div>
           <h3> {props.name} is studying {props.std} </h3>
        </div>
    )
}

export default HomePage;
