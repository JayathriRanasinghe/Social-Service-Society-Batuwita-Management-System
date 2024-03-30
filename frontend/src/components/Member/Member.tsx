import { connect, ConnectedProps } from "react-redux";
import React, { useEffect } from "react";
import { MemberInformationAction } from "../../actions";
import { RootState } from "../../store";

interface Member {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_board_member: boolean;
  start_date: string;
}

const Member: React.FC<PropsFromRedux> = (props) => {
  const { memberDetails, getMemberDetails } = props;

  const { data, isLoading } = memberDetails ?? {};

  useEffect(() => {
  }, []);

  return (
    <>
      <h1>Testing the member details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Is Board Member</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

const { allMembers } = MemberInformationAction ?? {};

const mapStateToProps = (state: RootState) => {
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
