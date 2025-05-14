module.exports = {
  apps: [
    {
      name: "backend",
      script: "backend/index.js",
      cwd: "./backend",
      watch: true
    },
    {
      name: "frontend",
      script: "npm",
      args: "start",
      cwd: "./frontend",
      interpreter: "none",
      watch: false
    }
  ]
};
