import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        exclude: ['node_modules', 'tests', 'e2e_tests'],
        coverage: {
            provider: 'istanbul',
        },
    },
})
