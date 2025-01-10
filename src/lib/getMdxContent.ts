import fs from "fs";
import { join } from "path";
import matter from 'gray-matter';
import {compileMDX} from "next-mdx-remote/rsc";
import {mdxComponents} from "@/mdx-components";
import remarkGfm from "remark-gfm";

export function getMdxContent(path) {
  const filePath = join(process.cwd(), path);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Use gray-matter to parse the frontmatter and content
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data,
    content,
  };
}

export async function getParsedMdxContent (path, options = {}) {
  const { content: rawContent, frontmatter } = getMdxContent(path);
  const { content} = await compileMDX({
    source: rawContent,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm], // Specify Remark plugins here
      },
      ...options
    }})

  return {
    content,
    frontmatter
  }
}
