<template>
    <div class="text-center pa-4">
        <v-btn text="Add +" @click="dialog = true"></v-btn>
        <v-dialog v-model="dialog" max-width="680" max-height="400" persistent>
            <v-card title="Add Question" theme="light">
                <template v-slot:text>
                    <v-btn class="my-1" text="Close" @click="dialog2 = true"></v-btn>
                </template>
                <v-container>
                    <v-expansion-panels>
                        <v-expansion-panel title="Q1">
                            <v-expansion-panel-text>
                                <v-container>
                                    <div class="text-center">
                                        <v-select v-model="location" :items="locations" label="Location"></v-select>
                                        <v-menu :location="location">
                                            <v-list>
                                                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </div>
                                </v-container>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-container>
                <v-card-actions>
                    <v-btn text="+ Add new" variant="text"></v-btn>
                    <v-btn text="Save" variant="tonal" @click="dialog = false"></v-btn>
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
</template>


<script setup>

import { ref } from 'vue'
const dialog = ref(false)
const dialog2 = ref(false)
const location = ref('end')

const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
]
const locations = [
    'top',
    'bottom',
    'start',
    'end',
    'center',
]

</script>
