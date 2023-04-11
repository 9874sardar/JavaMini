import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Content = () => {
  return (
    <div>
      <Typography sx={{ margin:"5%" ,color:"white",fontSize:"5rem"}} variant="h3" align="center">
        LPU Club Hiring
      </Typography>
      
      <div>
        <ul className="ul PathUL">
          <li>
          <Button size="lg" className="hiringBtn" variant="success">
            <Link to="/employer/dashboard">
              Hire Amazing talent
            </Link>
            </Button>
          </li>
          <li>
          <Button size="lg" className="hiringBtn" variant="success">
          {/* <Button variant="success"> */}
            <Link to="/employee/feed">
              Club Opening
            </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Content
