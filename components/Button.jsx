import './Button.scss'
import './Button.css'

export default props => {
  return (<div>
    <div className='btn bold'>{props.children}<span>salut</span></div>
    <style jsx>{`
      div {
        color: red;
        display: flex;
        span {
          color: blue;
        }
      }
    `}</style>
  </div>)
}