import React from 'react'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './preview.css'
import 'github-markdown-css/github-markdown.css'
import ReactMarkdown from 'react-markdown'
import CopyBtn from './copy-btn'


interface Props {
  doc: string
}

const Preview: React.FC<Props> = (props) => {
  const Pre = ({ children }) => <pre>
    <CopyBtn>{children}</CopyBtn>
    {children}
  </pre>

  return <div className='preview markdown-body'>
    <ReactMarkdown
      children={props.doc}
      remarkPlugins={[remarkGfm]}
      components={{
        pre: Pre,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={prism}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    />
  </div>
}

export default Preview
