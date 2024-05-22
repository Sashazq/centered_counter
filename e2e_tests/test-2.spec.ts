import { test, expect } from '@playwright/test'

test('should update counter value to 1 after click on button', async ({
    page,
}) => {
    await page.goto('/')

    await expect(page.getByRole('button')).toHaveText('0')

    await page.getByRole('button').click()

    await expect(page.getByRole('button')).toHaveText('1')
})

test('should reset counter value after startAt or Step change ', async ({
    page,
}) => {
    await page.goto('/')

    const startAtInput = page.getByLabel('Start at')
    const counterButton = page.getByRole('button')
    const stepInput = page.getByLabel('Step')

    // initial counter value
    await expect(counterButton).toHaveText('0')

    await counterButton.click()
    // after 1 click on counter button
    await expect(counterButton).toHaveText('1')

    // change startAt input value , should reset counter
    await startAtInput.click()
    await startAtInput.fill('5')
    await startAtInput.press('Enter')
    // startAt=5, step=1, so counter should be equal to 5
    await expect(counterButton).toHaveText('5')

    // startAt=5, step=1, so click on counter should set value to 6
    await counterButton.click()
    await expect(counterButton).toHaveText('6')

    // startAt=5, step=3, so counter should be equal to 5
    await stepInput.focus()
    await stepInput.fill('3')
    await stepInput.press('Enter')
    await expect(counterButton).toHaveText('5')

    await counterButton.click()
    // startAt=5, step=3, so click on counter should set value to 6
    await expect(counterButton).toHaveText('8')
})
