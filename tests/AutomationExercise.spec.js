import {test , expect } from "@playwright/test"

import { LoginPage } from "../Pages/Login"

import { FromFillupPage } from "../Pages/FromFillup"

test("test" , async ({page}) =>{

    const lp = new LoginPage(page)
    const ffp = new FromFillupPage(page)

    await lp.openUrl("https://www.automationexercise.com/")

    const randomNumber = Math.floor(Math.random() * 100000); // e.g., 45721
    const email = `sumon${randomNumber}@mail.com`;

    await lp.signUp("Sumon", email)

    const visibleText = page.locator("//b[normalize-space()='Enter Account Information']")
    await expect(visibleText).toHaveText("Enter Account Information")
    console.log("The visible text is :" + await visibleText.textContent())

    await ffp.setAccountInfo()
})