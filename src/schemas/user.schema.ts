import * as yup from "yup";

export const userSignupSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .not([""], "Name can't be empty"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email is invalid")
    .not([""], "Email can't be empty"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .not([""], "Password can't be empty"),
});

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email is invalid")
    .not([""], "Email can't be empty"),
  password: yup
    .string()
    .required("Password is required")
    .not([""], "Password can't be empty"),
});
