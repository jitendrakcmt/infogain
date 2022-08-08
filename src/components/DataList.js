import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material/";
import userdata from "../data/dataList";

const DataList = () => {
  const calCulateRewardPoint = (item) => {
    let amount = 0;
    let data = 0;
    item.purchaseDetail.forEach((itemData, index) => {
      amount = amount + itemData.amount;

      if (amount > 50 && amount < 100) {
        data = 50;
      } else {
        data = (amount - 100) * 2 + 50;
      }
    });
    return data;
  };

  return (
    <Container fixed sx={{ mt: 2 }}>
      <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Client Name</TableCell>
              <TableCell align="center">
                View Transaction Detail
                <Table>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Product Price</TableCell>
                  </TableRow>
                </Table>
              </TableCell>
              <TableCell align="right">Total Reward Point</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userdata?.map((item, index) => (
              <TableRow key={item?._id}>
                <TableCell>{item.name}</TableCell>

                <TableCell align="left">
                  <Table>
                    {item.purchaseDetail.map((detail, index) => (
                      <TableRow>
                        <TableCell>{detail.date}</TableCell>
                        <TableCell>{detail.productname}</TableCell>
                        <TableCell>{detail.amount}</TableCell>
                      </TableRow>
                    ))}
                  </Table>
                </TableCell>
                <TableCell align="right">
                  {calCulateRewardPoint(item)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DataList;
