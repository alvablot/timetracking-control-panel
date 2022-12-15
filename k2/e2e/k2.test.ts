import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("http://127.0.0.1:5173/");
    await page.getByText("...").click();
    await page.getByRole("link", { name: "Overview" }).click();
    await page.getByRole("combobox").first().selectOption("1");
    await page.getByRole("combobox").nth(1).selectOption("1");
});
