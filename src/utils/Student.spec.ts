import {vi, it, expect} from "vitest"
import { getFullName } from "./Student"
import { tellName } from "./useStudent"

vi.mock("./Student", async (importOriginal)=>{
    const student = await importOriginal()
    return {
        ...student as any,
        getFirstName(){
            return "heihei"
        }
    }
})

it("get full name from Student.ts", ()=>{
    const res = getFullName();
    expect(res).toBe("heihei xiaorui")
})

it("tell me your name from useStudent", ()=>{
    const res = tellName();
    expect(res).toBe("Mr heihei")
})