import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';


export function cn(...inputs: ClassValue[]) {
    console.log(inputs);
    console.log(clsx(inputs));
    console.log(twMerge(clsx(inputs)));
    return twMerge(clsx(inputs));
}