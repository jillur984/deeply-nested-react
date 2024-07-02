import React, { useState } from 'react'

export default function Panel({title,isActive,onActive}) {
  

    
  return (
    <>
    <section className="panel">
      <h3>
      {title}
      </h3>
     { isActive ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perferendis, ex blanditiis id deleniti, perspiciatis animi quos maiores fuga reiciendis molestias rerum molestiae magni, voluptas officia soluta voluptate natus harum.</p>
        :
        <button onClick={onActive}>
          Show
        </button>}
    
    </section>
    </>
  )
}
