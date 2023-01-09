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
        <div className='h2'>{title}<span dangerouslySetInnerHTML={createMarkup()} /></div>
      </div>

  )
}

export default RotatingText
