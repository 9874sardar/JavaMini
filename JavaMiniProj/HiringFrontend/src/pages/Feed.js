import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();

  //
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
        const response = await axios.get(`http://localhost:8080/allPosts`);
        console.log(response);
        setPost(response.data);
    }
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);
console.log(post);
  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
      <Button sx={{ margin: "1% 2%" }} variant="outlined">
            <Link to="/">Home</Link>
          </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>
      {post &&
        post.map((p) => {
          return (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                  className="BlueColor"
                >
                  {p.profile}
                </Typography>
                <hr/><br/>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "500" }}
                > Description: </Typography>
                <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="body" >
                   {p.desc}
                </Typography>
                <div className="spacingTop">
                <Typography variant="span" sx={{fontWeight:"500",fontSize:"20px"}}>
                  Years of Experience(If any): 
                </Typography>
                <Typography sx={{ color: "#585858", marginLeft:"2%" }} variant="body" >
                   {p.exp} years
                </Typography>
                </div>
                <div className="spacingTop">
                <Typography gutterBottom sx={{fontWeight:"500",fontSize:"20px"}}  variant="body">Required Skills : </Typography>
                {p.techs.map((s, i) => {
                  return (
                    <Typography variant="body" gutterBottom key={i}>
                      {s} .
                      {` `}
                    </Typography>
                  );
                })}
                </div>
  
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Feed;
