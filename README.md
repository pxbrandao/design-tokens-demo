# Design Tokens Demo

A demo application showcasing the use of **design tokens** in a modern React + Next.js setup.  
This project demonstrates how to define, build, and consume design tokens in both **CSS and JavaScript**, including dark-mode support, reusable components, and theming.

## Overview

This repository highlights a workflow for **design token management** using [Style Dictionary](https://amzn.github.io/style-dictionary/#/).  
It includes:  

- A global token system for colors, spacing, radii, and typography  
- Automatic dark-mode token generation  
- Export to CSS variables and JS modules  
- Integration with Tailwind CSS, Shadcn/ui, and Radix UI components  
- Component-driven development via Storybook  

## Stack

- **Frameworks & Libraries:** [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [tailwind-merge](https://tailwind-merge.vercel.app/), [tailwindcss-animate](https://tailwindcss.com/docs/animation)  
- **Tokens & Theming:** [Style Dictionary](https://amzn.github.io/style-dictionary/#/), [Next Themes](https://github.com/pacocoursey/next-themes)  
- **Icons:** [Lucide React](https://lucide.dev/)  
- **Storybook:** [Storybook](https://storybook.js.org/) with addons for docs, accessibility, and testing  

## Features

- Fully themable UI using **design tokens**  
- Dark-mode token generation and CSS variable output  
- JavaScript token exports for programmatic use  
- Responsive and reusable components  
- Component exploration with Storybook  
- ESLint + TypeScript for code quality  

## Automation

A [GitHub Action](https://github.com/pxbrandao/design-tokens-demo/actions/workflows/build-tokens.yml) automatically builds CSS and JS tokens whenever commits update the Figma token source.  
This ensures the latest design system values are always reflected in the repository.
