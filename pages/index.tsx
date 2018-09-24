import React from "react"

export interface IProps {
  name: string
  age: number
}

export default (props: IProps) => {
  return (
    <div>Welcome to next.jsxx! {props.age}</div>
  )
}

class Tamere extends React.Component<IProps, object> {

}