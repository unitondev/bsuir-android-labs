import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, Button } from 'react-native'

import { writeToStorage } from './writeToStorage'
import { readFromStorage } from './readFromStorage'
import { deleteFromStorage } from './deleteFromStorage'

const Lab6 = () => {
    const studentsKey = 'students'
    const [dataFromStorage, setDataFromStorage] = useState()
    const [isAddingMode, setIsAddingMode] = useState(true)

    const [lastName, setLastName] = useState()
    const [group, setGroup] = useState()
    const [faculty, setFaculty] = useState()

    const addStudent = async () => {
        let studentsList = await readFromStorage(studentsKey)

        const student = {
            lastName: lastName,
            group: group,
            faculty: faculty
        }

        if (studentsList) {
            studentsList.push(student)
        } else studentsList = [student]

        writeToStorage(studentsKey, studentsList)
    }

    const showStudents = async () => {
        setIsAddingMode(false)
        setDataFromStorage(await readFromStorage(studentsKey))
    }

    const deleteStudents = () => {
        deleteFromStorage(studentsKey)
    }

    const renderStudentsList = ({ item }) => {
        return (
            <View style={styles.studentItem}>
                <Text style={ styles.text }>{ item.lastName }</Text>
                <Text style={ styles.text }>{ item.group }</Text>
                <Text style={ styles.text }>{ item.faculty }</Text>
            </View>
        )
    }

    const AddingComponent = (
        <>
            <TextInput
                placeholder='Enter last name'
                value={lastName}
                onChangeText={setLastName}
                style={ styles.input }
                placeholderTextColor='#9c9c9c'
            />
            <TextInput
                placeholder='Enter group number'
                value={group}
                onChangeText={setGroup}
                keyboardType='number-pad'
                style={ styles.input }
                placeholderTextColor='#9c9c9c'
            />
            <TextInput
                placeholder='Enter faculty'
                value={faculty}
                onChangeText={setFaculty}
                style={ styles.input }
                placeholderTextColor='#9c9c9c'
            />
            <Button onPress={addStudent} title='Save' color='#007AFF' />
        </>
    )

    const ShowingComponent = (
        <FlatList
            data={dataFromStorage}
            keyExtractor={() => Math.random()}
            renderItem={renderStudentsList}
        />
    )

    return (
        <View style={styles.screen}>
            <View style={styles.buttonsRow}>
                <Button onPress={() => setIsAddingMode(true)} title='Add' color='#007AFF' />
                <Button onPress={showStudents} title='Show' color='#007AFF' />
                <Button onPress={deleteStudents} title='Delete all' color='#007AFF' />
            </View>
            {isAddingMode ? AddingComponent : ShowingComponent}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20,
        flex: 1,
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    studentItem: {
        marginVertical: 10
    },
    text: {
        color: 'black'
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        marginHorizontal: 6,
        marginVertical: 12,
        padding: 10,
        color: 'black'
    },
})

export default Lab6