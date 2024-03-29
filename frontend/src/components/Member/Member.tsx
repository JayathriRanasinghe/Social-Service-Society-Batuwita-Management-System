//member detail summary
//financial situation
//befits already taken and those details.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IMember } from './Interface';

interface Member {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_board_member: boolean;
  start_date: string;
}

const Member: React.FC<IMember> = (props) => {
  const [members, setMembers] = useState<Member[]>([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Member[]>('/api/members'); // Replace with your API endpoint
      setMembers(response.data);
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Is Board Member</th>
          <th>Start Date</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member.id}>
            <td>{member.first_name} {member.last_name}</td>
            <td>{member.email}</td>
            <td>{member.is_board_member ? 'Yes' : 'No'}</td>
            <td>{member.start_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Member;
