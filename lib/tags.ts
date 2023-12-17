import { getAllItems } from './utils';

const entities = ['posts', 'notes'];

export function collectAllTags() {
  let allTags = new Set();

  for (let i = 0; i < entities.length; i++) {
    const entityType = entities[i];

    getAllItems(['tags'], entityType).map((file) => {
      const tags = new Set([...(file.tags || [])]);
      allTags = new Set([...allTags, ...tags]);
    });
  }

  return allTags;
}
