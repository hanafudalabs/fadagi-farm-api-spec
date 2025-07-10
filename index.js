import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import {fileURLToPath} from 'url';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

const apiVersion = process.env.API_VERSION;

const swaggerDocument = YAML.load(path.join(__dirname, `/api/${apiVersion}.yaml`));

app.use(`/api/${apiVersion}`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Swagger UI running at http://localhost:${port}/api/${apiVersion}`);
});