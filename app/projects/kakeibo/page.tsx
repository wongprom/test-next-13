import Link from 'next/link';

export default function KakeiboPage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--kakeibo-ink)_12%,transparent)] px-5 py-4 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Kakeibo
        </h1>
        <Link
          href="/projects"
          className="text-sm text-[var(--kakeibo-muted)] underline-offset-4 hover:text-[var(--kakeibo-ink)] hover:underline"
        >
          Back to projects
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-5 py-10 sm:px-8">
        <p className="text-lg leading-relaxed text-[var(--kakeibo-muted)] sm:text-xl">
          Household budgeting made clear — plan the month, log spending, then
          review what happened.
        </p>
      </main>
    </div>
  );
}
