


<template>
    <v-expansion-panels v-model="openedPanel">
        <v-expansion-panel v-for="(question, index) in questions" :key="index" :title="'Question ' + (index + 1)">
            <v-expansion-panel-text>
                <v-container>
                    <v-select v-model="question.type" :items="questionTypes" label="Question Type"></v-select>
                    <v-text-field v-model="question.internalTitle" label="Internal title"></v-text-field>
                    <v-text-field v-model="question.title" label="Enter title:"></v-text-field>
                    <v-text-field v-model="question.text" label="Enter text:"></v-text-field>
                    <v-text-field v-model="question.buttonText" label="Button Text"></v-text-field>
                    <QuestionContent :question="question" />
                </v-container>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>

import { ref, defineExpose } from 'vue'
import QuestionContent from './QuestionContent.vue'

const questionTypes = ['Input', 'Radio Button','Dropdown', 'Checkbox', 'Conditional']

const createNewQuestion = () => ({ type: '', internalTitle: '', title: '', text: '', buttonText: '' })

const questions = ref([createNewQuestion()])
const openedPanel = ref(0)

const addQuestion = () => {
    questions.value.push(createNewQuestion())
    openedPanel.value = questions.value.length - 1
}

defineExpose({ questions, addQuestion });

</script>