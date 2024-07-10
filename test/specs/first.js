describe("flipkart",async()=>{
    it("search",async()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.pause(4000)
        //await browser.$("//input[@class='Pke_EE']").setValue("mobiles")
        let a=await browser.$("//input[@class='Pke_EE']")
        console.log(typeof(a));
        
       
    })
})

//async
//await


