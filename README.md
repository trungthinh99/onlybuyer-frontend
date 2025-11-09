# OnlyBuyer Frontend

React + Vite storefront that consumes the NestJS backend API.

### Environment variable

The build uses a single variable:

- `VITE_API_BASE_URL` – base URL of the backend (for example `http://localhost:3001`)

When building the Docker image this value is supplied through the build argument of the same name (see `docker-compose.yml`). For local development create a `.env` file in this folder:

```
VITE_API_BASE_URL=http://localhost:3001
```

### Running with Docker

The provided `Dockerfile` compiles the Vite app in a Node build stage and serves the static bundle with Nginx.

```bash
# from repository root
docker compose up -d --build frontend
```

The container publishes port `80` internally and is mapped to `8080` on the host by default. Adjust the mapping in `docker-compose.yml` if you need a different port.

### Local development without Docker

```bash
npm install
npm run dev
```

The Vite dev server runs on port `5173`. Ensure the backend is reachable at the URL configured in `VITE_API_BASE_URL`.
