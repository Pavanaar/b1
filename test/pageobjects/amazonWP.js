class amazonWP{
    get welcm(){
        return browser.url("https://www.amazon.in/")
    }
    get searchtextfield(){
        return $("//input[@id='twotabsearchtextbox']")}
    


    async well(search){
        await this.searchtextfield(search)
    }
}
export default new amazonWP