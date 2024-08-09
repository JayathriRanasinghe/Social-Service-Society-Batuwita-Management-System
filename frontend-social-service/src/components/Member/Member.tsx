import { connect, ConnectedProps } from "react-redux";
import React, { useEffect } from "react";
import { MemberInformationAction } from "../../actions";
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
import { IMember } from "./Interface";
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

const Member: React.FC<PropsFromRedux & IMember> = (props) => {
  const { memberDetails, getMemberDetails } = props;

  const { data, isLoading } = memberDetails ?? {};
  console.log(data);

  useEffect(() => {
    getMemberDetails();
  }, []);

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Member ID</StyledTableCell>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell>Email Address</StyledTableCell>
            <StyledTableCell>Contact number</StyledTableCell>
            <StyledTableCell>Is board member</StyledTableCell>
            <StyledTableCell>Registered Date</StyledTableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            
            <StyledTableRow key={row.memberId}>
              <StyledTableCell>{row.memberId}</StyledTableCell>
              <StyledTableCell>{row.fullName}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.contactNumber}</StyledTableCell>
              <StyledTableCell>{row.flag}</StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </React.Fragment>
  );
};

const { allMembers } = MemberInformationAction ?? {};

const mapStateToProps = (state: RootState) => {
  console.log("In the mapStateToProp......");

  const { reducerMemberDetails } = state;
  const { memberDetails } = reducerMemberDetails;

  return {
    memberDetails,
  };
};

const mapDispatchToProps = {
  getMemberDetails: allMembers.get,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Member);
