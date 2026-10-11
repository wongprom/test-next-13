# Discover the Secrets of _test-next-13_

Welcome to the world of Test Next.js 13, where innovation is in progress! 🚀

Ever wondered what goes on behind the scenes of this exciting project? Dive deep into the mysteries by exploring our meticulous roadmap and accomplishments.

🔍 Intrigued? Uncover the details here: [Project Roadmap and Achievements](https://github.com/wongprom/test-next-13/issues)

Get ready to embark on a journey of web development like no other. Your curiosity is your guide.

## Environment

node - `24.x` <sub>_(see `.nvmrc` and `package.json` engines)_</sub><p>
next - `15.5.x` <sub>_(app/dir)_</sub><p>
react - `19.x`<p>
typescript - `5.9.x`<p>
prisma - `7.x`<p>
sanity - `4.x`<p>
[package.json](https://github.com/wongprom/test-next-13/blob/main/package.json)

## Create issues from template

- [bug_report.md](https://github.com/wongprom/test-next-13/blob/main/.github/ISSUE_TEMPLATE/bug_report.md)
- [feature_request.md](https://github.com/wongprom/test-next-13/blob/main/.github/ISSUE_TEMPLATE/feature_request.md)
- [idea_request.md](https://github.com/wongprom/test-next-13/blob/main/.github/ISSUE_TEMPLATE/idea_request.md)

## Git workflow & Vercel

This project uses a **staging branch** (`dev`) and a **production branch** (`main`). Feature work happens on short-lived branches, is tested on Vercel preview URLs, then lands in `dev` before production.

| Branch | Role | Deploys to |
| :--- | :--- | :--- |
| `main` | Production | [jimmybackstrom.com](https://jimmybackstrom.com) |
| `dev` | Staging / integration | Vercel preview (`test-next-13-git-dev-…vercel.app`) |
| `feature/…` | One piece of work | Vercel preview per branch |

<details><summary>How GitHub and Vercel connect</summary>

Vercel is linked to this **GitHub repo**, not your laptop. Deployments start when GitHub receives new commits.

| Action | Vercel deploy? |
| :--- | :--- |
| Work on a **local** branch only (not pushed) | No |
| **`git push`** any branch to GitHub | Yes — preview build |
| Open or update a **pull request** | Yes — preview (same branch, often linked in PR checks) |
| Merge or push to **`main`** | Yes — **production** build |

**Do all pushed branches get a preview URL?**

Yes. For this project, **every push to any branch on GitHub** triggers a preview deployment. You do not need to open a PR first — `git push` alone is enough. PRs mainly add the GitHub UI (Checks tab, Vercel bot comment with a “Visit Preview” link).

**Two kinds of URLs**

1. **Deployment URL** — unique per build, e.g. `test-next-13-84metv921-wongproms-projects.vercel.app`. Tied to one commit.
2. **Branch alias** — stable for that branch, e.g. `test-next-13-git-<branch-name>-wongproms-projects.vercel.app`. Always points at the **latest** successful deploy on that branch. Use this in PR descriptions.

**Production vs preview**

```text
Push to feature branch  →  Preview deployment  →  *.vercel.app URL
Push / merge to main    →  Production deploy   →  jimmybackstrom.com
```

Vercel treats **`main`** as the production branch. All other branches are previews only.

**What does not deploy**

- Uncommitted local changes
- Commits that are never pushed to GitHub
- Failed builds (check the [Vercel dashboard](https://vercel.com/wongproms-projects/test-next-13) or GitHub Checks for errors)

**Where to find preview links**

- [Vercel → test-next-13 → Deployments](https://vercel.com/wongproms-projects/test-next-13)
- GitHub PR → **Checks** tab (when a PR exists)

</details>

<details><summary>One-time setup: create the dev branch</summary>

Run once to add a staging branch that tracks `main`:

```bash
git checkout main
git pull origin main
git checkout -b dev
git push -u origin dev
```

After this, `dev` and `main` start at the same commit. Keep them in sync whenever you merge directly to `main` (see sync step below).

</details>

<details><summary>Feature workflow (correct order)</summary>

**1. Start from an up-to-date `dev`**

```bash
git checkout dev
git pull origin dev
git checkout -b my-feature-branch
```

**2. Develop and commit locally**

```bash
git add .
git commit -m "feat: describe the change"
```

**3. Push the branch → Vercel builds a preview**

```bash
git push -u origin my-feature-branch
```

**4. Test on the Vercel preview** (see next section)

**5. Open a pull request on GitHub**

- **Base:** `dev` (not `main`)
- **Compare:** `my-feature-branch`
- Add the preview URL in the PR description (Review App column or a link to the changed page)

**6. Merge the PR into `dev`**

**7. Promote to production**

When `dev` is ready to ship:

```bash
git checkout main
git pull origin main
git merge dev
git push origin main
```

Or open a PR: **`dev` → `main`**.

**8. Clean up**

```bash
git branch -d my-feature-branch
git push origin --delete my-feature-branch
```

**If you merged to `main` by mistake**, sync `dev` so branches stay aligned:

```bash
git checkout dev
git pull origin main
git push origin dev
```

</details>

<details><summary>How to test on Vercel</summary>

See **How GitHub and Vercel connect** above for when previews are created and which URL to use.

After `git push`:

1. Open the branch alias or deployment in the [Vercel dashboard](https://vercel.com/wongproms-projects/test-next-13), or use the GitHub PR **Checks** tab.
2. Test the page you changed, e.g. `/about/adept` on `https://test-next-13-git-<branch-name>-wongproms-projects.vercel.app`

**Local testing (optional, before push)**

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production check (after merge to `main`)**

Visit the live site on [jimmybackstrom.com](https://jimmybackstrom.com) and confirm the same behaviour you saw on the preview.

</details>

<details><summary>Example: accordion refactor (PR #56)</summary>

Branch: `refactor-adept-accordion-shadcn`

1. Created branch from `dev`
2. Committed shadcn accordion migration, border fix, and English translations
3. Pushed → preview: `…/about/adept`
4. Opened PR → merged to `main`
5. Synced `dev`: `git pull origin main` + `git push origin dev`
6. Deleted the feature branch

For future work, prefer **PR base `dev`**, then **`dev` → `main`** for production.

</details>

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
