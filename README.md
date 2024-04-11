# [Mainstack Frontend Test](https://mainstack-frontend-test.netlify.app/revenue)

### You may click the heading above to visit the application

## Getting Started

To start working on the project, follow these steps:

1. Fork repository to your local GitHub account.
2. Clone the forked repository to your local development environment.
3. Install the required dependencies by running `npm install` in the project directory.
4. Open the project in your preferred code editor.
5. Review the existing code in the src directory to understand the initial structure and components hierarchy.
6. Run the application using `npm run dev`
7. Run test using `npm test`

## Project Overview

In this project (the revenue dashboard), the following features where implemented:

- Dynamic api call of all transactions
- Profile dropdown (with toggle effect)
- Navigation to revenue dashboard
- Interactive hover effects
- Modal effect when the filter toggles
- Filter by date (today, last 7 days, this month and last 3 months)
- Filter by date range
- Filter by transaction type
- Filter by transaction status
- Clear filter
- Fully responseive revenue dashboard
- Others

## Major Libraries Used

The following are major libraries used:

1. axios: for http methods and api calls
2. @reduxjs/toolkit: for state management
3. qrcode.react - for generation QR codes
4. react-date-picker - for handling date and date range
5. react-intersection-observer - for animations
6. react-icons - for getting all icons in the project
7. recharts - for handling the chart
8. vitest - for writing test
9. @testing-library/react - to use screen, render etc methods
10. @testing-library/jest-dom - to use Jest testing properties
11. react-loading-skeleton - for the skeleton loading state
12. react-toastify - for displaying success or error messages
13. styled-components - styling library to complement tailwind css

To install any of these librabries, just run: `npm install <library name>` eg. To install gsap: `npm install axios`

## Project Goals

The major goals of this project are:

- To implement core features and display my ability to pay attention to details.
- To write basic unit test.

## Resources

Here are some resources that may be helpful during your work on this project:

- [Vite Documentation](https://vitejs.dev/) - Official documentation for Vite, providing guides on how to install Vite application.

- [React Documentation](https://create-react-app.dev/) - Official documentation for React, providing detailed information on React concepts and usage.

- [Rechart Documentation](https://recharts.org/en-US/guide/getting-started) - Official documentation for Rechart, providing detailed information on development of the chart.

- [Date Picker Documentation](https://www.npmjs.com/package/react-date-picker?activeTab=readme) - Official npm readme page for Date Picker, providing detailed information on date usage.
