import React, { useState } from "react";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import axios from "axios";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [tags, setTags] = useState([]);

  const [formData, setFormData] = useState([]);

  const saveFormData = (e) => {
    e.preventDefault();

    if ((title && author && content) || getPjl(e)) {
      const myData = {
        title: title,
        author: author,
        content: content,
        tags: tags,
        imageURL: imageURL,
      };
      axios
        .post("http://localhost:8081/v1/api/blogs/", myData)
        .then((res) => {
          return (
            <>
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="success">You have Posted Successfully</Alert>
              </Stack>
            </>
          );
        })
        .catch((error) => console.log(error));

      setFormData([...formData, myData]);

      setTitle("");
      setAuthor("");
      setContent("");
      setImageURL("");
    } else {
      alert("Please fill the input");
    }
  };

  const getPjl = (e) => {
    // destructing
    const { value, checked } = e.target;
    console.log(`isChecked: ${checked} Value: ${value}`);
    if (checked) {
      setTags([...tags, value]);
    } else {
      setTags(tags.filter((val) => val !== value));
    }
  };
  return (
    <div>
      <h3>Dashboard</h3>
      <form
        style={
          {
            //   border: "5px solid",
          }
        }
        onSubmit={saveFormData}
      >
        <div
          style={{
            marginTop: "1%",
            // border: "2px solid",
            width: "100%",
          }}
        >
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div
          style={{
            marginTop: "1%",
            // border: "2px solid",
            width: "100%",
          }}
        >
          <TextField
            id="standard-basic"
            label="Author"
            variant="standard"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div
          style={{
            marginTop: "1%",
            // border: "2px solid",
            width: "100%",
          }}
        >
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: 200 }}
          />
        </div>

        <div
          style={{
            marginTop: "1%",
            // border: "2px solid",
            width: "100%",
          }}
        >
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox />}
              label="Football"
              value="Football"
              onChange={(e) => getPjl(e)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Messi"
              value="Messi"
              onChange={(e) => getPjl(e)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Ronaldo"
              value="Ronaldo"
              onChange={(e) => getPjl(e)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Neymar"
              value="Neymar"
              onChange={(e) => getPjl(e)}
            />
          </FormGroup>
        </div>
        <div
          style={{
            marginTop: "1%",
            // border: "2px solid",
            width: "100%",
          }}
        >
          <TextField
            id="standard-basic"
            label="Image URL"
            variant="standard"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div
          style={{
            marginTop: "1%",
            // border: "2px solid",
            width: "100%",
          }}
        >
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </form>
      {formData.map((item) => {
        const { author, title, content, tags } = item;
        return (
          <>
            {/* <table>
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Content</th>
                <th>Tags</th>
              </tr>
              <tr>
                <td>{author}</td>
                <td>{title}</td>
                <td>{content}</td>
                <td>{tags.join(", ")}</td>
              </tr>
            </table> */}
          </>
        );
      })}
    </div>
  );
};

export default Dashboard;
