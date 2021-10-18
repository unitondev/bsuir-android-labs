import React from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import styles from './styles'

const Index = ({
    layout,
    setLayout,
    navigation,
    lastName,
    middleName,
    firstName,
    groupNumber,
    faculty,
}) => {
    const handleLayouts = (layout) => {
        switch (layout) {
            case 'Linear vertical':
                return (
                    <View>
                        <Text style={styles.linearLayout}>{lastName}</Text>
                        <Text style={styles.linearLayout}>{firstName}</Text>
                        <Text style={styles.linearLayout}>{middleName}</Text>
                        <Text style={styles.linearLayout}>{groupNumber}</Text>
                        <Text style={styles.linearLayout}>{faculty}</Text>
                    </View>
                )
            case 'ScrollView':
                return (
                    <ScrollView>
                        <Text style={styles.scrollviewLayout}>{lastName}</Text>
                        <Text style={styles.scrollviewLayout}>{firstName}</Text>
                        <Text style={styles.scrollviewLayout}>{middleName}</Text>
                        <Text style={styles.scrollviewLayout}>{groupNumber}</Text>
                        <Text style={styles.scrollviewLayout}>{faculty}</Text>
                    </ScrollView>
                )
            case 'Table':
                return (
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.linearLayout}>{lastName}</Text>
                            <Text style={styles.linearLayout}>{firstName}</Text>
                            <Text style={styles.linearLayout}>{middleName}</Text>
                            <Text style={styles.linearLayout}>{groupNumber}</Text>
                            <Text style={styles.linearLayout}>{faculty}</Text>
                        </View>
                        <View>
                            <Text style={styles.linearLayout}>{lastName}</Text>
                            <Text style={styles.linearLayout}>{firstName}</Text>
                            <Text style={styles.linearLayout}>{middleName}</Text>
                            <Text style={styles.linearLayout}>{groupNumber}</Text>
                            <Text style={styles.linearLayout}>{faculty}</Text>
                        </View>
                        <View>
                            <Text style={styles.linearLayout}>{lastName}</Text>
                            <Text style={styles.linearLayout}>{firstName}</Text>
                            <Text style={styles.linearLayout}>{middleName}</Text>
                            <Text style={styles.linearLayout}>{groupNumber}</Text>
                            <Text style={styles.linearLayout}>{faculty}</Text>
                        </View>
                    </View>
                )
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.layoutButtons}>
                <View style={styles.button}>
                    <Button 
                        onPress={() => setLayout('Linear vertical')}
                        title='Linear vertical Layout'
                        color='#007AFF'
                    />
                </View>
                <View style={styles.button}>    
                    <Button 
                        onPress={() => setLayout('ScrollView')}
                        title='ScrollView Layout'
                        color='#007AFF'
                    />
                </View>
                <View style={styles.button}>    
                    <Button 
                        onPress={() => setLayout('Table')}
                        title='Table Layout'
                        color='#007AFF'
                    />
                </View>
            </View>

            {handleLayouts(layout)}

            <View style={styles.button}>        
                <Button 
                    onPress={() => navigation.goBack()}
                    title='Back'
                    color='#007AFF'
                />
            </View>
        </View>
    )
}

export default Index