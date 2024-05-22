import './style/main.scss'
import { factory } from './factory'

// Type definitions
type CountFunction = () => number
type InputValues = {
    startAt: number
    step: number
}

// Initial state
let counter: number = 0
let count: CountFunction
const inputValues: InputValues = {
    startAt: 0,
    step: 1,
}

// DOM elements
let currentCountElement: HTMLSpanElement | null = null

// Initialize DOM elements
function initDOMElements(): void {
    currentCountElement = document.querySelector(
        '.current_count'
    ) as HTMLSpanElement
}

// Update current count text in the DOM
function updateCurrentCountText(value: string): void {
    if (!currentCountElement) {
        initDOMElements()
    }

    if (currentCountElement?.textContent !== value) {
        currentCountElement!.textContent = value
    }
}

// Counter management
function updateCount(): void {
    counter = count()
    updateCurrentCountText(counter.toString())
}

function resetCounter(): void {
    count = factory(inputValues.startAt, inputValues.step)
    counter = inputValues.startAt
    updateCurrentCountText(counter.toString())
}

// Event handling
function handleInputChange(event: Event, type: keyof InputValues): void {
    const target = event.target as HTMLInputElement
    inputValues[type] = Number(target.value)
    resetCounter()
}

// Attach event listeners
function attachEventListeners(): void {
    const startAtControl = document.getElementById(
        'start_at'
    ) as HTMLInputElement
    const stepControl = document.getElementById('step') as HTMLInputElement
    const countButton = document.querySelector(
        '.count_button'
    ) as HTMLButtonElement

    startAtControl?.addEventListener('change', (event) =>
        handleInputChange(event, 'startAt')
    )
    stepControl?.addEventListener('change', (event) =>
        handleInputChange(event, 'step')
    )
    countButton?.addEventListener('click', updateCount)
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    resetCounter()
    attachEventListeners()
})
