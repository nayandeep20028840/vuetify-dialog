<template>
    <div class="mt-4">

        <div v-if="question.type === 'Input'">
            <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in inputQ" :key="index"
                        :title="'Input Field ' + (index + 1)">
                        <v-expansion-panel-text>
                            <v-container>
                                <v-select v-model="item.type" :items="inputQuestionTypes"
                                    label="Choose question type"></v-select>
                            </v-container>
                            <v-card-actions>
                                <v-btn variant="text" color="primary" @click="addInputType"> + Add new field </v-btn>
                            </v-card-actions>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Radio Button'">
            <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in radioButton" :key="index"
                        :title="'Input Field ' + (index + 1)">
                        <v-expansion-panel-text>
                            <v-radio-group>
                                <v-radio value="option1">
                                    <template v-slot:label>
                                        <v-text-field v-model="item.optionLabel" label="Radio Label"></v-text-field>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                            <v-card-actions>
                                <v-btn variant="text" color="primary" @click="addRadioButtons"> + Add new field </v-btn>
                            </v-card-actions>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Dropdown'">
            <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in dropDown" :key="index"
                        :title="'Input Field ' + (index + 1)">
                        <v-expansion-panel-text>
                            <v-radio-group>
                                <v-radio value="option1">
                                    <template v-slot:label>
                                        <v-text-field v-model="item.optionLabel" label="Drop Down"></v-text-field>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                            <v-card-actions>
                                <v-btn variant="text" color="primary" @click="addDropDown"> + Add new field </v-btn>
                            </v-card-actions>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Checkbox'">
            <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in checkbox" :key="index"
                        :title="'Input Field ' + (index + 1)">
                        <v-expansion-panel-text>
                            <v-checkbox>
                                <template v-slot:label>
                                    <v-text-field></v-text-field>
                                </template>
                            </v-checkbox>
                            <v-card-actions>
                                <v-btn variant="text" color="primary" @click="addCheckbox"> + Add new field </v-btn>
                            </v-card-actions>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Conditional'">
            <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in conditional" :key="index"
                        :title="'Input Field ' + (index + 1)">
                        <v-expansion-panel-text>
                            <add-question/>
                            <v-card-actions>
                                <v-btn variant="text" color="primary" @click="addConditional"> + Add new field </v-btn>
                            </v-card-actions>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </div>

    </div>
</template>



<script setup>

import { ref, defineProps } from 'vue'
import AddQuestion from './AddQuestion.vue';


const inputQuestionTypes = ['Text', 'Phone', 'Email', 'Date']
const inputQ = ref([{ type: '' }])
const radioButton = ref([{ type: '' }])
const dropDown = ref([{ type: '' }])
const checkbox = ref([{ type: '' }])
const conditional = ref([{ type: '' }])

const addInputType = () => {
    inputQ.value.push({ type: '' })
    console.log(inputQ.value)
}

const addRadioButtons = () => {
    radioButton.value.push({ type: '' })
}

const addDropDown = () => {
    dropDown.value.push({ type: '' })
}

const addCheckbox = () => {
    checkbox.value.push({ type: '' })
}

const addConditional = () => {
    conditional.value.push({ type: '' })
}

const props = defineProps({ question: Object });

</script>