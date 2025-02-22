module.exports = {
    apps: [{
      name: "backend",
      script: "./dist/main.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        DB_HOST: "postgres",  // Измените с "localhost" на "postgres"
        DB_PORT: 5432,
        DB_USER: "student",
        DB_PASSWORD: "student",
        DB_NAME: "nest_project",
        JWT_SECRET: "8f6dc4c1c9e3bf0da3e9929511f269c67897595f5c996a78670b6742d8445",
        JWT_EXPIRATION_TIME: 360000,
        PORT: 3000
      }
    }]
  };