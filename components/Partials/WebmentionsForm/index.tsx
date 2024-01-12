import styles from './Webmentions.module.css';

// {
//   "status": "queued",
//   "summary": "Webmention was queued for processing",
//   "location": "https://webmention.io/aaronpk/webmention/hgY_2fI40oBLrAq4zy8V",
//   "source": "https://kek.url",
//   "target": "https://aaronparecki.com/2023/09/23/9/passkeys"
// }

// {
//   "error": "invalid_request",
//   "error_description": "source or target were invalid",
//   "error_details": "missing host"
// }

export const WebmentionsForm = ({ postUrl }) => {
  async function sender(formData) {
    "use server";
    console.log(formData)
    const response = await fetch(process.env.NEXT_PUBLIC_WEBMENTION_ENDPOINT || '', {
      method: 'POST',
      body: formData
    })
      .then((res) => console.log(res))
  }
  return (
    <form action={sender}>
      <div>
        <div className={styles.field}>
          <label>Написали  <a href="https://indieweb.org/responses" target="_blank">ответ?</a> Пришлите URL:</label>
          <input type="url" name="source" className="url" />
        </div>
        <div>
          <button type="submit">Отправить Webmention </button>
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.statusMessage}></div>
      </div>
      <input type="hidden" name="target" value={postUrl} />
    </form>
  )
}
