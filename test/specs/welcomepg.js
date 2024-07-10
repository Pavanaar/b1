
import welcome from "../pageobjects/welcomepage.js";
describe("login test",()=>{
    it("amazon logintest",async()=>{
        // await welcome.amazonurl
        // await welcome.welcomepageapllication("phones")
        // await welcome.sdropdown.map(ele=>console.log(ele.getText()))
        await welcome.welcomepageapllication()
        
        
    })
})