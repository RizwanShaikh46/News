import React from 'react'
import Categories from './Categories'

function NewsContainer(props) {
    return(
    <section className="mw8 center">
    <h2 className="athelas ph3 ph0-1">News</h2>
    <Categories /> 
     {props.children}
    </section>
    );
}

export default NewsContainer