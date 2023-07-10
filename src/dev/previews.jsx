import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {ContextProvider} from "../Contexts/ContextProvider.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ContextProvider">
                <ContextProvider/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews