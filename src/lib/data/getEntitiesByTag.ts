import {getPosts} from "@/lib/data/getPosts";
import { getPayload } from "payload";
import config from "@payload-config";

export const getEntitiesByTag = async ({ tag }) => {
  const posts = await getPosts();
  const payload = await getPayload({ config });
  const notesDocs = await payload.find({
    collection: 'notes',
    sort: ['-oldDate', '-createdAt'],
    where: {
      'tags.slug': {
        contains: tag
      }
    }
  })

  const notes = notesDocs.docs
  const filteredPosts = posts.reduce((res, curPost) => {
    if (curPost.pureTags.includes(tag)) {
      curPost.type = 'post';
      res.push(curPost)
    }
    return res
  }, []);

  const res = [...notes, ...filteredPosts];

  return res;
}
