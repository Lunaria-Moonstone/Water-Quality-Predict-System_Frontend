import { Card, Col, Row } from "antd"

function Overlook() {

  const cardStyle: React.CSSProperties = { width: '100%', height: '100%' }

  return (
    <>
      <div className="overlook-body">
        <h1>Center Dashboard</h1>
        <hr />
        <div className="data-overlook">
          <Row gutter={8} className="row">
            <Col span={14}>
              <Card title="System Performence" style={cardStyle} bordered={false}>
                <p>there should be a chart here</p>
              </Card>
            </Col>
            <Col span={10} >
              <Row gutter={8} style={{height: 'calc(50% - var(--standard-margin) / 2)'}}>
                <Col span={12}>
                  <Card title="Registered User" style={cardStyle} bordered={false}>
                    <p>there're <span className="highlight-font">3</span> registered in system</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Repertory Data" style={cardStyle} bordered={false}>
                    <p>there're <span className="highlight-font">100000</span> rows data in system</p>
                  </Card>
                </Col>
              </Row>
              <Row gutter={8} style={{ marginBlockStart: 'var(--standard-margin)', height: 'calc(50% - var(--standard-margin) / 2)' }}>
                <Col span={12}>
                  <Card title="Model Tree Depth" style={cardStyle} bordered={false}>
                    <p>the depth of model tree is <span className="highlight-font">12</span></p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Max Accuracy" style={cardStyle} bordered={false}>
                    <p>the max accuracy of trainning history is <span className="highlight-font">87</span>%</p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={8} className="row" style={{marginBlockEnd: '0'}}>
            <Col span={12}>
              <Card title="Trainning Accuracy" style={cardStyle} bordered={false}>
                <p>there should be a chart here</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Learning Rate" style={cardStyle} bordered={false}>
                <p>there should be a chart here</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Overlook