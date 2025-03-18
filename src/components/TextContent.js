import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';

export function TextContent({header, content, id, className, onRendered}) {
  const [text, setText] = useState("")

  useEffect(() => {
      fetch(content)
        .then(response => response.text())
        .then(text => setText(text))
  },[content]);

 

  return (
    <div className={`textContent ${className}`} id={id}>
      <ReactMarkdown>
          {text}
      </ReactMarkdown>
     
    </div>
  );
}