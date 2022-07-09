import React, { useState } from "react";
import { StyleSheet, Modal, View, Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableOpacity } from "react-native";


export default function TaskContent({ taskName, content, handleCloseTaskContent, handleAddTaskDetail }) {
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : 'height'}
        >
            <Modal
                animationType="fade"
                transparent={true}
                visible={true}
                onRequestClose={() => handleCloseContent()}
            >
                <View style={styles.modal}>
                    <View style={styles.taskTitleWrapper}>
                        <Text style={styles.taskTitle}>{taskName}</Text>
                    </View>
                    {/* Write a task */}
                    <View
                        style={styles.writeTaskContentWrapper}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder={'Write the content'}
                            value={content}
                            onChangeText={(text) => handleAddTaskDetail(text)}
                            multiline={true}
                            numberOfLines={10}
                        />
                        <TouchableOpacity onPress={() => handleCloseTaskContent()}>
                            <View style={styles.validationWrapper}>
                                <Text style={styles.validationText}>OK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modal: {
        backgroundColor: "#FBE364",
        height: '50%',
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginVertical: 130,
        marginHorizontal: 20,
    },
    taskTitleWrapper: {
        alignItems: 'center',

    },
    taskTitle: {
        fontSize: 50,
        fontWeight: "bold"
    },
    taskDetail: {
        fontSize: 30,
    },
    text: {
        marginTop: 10
    },
    writeTaskContentWrapper: {
        position: "absolute",
        bottom: 10,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 300,
        marginVertical: 30,
        borderRadius: 10,
    },
    validationWrapper: {
        width: 300,
        height: 30,
        marginTop: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    validationText: {},
})