import NowContent from '@/mdx-landings/now.mdx';
import {getMdxContent, getParsedMdxContent} from "@/lib/getMdxContent";
import {HCard} from "@components/Partials/microformats/h-card";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/getMetadata";

export default async function Now() {
  const { content, frontmatter} = await getParsedMdxContent('src/mdx-landings/now.mdx');
  const { date } = frontmatter;
  return (
    <div className="page__content block-article inner--sm h-entry">
      <HCard isAuthor={true} visible={false}/>
      <h1 className="p-name">Что я делаю сейчас?</h1>
      <i>
        Последний раз обновлено:{' '}
        <time className="dt-published" dateTime={date}>
          {date}
        </time>
      </i>
      <div className="e-content">
        { content }
      </div>
    </div>
  )
}

export const generateMetadata = async ({ params }): Promise<Metadata> => getMetadata({
  title: 'Now.sh',
  description: 'Что я делаю сейчас?'
})
