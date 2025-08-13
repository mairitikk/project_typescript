import React from 'react'
interface ChildProps{
    color: string;
    onClick: () => void;
  children?: React.ReactNode;
}
export const Child = ({color}:ChildProps) => {
  return (
    <div>{color}
    <button onClick={onClick}>Click me</button>
    </div>
  )
}
// parem variant kirjutada, siis pakub ise variante v2lja
export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
    return <div> {color}
    <button onClick={onClick}>Click me</button>
    </div> 
};
ChildAsFC.displayName