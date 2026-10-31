import Link from 'next/link';

const STEPS = [
  {
    title: 'Plan month',
    body: 'Set income and category budgets in Kr before the month begins.',
  },
  {
    title: 'Log spending',
    body: 'Capture daily expenses against your plan as they happen.',
  },
  {
    title: 'Review',
    body: 'See what stayed on track and adjust the next month.',
  },
] as const;

export default function KakeiboPage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--kakeibo-ink)_12%,transparent)] px-5 py-4 sm:px-8">
        <div>
          <p className="text-xs tracking-[0.18em] uppercase text-[var(--kakeibo-muted)]">
            Budgeting
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Kakeibo
          </h1>
        </div>
        <Link
          href="/projects"
          className="text-sm text-[var(--kakeibo-muted)] underline-offset-4 hover:text-[var(--kakeibo-ink)] hover:underline"
        >
          Back to projects
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-10 px-5 py-10 sm:px-8">
        <div className="space-y-3">
          <p className="text-lg text-[var(--kakeibo-muted)] sm:text-xl">
            Full-screen stub for the v1 loop. Currency defaults to Swedish krona
            (Kr). The browser talks only to Next.js BFF routes — never the C#
            GraphQL API directly.
          </p>
          <p className="text-sm text-[var(--kakeibo-muted)]">
            BFF health:{' '}
            <code className="rounded bg-[var(--kakeibo-mist)] px-1.5 py-0.5 text-[var(--kakeibo-ink)]">
              POST /api/kakeibo/graphql
            </code>
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="space-y-2">
              <p className="text-xs font-medium tracking-wide text-[var(--kakeibo-leaf)]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="text-sm leading-relaxed text-[var(--kakeibo-muted)]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
