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
        POSTGRES_HOST: "postgres",  // Измените с "localhost" на "postgres"
        POSTGRES_PORT: 5432,
        POSTGRES_USER: "student",
        POSTGRES_PASSWORD: "student",
        POSTGRES_DB: "nest_project",
        JWT_SECRET: "8f6dc4c1c9e3bf0da3e9929511f269c67897595f5c996a78670b6742d8445",
        JWT_EXPIRATION_TIME: 360000,
        PORT: 3000
      }
    }]
  };