import React from "react";
import { connect } from "react-redux";
import { SiderPanel } from "layout/SiderPanel";
import { PageHeader } from "layout/PageHeader";

const Layout: React.FC<ILayout> = (props) => {
    return (
        <>
            <SiderPanel />
            <PageHeader />
        </>
    );
};

const mapStateToProps = () => {};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(Layout)