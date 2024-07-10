import lgadddata from "../../pageobjects/lgadddata.js"
//fs-filesystem : inbuilt liberary to fetch json file
import fs from "fs"
//readfileSync is method from fs to fetch data from json file
let data=fs.readFileSync("./test/TESTDATA/adddata.json")
//now data is in json format but we need to pass it as js-object so we use .parse()
let credentials=JSON.parse(data)


describe("data driven example",()=>{
    //feting from json file
    let un=credentials.usn
    let pw=credentials.pwd
    it("login to application",async()=>{
        await browser.url("https://practicetestautomation.com/practice-test-login/")
        await lgadddata.login(un,pw)

    })
})