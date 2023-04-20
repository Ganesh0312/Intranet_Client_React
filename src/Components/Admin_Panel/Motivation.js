import React, { useState, useEffect } from "react";
//import { TextArea } from '@thumbtack/thumbprint-react';

import {
  Box,
  Stack,
  Table,
  TableBody,
  TextField,
  TextArea,
  TextareaAutosize,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Typography,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // npm i react-toastify
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";

// min 22:00
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({

  textAlign: "center",
}));

const Designation = () => {
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const [motivationName, setName] = useState("");
  


  
  const [editId, setEditId] = useState("");
  const [editMotivation, setEditMotivation] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
     
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get("https://localhost:7274/api/Motivation");
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  
  {/*const handleEdit = async (id) => {
    handleOpen();
    const result = await axios.get(`https://localhost:7274/api/Designation/${id}`);
    setEditMotivation(result.data.motivation);
    
    setEditId(id);
  };

  
  const handleUpdate = async () => {
    const url = `https://localhost:7274/api/Designation/${editId}`;
    const updateData = {
      id: editId,
      designationName: editMotivation,
      
    };
    // console.log(updateData.isActive);
    try {
      const result = await axios.put(url, updateData);
      console.log(result.data);
      handleClose();
      getData();
      clear();
      toast.success("Designation has been updated");
    } catch (error) {
      console.log(error);
    }
  };*/}

  // Delete Motivation
  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete this Motivation") === true) {
      const url = `https://localhost:7274/api/Motivation/${id}`;
      try {
        const result = await axios.delete(url);

        if (result.status === 200) {
            toast.error("Delete operation has fail");
          
        } else {
            toast.success("Motivation has been deleted");
            getData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Add new Employee
  const handleSave = async () => {
    const url = "https://localhost:7274/api/Motivation";
    const data = {
        motivation : motivationName,

    };
    try {
      const result = await axios.post(url, data);
      // reload the table from db
      getData();
      clear();
      toast.success("Motivation has been added");
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    setName("");
  };

  return (
    <div style={{ width: "100%" }}>
      <ToastContainer />
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        marginTop={"40px"}
        spacing={3}
      >
        <Grid item>
          <Item>
            <TextareaAutosize
              id="name-input"
              label="Motivation"
              name="Motivation"
              value={motivationName}
              onChange={(e) => setName(e.target.value)}
            />
          </Item>
        </Grid>
       
        <Grid item mt={2}>
          <Button variant="contained" onClick={() => handleSave()}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "50px",
        }}
      >
        <TableContainer component={Paper} sx={{ width: 500 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
               Motivation 
                </TableCell>
                
              </TableRow>
            </TableHead>
            {
              <TableBody>
                {data.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{item.motivation}</TableCell>
                    <TableCell align="center">
                      <Stack spacing={3} direction="row">
                        {/*<Button
                          variant="contained"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </Button>{" "}*/}
                        &nbsp;
                        <Button
                          variant="contained"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            }
          </Table>
        </TableContainer>
      </Box>


    </div>
  );
};

export default Designation;
