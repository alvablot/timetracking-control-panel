import { test, expect } from "@playwright/test";

test("PW test", async ({ page }) => {
    await page.goto("http://127.0.0.1:5173/");
    await expect(page).toHaveTitle(/K2 Petter Karlsson/);
    const firstHeader = page.locator("h1").first();
    await expect(firstHeader).toHaveText("Overview");
    await page.getByText("...").click();
    await page.getByRole("link", { name: "Overview" }).click();

    await page.getByTestId('priceInput').nth(2).click();
    await page.getByRole('img').nth(2).click();

    await page.getByTestId("projectSelect").selectOption("2");
    await page.getByTestId("taskSelect").selectOption("2");

    await page.getByText("30 min").first().click();

    await page.getByTestId("Add Invoice").click();
    await page.getByTestId("Add Invoice").fill("Test invoice2");
    await page.getByRole("checkbox").check();
    await page.getByTestId("Save Invoice").click();

    await page.getByTestId("Test invoice2").first().click();
    await page.getByTestId('projectDeleteButton').nth(3).click();
});
