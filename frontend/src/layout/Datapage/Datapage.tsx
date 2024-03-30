import React from "react";
import { connect } from "react-redux";

interface ILayout {
    children: React.ReactNode;
}

const Datapage: React.FC<ILayout> = (props) => {
    return (
        <>
        </>
    );
};

const mapStateToProps = () => {};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(Datapage)