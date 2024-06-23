import React, { ReactNode } from "react";
import { connect } from "react-redux";
import { DrawerForRole } from "../Drawer";
import { AppBar } from "../AppBar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


interface ILayout {
  children: ReactNode;
}

const Dashboard: React.FC<ILayout> = (props) => {
  const {children} = props;
  const [value, setValue] = useState("one");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    switch (newValue) {
      case "one":
        navigate("/member");
        break;
      case "two":
        navigate("/member/add-member");
        break;
      case "three":
        navigate("/payments");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <AppBar />
      {/* <DrawerForRole /> */}
      <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="All Members" />
        <Tab value="two" label="Add New Member" />
        <Tab value="three" label="Payments" />
      </Tabs>
    </Box>
      <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <div style={{ width: "90%" }}>
          {/* Render children components here */}
          {children}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = () => {};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Dashboard);