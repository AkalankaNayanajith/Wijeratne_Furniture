import * as Yup from "Yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const userSchema = Yup.object().shape({



 name: Yup.string().required("Name is required"),
 email: Yup.email().required,



})