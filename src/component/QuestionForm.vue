
<template>
    <v-expansion-panels>
        <v-expansion-panel :title="'Input Field ' + (index + 1)">
            <v-expansion-panel-text>
                <v-container>
                    <v-select v-model="question.type" :items="questionTypes" label="Question Type"></v-select>
                    <v-text-field v-model="question.internalTitle" label="Internal title"></v-text-field>
                    <v-text-field v-model="question.title" label="Enter title"></v-text-field>
                    <v-text-field v-model="question.text" label="Enter text"></v-text-field>
                    <v-text-field v-model="question.buttonText" label="Button Text"></v-text-field>
                    <QuestionContent :question="question" />
                </v-container>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>


import QuestionContent from './QuestionContent.vue'

defineProps({ question: Object, index: Number })

const questionTypes = ['Input', 'Radio Button', 'Checkbox', 'Conditional']


</script>