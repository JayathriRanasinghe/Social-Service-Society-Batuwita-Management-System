import React from "react";
import { useParams } from "react-router-dom"; // Import for route parameters
import { Member } from "../components/Member";

interface ICnt_Member {
  // No properties needed as we're not using props directly (optional)
}

const Cnt_Member: React.FC<ICnt_Member> = () => {
  const { memberId } = useParams(); // Access route parameter named "memberId" (modify if different)

  return <Member />; // Pass parameter to Member component
};

export default Cnt_Member;
