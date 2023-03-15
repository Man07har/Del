import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
       Github Heat<strong className="purple">Map</strong>
      </h1>
      <GitHubCalendar
        username="man07har"
        blockSize={15}
        blockMargin={5}
        color="#FAED26"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
