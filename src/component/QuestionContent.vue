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

        <div v-else-if="question.type === 'Radio Button'">
            <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in question.radioButtons" :key="index"
                        :title="'Input Field ' + (index + 1)">
                        <v-expansion-panel-text>
                            <v-radio-group>
                                <v-radio value="option1">
                                    <template v-slot:label>
                                        <v-text-field v-model="item.optionLabel" label="Radio Label"></v-text-field>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                            
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-card-actions>
                    <v-btn variant="text" color="primary" @click="addRadioButton"> + Add new field </v-btn>
                </v-card-actions>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Checkbox'">
            <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in question.checkbox" :key="index"
                        :title="'Input Field ' + (index + 1)">
                        <v-expansion-panel-text>
                            <v-checkbox>
                                <template v-slot:label></template>
                            </v-checkbox>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-card-actions>
                    <v-btn variant="text" color="primary" @click="addCheckbox"> + Add new field </v-btn>
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

const addRadioButton = () => {
    props.question.radioButtons.push({ type: '' })
}

const addCheckbox = () => {
    props.question.checkbox.push({ type: '' })
}

const addConditional = () => {
    props.question.conditionals.push({
        type: '', internalTitle: '', title: '', text: '', buttonText: '',
        inputFields: [],
        radioButtons: [],
        checkbox: [],
        conditionals: []
    })
}


</script>