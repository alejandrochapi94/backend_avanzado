import dotenv from 'dotenv';
import app from './app.js';
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'dev';

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Entorno actual: ${NODE_ENV}`);
});

export default app;