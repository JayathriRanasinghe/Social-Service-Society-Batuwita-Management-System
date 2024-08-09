import { connect, ConnectedProps } from "react-redux";
import React, { useEffect } from "react";
import { PaymentInformationAction } from "../../actions";
// import { RootState } from "../../store";

import Link from "@mui/material/Link";
import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from '@mui/material/TableContainer';
import { RootState } from "../../store";
import { IPayments } from "./Interface";
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const paymentsData = [
    { memberId: 123, fullName: "John Doe", settledDate: "2024-08-09", amount: 100, collectionMethod: "Cash", collectorsName: "Alice" },
    { memberId: 456, fullName: "Jane Smith", settledDate: "2024-08-10", amount: 200, collectionMethod: "Credit Card", collectorsName: "Bob" },
    { memberId: 789, fullName: "Michael Johnson", settledDate: "2024-08-11", amount: 300, collectionMethod: "Bank Transfer", collectorsName: "Charlie" },
  
  ];

const Payments: React.FC<PropsFromRedux & IPayments> = (props) => {
  const { paymentDetails, getPaymentDetails } = props;

  const { data, isLoading } = paymentDetails ?? {};
  console.log(data);

  useEffect(() => {
    getPaymentDetails();
  }, []);

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Member ID</StyledTableCell>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell>Settled Date</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell>Collection Method</StyledTableCell>
            <StyledTableCell>Collectors Name</StyledTableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentsData.map((row: any) => (
            
            <StyledTableRow key={row.memberId}>
              <StyledTableCell>{row.memberId}</StyledTableCell>
              <StyledTableCell>{row.fullName}</StyledTableCell>
              <StyledTableCell>{row.settledDate}</StyledTableCell>
              <StyledTableCell>{row.amount}</StyledTableCell>
              <StyledTableCell>{row.collectionMethod}</StyledTableCell>
              <StyledTableCell>{row.collectorsName}</StyledTableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </React.Fragment>
  );
};

const { allPayments } = PaymentInformationAction ?? {};

const mapStateToProps = (state: RootState) => {
  console.log("In the mapStateToProp......");

  const { reducerPaymentDetails } = state;
  const { paymentDetails } = reducerPaymentDetails;

  return {
    paymentDetails,
  };
};

const mapDispatchToProps = {
    getPaymentDetails: allPayments.get,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Payments);
