import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.less';
import { Icon, Row, Col, Progress, Switch } from 'antd';
export default class Honor extends Component {
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
      
      <Row>
        {
          dataList instanceof Array && dataList.map( (item,key) => <Col xs={24} sm={24} md={24} lg={24} >         
          <Icon type="like-o" /><span style={{paddingLeft:'8px'}}>{item} </span>
          </Col> )
        }
        
      </Row>
    )
  }
}
