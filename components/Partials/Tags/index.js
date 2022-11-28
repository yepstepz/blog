import { colors } from "theme/colors"

export default function Tags ({ tags }) {
  return (
    <ul className="tags">
      {
        tags?.map((tag) => (
          <li className={`tags__item tag tag--${colors[tag]}`}><a href={`/tags/${tag}`}>#{tag}</a></li>
        ))
      }
    </ul>
  )
}