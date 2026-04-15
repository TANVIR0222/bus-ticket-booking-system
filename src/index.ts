import "dotenv/config";
import { createServer } from "node:http";
import { createApplication } from "./server.js";

async function main() {
  try {
    const server = createServer(createApplication());
    const PORT: string | number = process.env.PORT || "3000";

    server.listen(PORT, () => {
      console.log(`Http server is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(`Error starting http server`);
    process.exit(1);
  }
}

main();
