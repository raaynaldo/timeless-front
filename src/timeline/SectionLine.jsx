import React from 'react'
import Section from  './Section'



export default function SectionLine(props) {

    function generateSections() {
        return props.sections.map((section, index) => <Section id={index + 1}/>)
      }

    return (
            generateSections()
    )
}
