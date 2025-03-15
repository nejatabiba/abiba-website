import React from 'react';

export function TextContent({header, content, id, className}) {
  return (
    <div className={`textContent ${className}`} id={id}>
      <h1>{header}</h1>
      {content}
    </div>
  );
}