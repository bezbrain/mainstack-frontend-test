import "@testing-library/jest-dom";

declare const global: any;

// Import ResizeObserver from the polyfill package
import { ResizeObserver } from "@juggle/resize-observer";

// Before rendering your components, mock ResizeObserver globally
global.ResizeObserver = ResizeObserver;
