exports.AddToCartPage = class AddToCart{
    constructor (page){
        this.page = page

        this.viewProduct = page.locator("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]")
        this.productQuantity = page.locator('//*[@id="quantity"]')
        this.addToCrtBtn = page.locator("//button[normalize-space()='Add to cart']")
        this.continueShopingBtn = page.locator("//button[normalize-space()='Continue Shopping']")
    }

    async adddToCartProduct(){
        await this.viewProduct.click()
        await this.page.waitForTimeout(1000); 

       
        // await this.productQuantity.fill("5")
        // await this.page.waitForTimeout(1000); 

        await this.addToCrtBtn.click()
        await this.page.waitForTimeout(1000); 

        await this.continueShopingBtn.click()
        await this.page.waitForTimeout(1000); 
    }
}