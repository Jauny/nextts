// import 'react-phone-number-input/style.css'
// import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input'

import Button from './button'

export default class GetTheApp extends React.Component {
  state = {
    value: ''
  };

  render() {
    const {title} = this.props;
    const {value} = this.state;

    return (
      <div className="get-the-app-content">
        <div className="tagline">{ title }</div>
        <div className="phone-number-container">
          <div className="phone-number-wrapper">
            {/*
            <PhoneInput
              country="US"
              placeholder="Phone Number"
              value={ value }
              onChange={ value => this.setState({ value }) }/>
              */}
            </div>
          <Button text="Get the App"/>
        </div>
        <style jsx>{`
          .get-the-app-content {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: calc(100vh - 200px);
            justify-content: center;
          }
          .tagline {
            font-size: 25px;
            line-height: 32px;
            margin-bottom: 12px;
            text-align: center;
            width: 50%;
          }
          .phone-number-container {
            display: flex;
            flex-direction: row;
          }
          .phone-number-wrapper {
            margin-right: 12px;
          }
          .react-phone-number-input__input {
            border-bottom: 2px solid #000000;
          }
        `}</style>
      </div>
    );
  }
}
