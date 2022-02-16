import app from "../../app/app.js";
import http from "http";
import mongoose from "mongoose";

const port = process.env.PORT || 5000;
app.set("port", port);

const server = http.createServer(app);

const start = async () => {
    try {
        await mongoose.connect(
            process.env.DATABASE_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            (err) => {
                if (!err) {
                    return console.log("Connected to Database MongoDB!");
                } else {
                    return console.log({
                        status: "Error",
                        message: `Please check if the database connection is correct: ${err}`,
                    })
                }
            }
        );

        server.listen(port, () => console.log(`Server started on PORT ${port}`));
    } catch (err) {
        return console.log({
            status: "Error",
            message: `Error: ${err}`,
        });
    }
};

start();
