# [Mainstack Frontend Test](https://mainstack-frontend-test.netlify.app/)

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
- URL shortening
- URL customization
- QR Code generator for shortened or customized URLs
- Analytics of shortened and customized URLs performance
- Application demo

## Major Libraries Used

There are many librabries used for the projects and the ones that might look obscure to you and what they do are:

1. firebase - for handling pages' analytics and urls performance
2. gsap - for basic animations
3. qrcode.react - for generation QR codes
4. react-copy-to-clipboard - to copy URL shortened or customized from the input field
5. react-intersection-observer - for animations
6. react-toastify - for pop up notification
7. recharts - for handling all charts
8. vitest - for writing test
9. @testing-library/react - to use screen, render etc methods
10. @testing-library/jest-dom - to use Jest testing properties

To install any of these librabries, just run: `npm install <library name>` eg. To install gsap: `npm install gsap`

## Project Goals

1. Implement the URL manipulation functionalities:

- Implement user authentication:
  - The user should be able to register with username, email and password
  - The user should be able to login with username/email and password
  - The user should be able to logout

2. Implement URL manipulators:

- URL shortening
- URL customizing
- QR code generator for URL shortened or customized

3. Demo application: While in demo mode, user should be to:

   - generate short url
   - customize url
   - view short and custom urls

4. Ensure code quality:

   - Write clean, well-structured, and maintainable codes; one of the ways which is, maintaining modular programming.
   - Follow best practices and adhere to the React + Vite + Typescript coding conventions.
   - Pay attention to performance.

5. Code documentation:

   - Document your code by adding comments and explanatory notes where necessary.

6. Use version control:

   - Use `Git` for version control. Commit you changes when important changes are made and push them to a branch in your forked repository.

7. Create a PR:
   - Once you have completed the project goals, create a pull request to merge your changes into the main repository.
   - While at this, provide a clear description of the changes made and any relevent information for the code review.

## Resources

Here are some resources that may be helpful during your work on this project:

- [Vite Documentation](https://vitejs.dev/) - Official documentation for Vite, providing guides on how to install Vite application.

- [React Documentation](https://create-react-app.dev/) - Official documentation for React, providing detailed information on React concepts and usage.
