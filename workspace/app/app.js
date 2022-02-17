import { config } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

// Initialize API
import clientUsersRoute from "../../components/client/users/usersApi.js";
import clientBooksRoute from "../../components/client/books/booksApi.js";
import clientBooksSubRoute from "../../components/client/book_subscriptions/booksSubApi.js";

import crmUsersRoute from "../../components/crm/users/usersApi.js";
import crmBooksRoute from "../../components/crm/books/booksApi.js";
import crmBooksSubRoute from "../../components/crm/book_subscriptions/booksSubApi.js";

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API List
app.use("/api/client/users", clientUsersRoute);
app.use("/api/client/books", clientBooksRoute);
app.use("/api/client/book-subscriptions", clientBooksSubRoute);

app.use("/api/crm/users", crmUsersRoute);
app.use("/api/crm/books", crmBooksRoute);
app.use("/api/crm/book-subscriptions", crmBooksSubRoute);

export default app;
