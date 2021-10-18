import React from 'react'

import StudentCardView from '../components/studentCard'

const StudentCardContainer = ({
    navigation
}) => {
    const handleSubmit = (values) => {
        navigation.navigate('LayoutsContainer', {
            lastName: values.lastName,
            firstName: values.firstName,
            middleName: values.middleName,
            groupNumber: values.groupNumber,
            faculty: values.faculty,
        })
    }

    return <StudentCardView handleSubmit={handleSubmit}/>
}

export default StudentCardContainer
