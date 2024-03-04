import { restServer } from "./server";

(async () => {
  try {
    await restServer()
  } catch (error) {
    console.error(`Unable to connect the server: ${error}`);

    throw new Error(error as string);
  }
})();
