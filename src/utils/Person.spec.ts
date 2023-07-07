import { vi, it, expect } from "vitest";
import { personAge, doublePersonAge } from "./Person";

vi.mock("./Person")
it.only("return double age when personAge func is right", ()=>{
        vi.mocked(personAge).mockReturnValue(10);

        console.log("personAge: ", personAge())
        
        const doubleAge = doublePersonAge()
        //doubleAge is undefined

        expect(doubleAge).toBe(20)
})