import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";
import { Link} from 'react-router-dom'
const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="project-heading le" style={{ paddingBottom: "20px" }}>
        <strong className="yellow"><Link to="https://leetcode.com/MdRayhanAhmed/" target="_blank">LeetCode</Link> </strong> Status
      </h2>
      <div className='leetcode' >
        <ReactMarkdown >
          {/* ![LeetCode Stats](https://leetcard.jacoblin.cool/MdRayhanAhmed?theme=unicorn&font=ABeeZee&ext=heatmap) */}
          ![LeetCode Stats](https://leetcard.jacoblin.cool/MdRayhanAhmed?theme=dark&font=ABeeZee&ext=heatmap)
        </ReactMarkdown>
      </div>
    </Row>
  );
}

export default Leetcode;
