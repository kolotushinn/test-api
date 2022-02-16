import { config } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

// Initialize API
import clientUsersRoute from "../../components/client/users/usersApi.js";

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API List
app.use("/api/client/users", clientUsersRoute);

export default app;
