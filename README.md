# Discover the Secrets of _test-next-13_

Welcome to the world of Test Next.js 13, where innovation is in progress! 🚀

Ever wondered what goes on behind the scenes of this exciting project? Dive deep into the mysteries by exploring our meticulous roadmap and accomplishments.

🔍 Intrigued? Uncover the details here: [Project Roadmap and Achievements](https://github.com/wongprom/test-next-13/issues)

Get ready to embark on a journey of web development like no other. Your curiosity is your guide.

## Environment

node - `18.11.0`<p>
next - `13.3.0` <sub>_(app/dir)_</sub><p>
react - `18.2.0`<p>
[package.json](https://github.com/wongprom/test-next-13/blob/main/package.json)

## Create issues from template

- [bug_report.md](https://github.com/wongprom/test-next-13/blob/main/.github/ISSUE_TEMPLATE/bug_report.md)
- [feature_request.md](https://github.com/wongprom/test-next-13/blob/main/.github/ISSUE_TEMPLATE/feature_request.md)
- [idea_request.md](https://github.com/wongprom/test-next-13/blob/main/.github/ISSUE_TEMPLATE/idea_request.md)

## How I worked and thoughts with issues

<details><summary>[FEATURE] add content #38</summary>

<sub><sup>[[FEATURE] add content #38](https://github.com/wongprom/test-next-13/issues/38)</sup></sub>

### The Hilariously Unpredictable Image Monk Gallery

- Inspired by the delightful chaos of the [Masonry Grid](https://masonry.desandro.com/), and a dash of monkey business!

### Elevating the Interactive Image Gallery Game

- I wanted image gallery to be a bit more lively than 'Monk' gallery. That's why text magically appears when you hover over the images!

</details>

<details><summary>[BUG] active link style #35</summary>

<sub><sup>[[BUG] active link style #35](https://github.com/wongprom/test-next-13/issues/35)</sup></sub>

### The Fantastic Journey to Cleaner Code! 🧹

- Behold the creation of a superhero component that parent components can now effortlessly map out! Adding new links and routes? Piece of cake! 🍰

### Sprucing Up with Style! 💃

- When it comes to those delightful sublinks emerging from `/about`, we're giving the page a makeover that's cleaner than a freshly laundered superhero cape. What does that mean? We're keeping it as simple as a sidekick's sidekick until we've decided on our grand style and layout reveal! Stay tuned for the fashion show!
</details>

<p>
<p>

## Supabase

<details><summary>How to Update schema.prisma</summary>

After making changes/update schema.prisma
ex,

```prisma
model Quote {
  id        String   @id @default(uuid())
  title     String
  image     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  owner     Owner[]
}

model Owner {
  id           String      @id @default(uuid())
  name         String
  Quote        Quote?      @relation(fields: [quoteId], references: [id])
  quoteId      String?
  LifeLesson   LifeLesson? @relation(fields: [lifeLessonId], references: [id])
  lifeLessonId String?
}
```

type in terminal and push to supabase to sync new schema

```bash
npx prisma db push
```

DONE! 👍

</details>
<details><summary>How to Create PrismaClient</summary>

<sub><sup>[https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices)</sup></sub>

Add below snippet in file `/app/prisma/db.ts` file

```js
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
```

</details>

## Apollo Server

<details><summary>How to install Apollo Server</summary>

<sub><sup>[https://www.apollographql.com/docs/apollo-server/getting-started](https://www.apollographql.com/docs/apollo-server/getting-started)</sup></sub>

```js
npm install @apollo/server graphql
```

</details>
<details><summary>How to integrate Apollo Server with App Router</summary>

<sub><sup>[https://github.com/apollo-server-integrations/apollo-server-integration-next](https://github.com/apollo-server-integrations/apollo-server-integration-next)</sup></sub>

Add below snippet in `app/api/graphql/route.ts` file.<p>

```js
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
// import { gql } from 'graphql-tag';

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
```

install missing dependencies

```
npm i @as-integrations/next
```

You can access server on `localhost:3000/api/graphql`

</details>
