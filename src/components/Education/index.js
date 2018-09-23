import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.less';
import {Timeline } from 'antd';
export default class Education extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    const { dataList } = this.props;
    return (
      
        
        <Timeline>
        {
          dataList instanceof Array && dataList.map( (item,key) => <Timeline.Item>{item}</Timeline.Item> )
        }
                  
              </Timeline>
    )
  }
}
