import { useState } from "react"
import { initialTravelPlan } from "../data/places-normalize"
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
 
const[plan,setPlan]=useState(initialTravelPlan)

const root=plan[0]
const planteIds=root.childIds


const handleComplete=(parentId,childId)=>{
  console.log("hello")
  const parent=plan[parentId]
  const nextParent={
    ...parent,
    childIds:parent.childIds.filter((id)=>id!==childId)
  }
  setPlan({
    ...plan,
    [parentId]:nextParent
    
  })
}

  return (
    <>
    <h2>Plantes to Visit</h2>
    <ol>
        {planteIds.map((placeId)=>(
            <PlaceTree key={placeId} id={placeId} placesById={plan} onComplete={handleComplete} parentId={0}/>
        ))}
    </ol>
    </>
  )
}
