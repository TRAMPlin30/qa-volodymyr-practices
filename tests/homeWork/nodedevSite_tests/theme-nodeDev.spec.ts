import { test, expect, Locator } from '@playwright/test';
import { baseSetup } from './base-setup';


test('NODE-0002   Switch between dark mode/ light mode / system mode)', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "should perform search correctly"}
    },
    
    async ({ page }) => {

        await baseSetup(page);

        //https://stackoverflow.com/questions/76660122/how-to-use-window-matchmedia-in-react-with-typescript
        //evaluate() используется, чтобы выполнить JavaScript-код прямо в контексте страницы браузера, а не в Node.js где запускается сам тест
        //page.evaluate() = как способ запустить JS в браузере и вернуть результат для работы в тестах уже
        //https://playwright.dev/docs/api/class-page#page-evaluate
        const systemMode: boolean = await page.evaluate(() => {   
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
        });

        // Error: "Windows is not defined" without evaluate()
        //const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        //var isSystemDarkMode: boolean = systemMode.valueOf();
        console.log(systemMode);

        var dataTheme: Locator = page.locator('html');
        var toggleState: Locator = page.locator('button[class="clean-btn toggleButton_gllP"]');
        
        console.log(await toggleState.getAttribute("title"));
        expect(await toggleState.getAttribute("title")).toBe("system mode");
        expect(await dataTheme.getAttribute("data-theme-choice")).toBe("system");
                 
        await toggleState.click();
        console.log(await toggleState.getAttribute("title"));
        expect(await toggleState.getAttribute("title")).toBe("light mode");
        expect(await dataTheme.getAttribute("data-theme-choice")).toBe("light");

        await toggleState.click();
        console.log(await toggleState.getAttribute("title"));
        expect(await toggleState.getAttribute("title")).toBe("dark mode");
        expect(await dataTheme.getAttribute("data-theme-choice")).toBe("dark");
});