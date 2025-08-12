import React from 'react'
interface ChildProps{
    color: string;
}
export const Child = ({color}:ChildProps) => {
  return (
    <div>{color}</div>
  )
}
// parem variant kirjutada, siis pakub ise variante v2lja
export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
    return <div> {color}</div> 
};
ChildAsFC.displayName