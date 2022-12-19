import { test, expect } from "@playwright/test";
const baseURL = "http://localhost:3000";

test("PW test", async ({ page }) => {
    await page.route(`${baseURL}/projects`, async (route) => {
        const json = {
            testProjects: [
                {
                    name: "Test project",
                    color: "#e3da3b",
                    id: 1,
                    price: 200,
                },
            ],
        };
        await route.fulfill({ json });
    });
    // await page.route(`${baseURL}/tasks`, async (route) => {
    //     const json = {
    //         testTasks: [
    //             {
    //                 date: "2022-10-20",
    //                 projectId: 1,
    //                 title: "test task",
    //                 start: 0,
    //                 end: 0,
    //                 timeElapsed: 0,
    //                 active: false,
    //                 id: 1,
    //             },
    //         ],
    //     };
    //     await route.fulfill({ json });
    // });

    await page.goto("http://127.0.0.1:5173/");
    await expect(page).toHaveTitle(/K2 Petter Karlsson/);
    const firstHeader = page.locator("h1").first();
    await expect(firstHeader).toHaveText("Overview");
});
