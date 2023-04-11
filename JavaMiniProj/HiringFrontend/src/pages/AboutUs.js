import React from 'react'
import "./AboutUs.css"
import { Typography } from '@mui/material'

const AboutUs = () => {
  return (
    <div className='aboutUsContainer'>
      <ol>
      <Typography
                  variant="h2"
                  sx={{ fontSize: "1.5rem", fontWeight: "600" }}
                  className="BlueColor"
                >
                  Members of the project :
                </Typography>
        <hr/>
        <li>Mirza Shazeb Beg</li>
        <li>Sardar Tariq Aziz</li>
        <li>Pankaj Kumar mahanata</li>
        <li>Gautam </li>
      </ol>
    </div>
  )
}

export default AboutUs
