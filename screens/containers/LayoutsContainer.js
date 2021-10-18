import React, { useState } from 'react'
import LayoutsView from '../components/layouts'

const LayoutsContainer = ({
    route,
    navigation
}) => {
    const [layout, setLayout] = useState('Linear vertical')
    const { lastName, middleName, firstName, groupNumber, faculty } = route.params

    return <LayoutsView 
        layout={layout}
        setLayout={setLayout} 
        navigation={navigation} 
        lastName={lastName}
        middleName={middleName}
        firstName={firstName}
        groupNumber={groupNumber}
        faculty={faculty}
    />
}

export default LayoutsContainer
