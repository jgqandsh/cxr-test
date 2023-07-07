
import {describe, it, expect, vi} from "vitest"
import { useCameraStore } from "./camerasStore"
import { createPinia, setActivePinia } from "pinia";



describe("camera store", ()=>{
    vi.mock("../utils/Person")

    setActivePinia(createPinia())
    let cameraStore = useCameraStore()
 
    it.skip("add camera", ()=>{
        const cam = {camId: 1, path: "/dev/video0"}
        cameraStore.addCamera(cam)
        expect(cameraStore.cameras[0].path).toBe("/dev/video0")

    })

    it.skip("remove camera", ()=>{
        cameraStore.removeCamera()
        expect(cameraStore.cameras.length).toBe(0)
    })

})
