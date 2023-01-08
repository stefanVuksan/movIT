import React from 'react'

const RotatingText = ({title, words}:{words:string[],title:string}) => {
    const toSpan = (word:string) => `<span class="word w-1"> ${word}.</span>`;
    function createMarkup() {
        return {
            __html: words?.map(toSpan)?.join('')
        };
    }

  return (
      <div data-text-rotating className="text-rotating text-center">
        <h2> {title} </h2>
        <h2 dangerouslySetInnerHTML={createMarkup()}/>
      </div>

  )
}

export default RotatingText
