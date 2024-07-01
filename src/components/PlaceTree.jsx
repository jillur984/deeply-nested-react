

export default function PlaceTree({placesById,id,onComplete,parentId}) {
  const place=placesById[id]
//   console.log(place)

  const childIds=place.childIds
  
  return (
    <>
   <li>
    {place.title} <button onClick={()=>onComplete(parentId,id)} >Complete</button>
    {childIds.length>0 && (
        <ol>{childIds.map((id)=>(
            <PlaceTree key={id} id={id} placesById={placesById} parentId={parentId} />
        ))}</ol>
    )}
   </li>
    </>
  )
}
