import { getCollection } from 'astro:content';
export async function getPosts(category?: string) {
  const all = await getCollection('posts', ({ data }) => !data.draft);
  return all
    .filter((p) => !category || p.data.category === category)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
