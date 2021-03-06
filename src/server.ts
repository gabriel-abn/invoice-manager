import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3005, () => {
    console.log("Server running in http://localhost:3005 ");
});
