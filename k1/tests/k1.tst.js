import { test, expect } from "@playwright/test";
let i = 1;
test("test", async ({ page }) => {
    await page.goto("http://127.0.0.1:5173/");
    await expect(page).toHaveTitle(/K1 Petter Karlsson/);
    //Overview
    const firstHeader = page.locator("h1").first();
    await expect(firstHeader).toHaveText("Overview");
    const secondHeader = page.locator("h2").first();
    await expect(secondHeader).toHaveText("Projects");

    await page.getByRole("button", { name: "Create new project" }).click();
    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("Name");
    await page.locator(".color-cube").first().click();
    await page.locator("div:nth-child(6)").first().click();
    await page.locator("div:nth-child(7)").first().click();
    await page.locator("div:nth-child(8)").first().click();
    await page.locator("div:nth-child(9)").first().click();
    await page.locator("div:nth-child(10)").first().click();
    await page.locator("div:nth-child(11)").first().click();
    await page.getByRole("button", { name: "Add project" }).click();
    await page.getByRole("button", { name: "Abort" }).click();

    await page.getByRole("button", { name: "New task" }).first().click();
    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("Test title");
    await page.getByRole("button", { name: "Add task" }).click();
    await page.getByRole("button", { name: "Abort" }).click();
    await page.getByRole("button", { name: "Tasks" }).click();

    //Timer
    await page.getByRole("link", { name: "timer" }).click();
    const thirdHeader = page.locator("h1").first();
    await expect(thirdHeader).toHaveText("Timer");
    await page.getByRole("button", { name: "Pizza" }).click();
    await page.getByRole("button", { name: "Start" }).click();
    await page.getByRole("button", { name: "Stop" }).click();
    await page.getByRole("button", { name: "Reset" }).click();
    await page.getByRole("button", { name: "Start" }).click();
    await page.getByRole("button", { name: "Stop" }).click();
    //Calender
    await page.getByRole("link", { name: "calender" }).click();
    await page.getByRole("textbox").fill("2022-11-23");
    // await page.getByRole("button", { name: "x" }).nth(0).click();

    // Delete
    // await page.getByRole("link", { name: "overview" }).click();
    // await page.getByRole("button", { name: "Tasks" }).click();
    // await page.locator(".visible > div:nth-child(8) > button").click();
    // await page.getByRole("button", { name: "Projects" }).click();
    // await page.locator("div:nth-child(7) > button").first().click();
});
