# [iroiro-connect.com](https://iroiro-connect.com/)

This is a [Next.js](https://nextjs.org/) project with its content localized using both [next-translate](https://github.com/aralroca/next-translate) strings and Components switched according to the active language.

The UI components are [chakra](https://chakra-ui.com/), and the contact form uses a Next.js API route that speaks to the Airtable API using [airtable.js](https://github.com/airtable/airtable.js). Be sure to fill your `env.local` according to `.env.sample`, and feel free to copy this [sample table](https://airtable.com/shrkXQYdPx4dnUm1d) to your own workspace.

## Getting Started

First, install all dependencies. We recommend using `yarn` for this project:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your fork os this project is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
