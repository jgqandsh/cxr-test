<script setup lang="ts">
import { ref } from "vue";
import { useCameraStore } from "../store/camerasStore";

defineProps<{ msg: string }>();
const cameraStore = useCameraStore();
const count = ref(0);

const { cameras, addCamera, removeCamera } = cameraStore;
console.log("cameras: ", cameras);

const handleAddCam = () => {
  addCamera({ camId: 1, path: "/dev/video0" });
  console.log("add cam: ", cameras[0].path);
};

const handleRemoveCam = () => {
  removeCamera();
  console.log("remove cam: ", cameras);
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="handleAddCam">add</button>
  <button @click="handleRemoveCam">remove</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
