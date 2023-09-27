import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  title: 'testing-1',
  apiVersion: '2023-09-13',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});
export default config;
