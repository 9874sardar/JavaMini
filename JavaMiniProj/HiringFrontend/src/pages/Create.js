import React, { useState } from "react";
import { Typography,Tab, TextField, Button, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
const initial = { profile: "", exp: 0, techs: [], desc: "" };

const Create = () => {
  const skillSet = [
    {
      name: "Event Manager",
    },
    {
      name: "Poster making",
    },
    {
      name: "Web Development",
    },
    {
      name: "Social media manager",
    },
    {
      name: "Content manager",
    },
    {
      name: "Video editor",
    },
    {
      name: "Photographer",
    },
  ];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const [value, setValue] = React.useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/post", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/employee/feed");
  };

  const { profile, exp, desc } = form;

  const handleChange = (e,newValue) => {
    setForm({ ...form, techs: [...form.techs, e.target.value] });
    setValue(newValue);
  };


  return (

    <Box sx={{ width: '100%', typography: 'body1',display:"block",marginLeft:"auto",marginRight:"auto" ,marginTop:"-35px"}}>
      {/* <TabContext value={value}>
        <Box sx={{ borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={{display:"none"}} label="Create Post" value="1" />
          </TabList>
        </Box>
        <TabPanel value="1"> */}
    <Paper sx={{ padding: "1%" }} elevation={3}>
      <Typography className="BlueColor" sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            label="Work-profile"
            variant="outlined"
            value={profile}
          />
          <TextField
            min="0"
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
            label="Experience if Any"
            variant="outlined"
            value={exp}
          />
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            label="Work-desc"
            variant="outlined"
            value={desc}
          />
          <Box sx={{ margin: "1% auto" }}>
            <h3>Please mention required skills :</h3><br/>
            <ul>
              {skillSet.map(({ name }, index) => {
                return (
                  <li key={index}>
                    <div>
                      <div>
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          value={name}
                          onChange={handleChange}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>
                          {name}
                        </label>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Box>
          <Button
            sx={{ width: "50%", margin: "2% auto" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
    {/* </TabPanel>
      </TabContext> */}
    </Box>
  );
};

export default Create;
