

<template>
    <v-app style="background-color: #ADD8E6">
        <v-main>
            <div class="text-center pa-4">
                <v-btn text="Add +" @click="dialog = true" color="white"></v-btn>
                <v-dialog v-model="dialog" max-width="680" max-height="400" persistent>
                    <v-card title="Add Question" theme="light">
                        <v-btn class="ms-auto my-1" text="Close" @click="dialog2 = true"></v-btn>
                        <v-container>
                            <AddQuestion ref="questionFormRef" />
                        </v-container>
                        <v-card-actions>
                            <v-btn text="+ Add new" @click="questionFormRef?.addQuestion()"></v-btn>
                            <v-btn text="Save" @click="saveData"></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialog2" max-width="340" max-height="200" persistent>
                    <v-card title="Dialog 2" theme="light">
                        <v-card-actions>
                            <v-btn text="No" @click="dialog2 = false"></v-btn>
                            <v-btn text="Yes" @click="dialog2 = dialog = false"></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </v-main>
    </v-app>
</template>


<script setup>

import { ref } from 'vue'
import { useFormStore } from '@/stores/formStore'
import AddQuestion from './component/addQuestion.vue'

const dialog = ref(false)
const dialog2 = ref(false)
const questionFormRef = ref(null)


const store = useFormStore()
const saveData = () => {
    const jsonOutput = JSON.stringify(store.questions, null, 2);
    console.log("Saved Data:", jsonOutput);
}

</script>