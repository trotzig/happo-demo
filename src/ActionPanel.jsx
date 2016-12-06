import React from 'react';

export default class ActionPanel extends React.Component {
  render() {
    return (
      <div className='ActionPanel'>
        <div className='ActionPanel__main'>
          {this.props.children}
        </div>
        <div className='ActionPanel__action'>
          {this.props.action}
        </div>
      </div>
    );
  }
}
