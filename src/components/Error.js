import { Col } from "reactstrap";

const Error = ({ errMsg }) => {
    return (
        <Col>
            <H4>{errMsg}</H4>
        </Col>
    );
};

export default Error;