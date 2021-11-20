import { checkForStartDate } from "../src/client/js/userInputCheck";

describe("Testing the user input", ()=>{
    test("Testing the start date", ()=>{
        const startDate = '2021-11-26';
        expect(checkForStartDate(startDate)).toBeTruthy();
    })
})