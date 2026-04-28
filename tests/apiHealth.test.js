const path = require("path");
const { spawn } = require("child_process");

let server;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Health API integration test", () => {
  beforeAll(async () => {
    const projectRoot = path.join(__dirname, "..");

    server = spawn("php", ["-S", "127.0.0.1:8000", "-t", projectRoot], {
      stdio: "ignore"
    });

    await wait(1000);
  });

  afterAll(() => {
    if (server) {
      server.kill();
    }
  });

  test("GET /api/Health.php returns valid JSON", async () => {
    const response = await fetch("http://127.0.0.1:8000/api/Health.php");
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty("status", "ok");
    expect(data).toHaveProperty("app", "colors");
  });
});
