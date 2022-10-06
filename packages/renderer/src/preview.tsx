import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import RemarkCode from './remark-code'
import { defaultSchema } from 'hast-util-sanitize'
import './preview.css'
import 'github-markdown-css/github-markdown.css'

interface Props {
  doc: string
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className']
  }
}

const Preview: React.FC<Props> = (props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact,
      { createElement: React.createElement, components: { code: RemarkCode } }
    )
    //    .use(remarkReact, {
    //      createElement: React.createElement,
    //      sanitize: schema,
    //      remarkReactComponents: {
    //        code: RemarkCode
    //      }
    //    })
    .processSync(props.doc).result
  return <div className='preview markdown-body'>{md}</div>
}

export default Preview
