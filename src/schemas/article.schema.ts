import * as yup from "yup";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .not([""], "Title can't be empty"),
  content: yup
    .string()
    .required("Content is required")
    .min(10, "Content must be at least 10 characters")
    .not([""], "Content can't be empty")
});

export default schema;
