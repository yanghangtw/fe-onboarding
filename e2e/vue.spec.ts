import { test, expect } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro
test("visits the app root url", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("div.greetings > h1")).toHaveText("You did it!");
});

test("visits the about page", async ({ page }) => {
    const address: string = process.env.VITE_ABOUT_SERVER_ADDRESS ?? "";
    await page.route(`${address}/about`, route => {
        const json = {
            body: "About from playwright"
        };
        route.fulfill({ json });
    });

    await page.goto("/about");
    await expect(page.locator("div.about > h1")).toHaveText(
        "About from playwright"
    );
});
