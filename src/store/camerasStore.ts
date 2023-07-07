import { defineStore } from "pinia";
import {ref} from "vue"

interface Camera{
    camId: number;
    path: string;
}

type Cameras = Camera[];

export const useCameraStore = defineStore("cameraStore", ()=>{

    const cameras = ref<Cameras>([]);

    function addCamera(cam: Camera){
        cameras.value.push(cam)
    }

    function removeCamera(){
        cameras.value.splice(cameras.value.length - 1)
    }

    return{
        cameras,
        addCamera,
        removeCamera
    }
})































