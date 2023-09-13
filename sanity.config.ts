import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  title: 'test-1',
  apiVersion: '2023-09-13',
  basePath: '/about/certificates/admin',
  plugins: [deskTool()],
});
export default config;
