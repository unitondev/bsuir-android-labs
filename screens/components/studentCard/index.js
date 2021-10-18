import React, { useRef } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik'
import * as Yup from 'yup'

import styles from './styles'

const Index = ({
    handleSubmit
}) => {
    const ref_lastNameInput = useRef()
    const ref_middleNameInput = useRef()
    const ref_groupNumberInput = useRef()
    const ref_facilityInput = useRef()

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', middleName: '', groupNumber: '', faculty: ''}}
            onSubmit={values => handleSubmit(values)}
            validationSchema={Yup.object().shape({
                firstName: Yup.string().required('Required'),
                lastName: Yup.string().required('Required'),
                middleName: Yup.string().required('Required'),
                groupNumber: Yup.string().min(6, 'Should be 6 numbers').max(6, 'Should be 6 numbers').required('Required'),
                faculty: Yup.string().required('Required'),
            })}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                <View style={styles.screen}>
                <KeyboardAwareScrollView 
                    keyboardShouldPersistTaps={'always'} 
                    style={{flex:1}} 
                    showsVerticalScrollIndicator={false}
                >
                <TextInput
                    placeholder="Enter first name"
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    blurOnSubmit={false}
                    onSubmitEditing={() => { ref_lastNameInput.current.focus() }}
                    style={styles.input}
                />
                { errors.firstName && touched.firstName &&
                    <Text style={styles.errorMessage}>{errors.firstName}</Text>
                }
                <TextInput
                    placeholder="Enter last name"
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    blurOnSubmit={false}
                    ref={ref_lastNameInput}
                    onSubmitEditing={() => { ref_middleNameInput.current.focus() }}
                    style={styles.input}
                />
                { errors.lastName && touched.lastName &&
                    <Text style={styles.errorMessage}>{errors.lastName}</Text>
                }
                <TextInput
                    placeholder="Enter middle name"
                    value={values.middleName}
                    onChangeText={handleChange('middleName')}
                    onBlur={handleBlur('middleName')}
                    blurOnSubmit={false}
                    ref={ref_middleNameInput}
                    onSubmitEditing={() => { ref_groupNumberInput.current.focus() }}
                    style={styles.input}
                />
                { errors.middleName && touched.middleName &&
                    <Text style={styles.errorMessage}>{errors.middleName}</Text>
                }
                <TextInput
                    placeholder="Enter group number"
                    value={values.groupNumber}
                    onChangeText={handleChange('groupNumber')}
                    onBlur={handleBlur('groupNumber')}
                    blurOnSubmit={false}
                    ref={ref_groupNumberInput}
                    onSubmitEditing={() => { ref_facilityInput.current.focus() }}
                    keyboardType='number-pad'
                    style={styles.input}
                />
                { errors.groupNumber && touched.groupNumber &&
                    <Text style={styles.errorMessage}>{errors.groupNumber}</Text>
                }
                <TextInput
                    placeholder="Enter faculty"
                    value={values.faculty}
                    onChangeText={handleChange('faculty')}
                    onBlur={handleBlur('faculty')}
                    blurOnSubmit={true}
                    ref={ref_facilityInput}
                    style={styles.input}
                />
                { errors.faculty && touched.faculty &&
                    <Text style={styles.errorMessage}>{errors.faculty}</Text>
                }
                <View style={styles.submitButton}>
                    <Button 
                        onPress={handleSubmit}
                        title='Submit'
                        color='#007AFF'
                        disabled={!isValid}
                    />
                </View>
                </KeyboardAwareScrollView>
            </View>
            )}
        </Formik>
    )
}

export default Index