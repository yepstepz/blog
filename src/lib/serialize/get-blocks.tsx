import { CodeBlock } from '@components/CodeBlock'

export const getBlocks = ({ blockType, ...rest }) => {
  switch (blockType) {
    case 'code':
      return <CodeBlock index={rest.id} language={rest.language} content={rest.code} />

    case 'image':
      return (
        <figure>
          <img src={rest.link} alt={rest.alt} width="100%" height="auto" />
          { rest.caption && <figcaption className="img__caption">{rest.caption}</figcaption> }
        </figure>
      )

    default:
      return null
  }
}
