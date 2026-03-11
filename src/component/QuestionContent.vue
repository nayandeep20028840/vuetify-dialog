<template>
    <div class="mt-4">

        <div v-if="question.type === 'Input'">
            <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in question.inputFields" :key="index"
                        :title="'Input Field ' + (index + 1)">
                        <v-expansion-panel-text>
                            <v-container>
                                <v-select v-model="item.type" :items="inputQuestionTypes"
                                    label="Choose question type"></v-select>
                            </v-container>
                            
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-card-actions>
                    <v-btn variant="text" color="primary" @click="addInputType"> + Add new field </v-btn>
                </v-card-actions>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Conditional'">
            <v-container>
                <QuestionForm v-for="(item, index) in question.conditionals" :key="index" :question="item"
                    :index="index" />
                <v-card-actions>
                    <v-btn variant="text" color="primary" @click="addConditional">+ Add new condition</v-btn>
                </v-card-actions>
            </v-container>
        </div>

    </div>
</template>



<script setup>


import { defineProps } from 'vue'
import QuestionForm from './QuestionForm.vue'

const props = defineProps({ question: Object })

const inputQuestionTypes = ['Text', 'Phone', 'Email', 'Date']

const addInputType = () => {
    props.question.inputFields.push({ type: '' })
}


const addConditional = () => {
    props.question.conditionals.push({
        type: '', internalTitle: '', title: '', text: '', buttonText: '',
        conditionals: [],
        inputFields: []
    })
}


</script>