<template>
  <router-view></router-view>
  <div class="mx-auto text-center w-50">
    <h1 class="text-center">Count: {{ app.count }}</h1>
    <v-text-field
      variant="solo"
      bg-color="black"
      v-model="app.count"
    ></v-text-field>
    <v-btn class="elevation-2" @click="app.count++">Increment</v-btn>
    <h1 class="text-center">Double Count: {{ app.doubleCount }}</h1>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
let app = useAppStore();
</script>
