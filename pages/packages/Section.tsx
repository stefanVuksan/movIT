import React from 'react'

const Section = ({ children,name }:{name:string,children:any}) =>
    <section className={'position-relative movit-'+ name}>{children}</section>

export default Section
