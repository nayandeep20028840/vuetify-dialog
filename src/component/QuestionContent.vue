<template>
    <div class="mt-4">

        <div v-if="question.type === 'Input'">
            <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, index) in inputQuestions" :key="index"
                        :title="'Input Field ' + (index + 1)">
                        <v-expansion-panel-text>
                            <v-container>
                                <div class="text-center">
                                    <v-select v-model="item.type" :items="inputQuestionTypes"
                                        label="Choose question type"></v-select>
                                </div>
                            </v-container>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Radio Button'">
            <v-container>
                <v-radio-group v-model="question.selectedAnswer">
                    <v-radio value="option1">
                        <template v-slot:label>
                            <v-text-field v-model="question.optionLabel" label="Radio Label"></v-text-field>
                        </template>
                    </v-radio>
                </v-radio-group>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Dropdown'">
            <v-container>
                <v-radio-group v-model="selectedOption">
                    <v-radio value="one">
                        <template v-slot:label>
                            <v-text-field></v-text-field>
                        </template>
                    </v-radio>
                </v-radio-group>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Checkbox'">
            <v-container>
                <v-checkbox>
                    <template v-slot:label>
                        <v-text-field></v-text-field>
                    </template>
                </v-checkbox>
            </v-container>
        </div>

        <div v-else-if="question.type === 'Conditional'">
            <v-container>
                <v-text-field label="Conditional"></v-text-field>
            </v-container>
        </div>

    </div>
</template>



<script setup>

import { ref, defineProps } from 'vue'

const inputQuestionTypes = ['Text', 'Phone', 'Email', 'Date']
const inputQuestions = ref([{ type: '' }])

const props = defineProps({ question: Object });

</script>