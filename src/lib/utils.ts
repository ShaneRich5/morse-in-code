import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { MAP_OF_LETTER_TO_MORSE_CODE } from "./constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertTextToMorseCode = (text: string) => text
    .toLowerCase()
    .split('')
    .map((letter) => MAP_OF_LETTER_TO_MORSE_CODE[letter] || letter)
    .join(' ')