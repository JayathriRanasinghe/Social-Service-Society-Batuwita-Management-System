import { connect, ConnectedProps } from "react-redux";
import React, { useEffect } from "react";
import { MemberInformationAction } from "../../actions";
// // import { RootState } from "../../store";

import { useForm } from "react-hook-form";
import { RootState } from "../../store";
import { IMember } from "./Interface";

import { Box, Typography, TextField, Grid } from "@mui/material";

const AddMember: React.FC<PropsFromRedux & IMember> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { memberDetails, getMemberDetails } = props;

  const { data, isLoading } = memberDetails ?? {};
  console.log(data);

  useEffect(() => {
    getMemberDetails();
  }, []);
  const onSubmit = (data: any) => {
    console.log(data); // Submit the form data here
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        borderRadius: 4,
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)", // Add shadow
      }}
    >
      <Typography variant="h6" gutterBottom>
        Membership
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // {...register('lastName', { required: true })}
            // error={!!errors.lastName}
            // helperText={errors.lastName?.message || ''}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            // {...register('address1', { required: true })}
            // error={!!errors.address1}
            // helperText={errors.address1?.message || ''}
            id="email-address"
            name="email-address"
            label="Email Address"
            fullWidth
            // autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            // {...register('address2')}
            id="member-id"
            name="member-id"
            label="Member ID"
            fullWidth
            // autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // {...register('city', { required: true })}
            // error={!!errors.city}
            // helperText={errors.city?.message || ''}
            id="contact-number"
            name="contact-number"
            label="Contact Number"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("state")}
            id="registered-date"
            name="registered-date"
            label="Registered Date"
            fullWidth
          />
        </Grid>
      </Grid>
      <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', marginTop: '20px' }}
      >Submit</button>
    </Box>
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
export default connector(AddMember);
