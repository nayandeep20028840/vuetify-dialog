

<template>
    <v-expansion-panels>
        <QuestionForm v-for="(question, index) in store.questions" :question="question" :index="index" />
    </v-expansion-panels>
</template>



<script setup>

import { defineExpose } from 'vue'
import { useFormStore } from '@/stores/formStore'
import QuestionForm from './QuestionForm.vue'

const store = useFormStore()

const createNewQuestion = () => ({
    type: '',
    internalTitle: '',
    title: '',
    text: '',
    buttonText: '',
    inputFields: [{ type: '' }],
    conditionals: []
})

if (store.questions.length === 0) {
    store.questions.push(createNewQuestion())
}

const addQuestion = () => {
    store.questions.push(createNewQuestion())
}

defineExpose({ addQuestion })


</script>