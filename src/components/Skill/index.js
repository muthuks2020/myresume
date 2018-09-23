import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.less';
import { Icon, Row, Col, Progress, Switch } from 'antd';
export default class Skill extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }
  onChange = (checked) => {
    this.setState({
      checked,
    })
  }
  render() {

    const { checked } = this.state;
    const { dataList } = this.props;
    return (
      <div className={styles["content"]} >
        <Switch checked={checked} onChange={this.onChange} checkedChildren="Yes" unCheckedChildren="No" />
        <div style={checked ? { textAlign: 'center' } : {}}>
          <Row>
            {
              dataList instanceof Array && dataList.map(({ name, value, status },key) => {
                return (
                  <Col xs={12} sm={12} md={12} lg={8} key={key}>
                    <div className={styles["_center"]}><Progress type={checked ? 'circle' : 'line'} format={precent => (<div>{precent}{checked && <Icon type="arrow-up" />}</div>)} percent={ value } status={status || "active"} /></div>
                    <div className={styles["processText"]}>{name}</div>
                  </Col>
                )
              })
            }

          </Row>
        </div>
      </div>
    )
  }
}
