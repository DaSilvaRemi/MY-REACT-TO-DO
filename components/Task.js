import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TaskContent from "./TaskContent";

export default function Task({ text, index, completeTask, handleInputIsVisible }) {
    const [taskContentIsOpen, setTaskContentIsOpen] = useState(false);
    const [taskDetail, setTaskDetail] = useState('');

    const handleOpenTaskContent = () => {
        handleInputIsVisible(false);
        setTaskContentIsOpen(true);
    } 

    const handleCloseTaskContent = () => {
        handleInputIsVisible(true);
        setTaskContentIsOpen(false);
    } 

    
    const handleAddTaskDetail = (text) => {
        setTaskDetail(text);
    };

    const renderTask = () => {
        if (taskContentIsOpen) {
            return (<TaskContent 
                taskName={text} 
                content={taskDetail}
                handleCloseTaskContent={handleCloseTaskContent} 
                handleAddTaskDetail={handleAddTaskDetail}
            />
            )
        }

        return (
            <View style={styles.items}>
                <TouchableOpacity onPress={handleOpenTaskContent}>
                    <View style={styles.itemLeft}>
                        <View style={styles.square}></View>
                        <Text style={styles.itemText}>{text}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => completeTask(index)}>
                    <View style={styles.circular}></View>
                </TouchableOpacity>
            </View>
        )
    }

    return renderTask();
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }
});