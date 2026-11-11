import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'prisma/generated/**',
      'public/pdf.worker.min.mjs',
    ],
  },
  ...compat.extends('next/core-web-vitals'),
];

export default eslintConfig;
