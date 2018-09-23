import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import Skill from '../components/Skill/index.js';
import Honor from '../components/Honor/index.js';
import Education from '../components/Education/index.js';

import { Icon, Timeline, Steps, Card, Row, Col, Progress, } from 'antd';
function IndexPage({ dispatch, resumeM }) {
  let leftCol = 9;
  return (
    <div className={styles.wrapper}>
      <Row>
        <Col xs={24} sm={24} md={leftCol} lg={leftCol} >
          <div className={styles["leftBox"]}>
            <div className={styles["photo"]}></div>
            <div className={styles["itemBox"]}>
              <div className={styles["title"]}>My name <div className={styles["triangle"]}></div></div>

              <div className={styles["content"]}>
                <div className={styles["item"]}><Icon type="environment-o" /><span> <a href="https://www.linkedin.com/in/muthukumaraswamy-b-08894369/"> https://www.linkedin.com/in/muthukumaraswamy-b-08894369/</a></span></div>
                <div className={styles["item"]}><Icon type="mail" /><span>  muthuks@gmail.com</span></div>
                <div className={styles["item"]}><Icon type="github" /><span>  <a href="https://github.com/muthuks2020/">https://github.com/muthuks2020/</a> </span></div>
                <div className={styles["item"]}><Icon type="anticon anticon-book" /><span>  <a href="https://medium.com/@muthuks">https://medium.com/@muthuks</a> </span></div>
                            </div>
            </div>
            <div className={styles["itemBox"]}>
              <div className={styles["title"]}>Skills<div className={styles["triangle"]}></div></div>
              <Skill dataList={resumeM.skillList} />

            </div>
            <div className={styles["itemBox"]}>
              <div className={styles["title"]}>JAMstack Compadres<div className={styles["triangle"]}></div></div>
              <div className={styles["content"]}>
                <Honor dataList={resumeM.carerIni} />
              </div>
            </div>
            <div className={styles["itemBox"]}>
              <div className={styles["title"]}>Core Competencies<div className={styles["triangle"]}></div></div>

              <div className={styles["content"] + ' ' + styles["_center"] + ' ' + styles["interest"]}>
                <Row>
                  <Col xs={8} sm={8} md={8} lg={4} >
                   
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={4} >
                    <div className={styles["interestText"]}> ttttttttt</div>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={4} >
                   
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={4} >
                  
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={4} >
                   
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={4} >
                   
                  </Col>
                </Row>
              </div>
            </div>
            <div className={styles["itemBox"]}>
              <div className={styles["title"]}>Education<div className={styles["triangle"]}></div></div>
              <div className={styles["content"]}>
                <Honor dataList={resumeM.honorList} />
              </div>

            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24 - leftCol} lg={24 - leftCol} >
          <div className={styles["rightBox"]}>
            <div className={styles["motto"]}>
              <span className={styles["name"]}></span>
              <span>
                Muthukumaraswamy.B
              </span>
            </div>

            <div className={styles["itemBox"]}>
              <div className={styles["titleBox"]}>
                <div className={styles["title"]}>Test1</div>
                <div className={styles["line"]}></div>
              </div>
              <div className={styles["content"]}><Icon type="solution" />Test1</div>
            </div>
            <div className={styles["itemBox"]}>
              <div className={styles["titleBox"]}>
                <div className={styles["title"]}>Test1</div>
                <div className={styles["line"]}></div>
              </div>
              <div className={styles["content"]}>
                <Education dataList = {resumeM.educationList}/>
              </div>
            </div>
            <div className={styles["itemBox"]}>
              <div className={styles["titleBox"]}>
                <div className={styles["title"]}>Test1</div>
                <div className={styles["line"]}></div>
              </div>
              <div className={styles["content"]}>
                <Steps direction="vertical" current={0}>
                  <Steps.Step title="Muthu1" icon="tag" description="add description" />
                  <Steps.Step title="Test12016.11-2017.4" icon="tag" description="Test1" />
                  <Steps.Step title="Test12016.9-2016.11" icon="tag" description="Test1" />
                </Steps>
              </div>
            </div>
            <div className={styles["itemBox"]}>
              <div className={styles["titleBox"]}>
                <div className={styles["title"]}>title 2</div>
                <div className={styles["line"]}></div>
              </div>
              <div className={styles["content"]}>
                <Row>
                  <Col xs={12} sm={12} md={8} lg={6} >
                    <Card title="Test1">
                      <p className={styles["emph"]}>Test1：</p>
                      <p>2017.9-2017.10</p>
                      <p className={styles["emph"]}>Test1：</p>
                      <p className={styles["detailsBox"]}>description，description、description、description</p>

                    </Card>
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} >
                    <Card title="Test1">
                      <p className={styles["emph"]}>description：</p>
                      <p>2017.10-2017.11</p>
                      <p className={styles["emph"]}>Test1：</p>
                      <p className={styles["detailsBox"]}>description,description,description,description,description,description,description</p>
                    </Card>
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} >
                    <Card title="Test1">
                      <p className={styles["emph"]}>Test1：</p>
                      <p>2017.11-2017.11</p>
                      <p className={styles["emph"]}>Test1：</p>
                      <p className={styles["detailsBox"]}>Test1</p>
                    </Card>
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} >
                    <Card title="Test1">
                      <p className={styles["emph"]}>Test1：</p>
                      <p>2017.9-2017.11</p>
                      <p className={styles["emph"]}>Test1：</p>
                      <p className={styles["detailsBox"]}>Test1</p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ resumeM }) => ({ resumeM }))(IndexPage);
