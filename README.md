
# Next.js Project with Tailwind, shadcn, and IndexedDB
![](https://i.imgur.com/oALB4wX.gif)


This project is a Next.js application that uses Tailwind CSS and shadcn for UI components, IndexedDB for client-side data storage, and includes features like context menu disabling and text copy prevention.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) (via [idb](https://www.npmjs.com/package/idb) package)
- [Bun](https://bun.sh/) as the JavaScript runtime and package manager

## Features

- Modern UI built with Tailwind CSS and shadcn components
- Client-side data storage using IndexedDB
- Context menu disabling
- Text copying prevention
- Data encryption (work in progress)

## Prerequisites

- [Bun](https://bun.sh/) installed on your machine

## Getting Started

1. Clone the repository:
     ```sh
   git clone https://github.com/bouydia/youness-hiring-test
   cd your-project-name
    ```

2. Install dependencies:
     ```sh
   bun install
    ```

3. Run the development server:
     ```sh
   bun run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## IndexedDB Usage

This project uses the \`idb\` package to interact with IndexedDB. You can find the database operations in \`lib/dbConfig.ts\`.

## Security Features

### Context Menu Disabling

A script is included to disable the context menu, preventing users from accessing right-click options.

### Text Copying Prevention

The application includes measures to prevent text selection and copying.

### Data Encryption

There's an ongoing effort to implement data encryption before saving to IndexedDB. Currently, this feature works locally but encounters issues in deployment environments. Further investigation and fixes are needed.

