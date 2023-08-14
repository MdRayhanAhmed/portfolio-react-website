import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Link} from 'react-router-dom'
const Github = () => {
  return (
    <Row className='github' style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="yellow"> <Link to="https://github.com/MdRayhanAhmed" target="_blank">GitHubCalendar</Link> </strong>
      </h2>
      <div className='leetcode' >
        <GitHubCalendar
          username="MdRayhanAhmed"
          blockSize={15}
          blockMargin={5}
          color="#6102ce"
          fontSize={16}
        />
      </div>
      
    </Row>
  );
}

export default Github;
