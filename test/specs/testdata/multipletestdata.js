import lgadddata from "../../pageobjects/lgadddata.js"
import fs from "fs"
let f=fs.readFileSync("./test/TESTDATA/adddata.json")
let cred=JSON.parse(f)
describe("multiple parameter",()=>{
    
    cred.forEach(element => {
        let u=element.usn
        let p=element.pwd

    it("multiple data",async()=>{
        await browser.url("https://practicetestautomation.com/practice-test-login/")
        await lgadddata.login(u,p)
        await browser.pause(3000)
    })
});
})