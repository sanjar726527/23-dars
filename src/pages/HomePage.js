import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";

export const HomePage = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const res = axios
      .get("http://localhost:3002/lists")
      .then((data) => {
        setLists(data.data);
      })
      .catch((err) => {
        {
          console.log(err);
        }
      });
    setTimeout(() => {
      setLoading(false);
    }, [1000]);
  }, []);
  return (
    <Box>
      <Typography component="h4" variant="h5">
        Arizlar
      </Typography>
      <Typography component="h5" variant="h6" color="GrayText">
        Yetib kelgan arizalarni kuzatish mumkin
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>To'liq ismi</TableCell>
                <TableCell>Taom nomi</TableCell>
                <TableCell>soni: </TableCell>
                <TableCell>summa:</TableCell>
                <TableCell>telfon raqami </TableCell>
                <TableCell>status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {lists.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.meal}</TableCell>
                  <TableCell>{row.count}</TableCell>
                  <TableCell>{row.pricy}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>
                    <Button variant="contained">Yetkazildi</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
