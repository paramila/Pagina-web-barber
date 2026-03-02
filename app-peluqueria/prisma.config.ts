import { defineConfig } from "prisma/config";

export default defineConfig({
  datasource: {
    // Le damos la ruta directa en lugar de pedirle que lea el archivo .env
    url: "mysql://root:root@localhost:3306/peluqueria_db",
  },
});