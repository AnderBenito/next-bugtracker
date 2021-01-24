require("dotenv").config();
import app from "./bootstrap/index";
import auth from "./routes/auth";

async function main() {
	const PORT = process.env.PORT || 5000;

	app.use("/auth", auth);

	app.get("/", (_, res) => {
		res.send("It works! Hello");
	});

	app.listen(PORT, () => {
		console.log(`Express listening on port ${PORT}`);
	});
}

main();
