import Button from '../components/Button'

export default () => {
  return (<div>
    <div>Welcome to <span>next.js!</span></div>
    <Button>salut</Button>
    <style jsx>{`
      div {
        color: red;

        span {
          color: blue;
        }
      }
    `}</style>
  </div>)
}
