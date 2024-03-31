import { connect, ConnectedProps } from "react-redux";
import React, { useEffect } from "react";
import { MemberInformationAction } from "../../actions";
// import { RootState } from "../../store";

import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { RootState } from "../../store";
import { IMember } from "./Interface";

// interface IMember {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   is_board_member: boolean;
//   start_date: string;
// }

const Member: React.FC<PropsFromRedux & IMember> = (props) => {
  const { memberDetails, getMemberDetails } = props;

  const { data, isLoading } = memberDetails ?? {};
  console.log(data);

  useEffect(() => {
    getMemberDetails();
  }, []);

  return (
    <React.Fragment>
      <h1>Member Details</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Member ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Contact number</TableCell>
            <TableCell>Is board member</TableCell>
            <TableCell>Start date</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={row.memberId}>
              <TableCell>{row.memberId}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.contactNumber}</TableCell>
              <TableCell>{row.isBoardMember}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
