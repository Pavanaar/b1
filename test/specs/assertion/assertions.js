const { expect } = require("chai")

//browsermatches
describe("",async()=>{
    it("",async()=>{
        await browser.url("https://www.flipkart.com/")
        //await browser.$('//input[@class="Pke_EE"]').setValue("mobiles")
        let url=await browser.getUrl()
         expect(url). to.be.equal("https://www.flipkart.com/")
        //await expect(browser).toHaveUrl("https://www.flipkart.com/")
        
        let ele=await browser.$('//input[@class="Pke_EE"]')
        //ele.waitForEnabled()
            
        //await expect(ele).toBeEnabled()



    })
})