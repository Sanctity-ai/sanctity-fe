import parse, { domToReact } from 'html-react-parser'
import { Link } from 'react-router-dom'
import './styles.css'
import './styles11.css' // Ensure this line is present to import your CSS file

export function fixInternalLinks(html_string) {
  const pattern = /href="https:\/\/yoursite.com\/\?p=(\d+)"/g
  const replacement = 'data-internal-link="true" href="/blog/$1"'
  return html_string.replace(pattern, replacement)
}

export function parseHtml(html) {
  // Replace 2+ sequences of '\n' with a single '<br />' tag
  const _content = html.replace(/\n{2,}/g, '<br />')
  const content = fixInternalLinks(_content)

  const options = {
    replace: ({ name, attribs, children }) => {
      // Convert internal links to React Router Link components.
      const isInternalLink =
        name === 'a' && attribs['data-internal-link'] === 'true'

      if (isInternalLink) {
        return (
          <Link to={attribs.href} {...attribs}>
            {domToReact(children, options)}
          </Link>
        )
      } else if (name === 'img') {
        attribs['width'] = '450'
        attribs['height'] = '250'
        attribs['className'] = 'center-image' // Add the center-image class
        return <img {...attribs} />
      }
    },
  }

  return parse(content, options)
}
