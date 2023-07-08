
import {it, expect, vi} from "vitest"

import Person,  {getAge, getDoubleAge} from "./Peroson"

vi.spyOn(Person, "getAge").mockImplementation((() => 8))

it.only("test getDoubleAge", ()=>{
    console.log("getAge: ", Person.getAge());
    //console.log("getAge: ", getAge());
    const res = Person.getDoubleAge();
    //const res = getDoubleAge();
    expect(res).toBe(16)
}) 