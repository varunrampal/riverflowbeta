console.log("Starting Riverflow Next.js application...");

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception during application startup:", error);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled rejection during application startup:", error);
});

import("./server/index.js").then(({ startServer }) => startServer()).catch((error) => {
  console.error("Unable to start Riverflow server:", error);
  process.exitCode = 1;
});
