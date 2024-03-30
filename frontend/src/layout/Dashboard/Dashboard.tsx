import React from "react";
import { connect } from "react-redux";
import { SiderPanel } from "../SiderPanel";
import { PageHeader } from "../PageHeader";

interface ILayout {
   
}

const Dashboard: React.FC<ILayout> = (props) => {
    return (
        <>
            <SiderPanel children={undefined}/>
            <PageHeader children={undefined} />
        </>
    );
};

const mapStateToProps = () => {};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(Dashboard)