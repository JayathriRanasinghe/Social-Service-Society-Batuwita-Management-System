import React, { ReactNode } from "react";
import { connect } from "react-redux";
import { DrawerForRole } from "../Drawer";
import { AppBar } from "../AppBar";

interface ILayout {
  children: ReactNode;
}

const Dashboard: React.FC<ILayout> = (props) => {
  const {children} = props;
  return (
    <>
      <AppBar />
      <DrawerForRole />
      <div>
        {/* Render children components here */}
        {children}
      </div>
    </>
  );
};

const mapStateToProps = () => {};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Dashboard);
