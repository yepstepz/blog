// https://brid.gy/publish/flickr
// https://brid.gy/publish/github
// https://brid.gy/publish/mastodon
// If your server sends webmentions, just include any of these
// invisible links in your post to publish automatically!

export const BridgyEndpoints = ({ toMastodon, toGithub }) => (
  <>
    {toMastodon ? <a href="https://brid.gy/publish/mastodon"></a> : null}
    {toGithub ? <a href="https://brid.gy/publish/github"></a> : null}
  </>
);
