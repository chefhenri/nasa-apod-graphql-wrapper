# NASA APOD GraphQL Wrapper
A wrapper for NASA's Astronomy Picture of the Day (APOD) API made with GraphQL and Apollo Server.

## Installation
User Docker's command line to pull the image from Docker Hub
```bash
docker pull neutronchicken/nasa-apod-graphql-wrapper:latest
```

## Usage
Run a container with the `nasa-apod-graphql-wrapper` image
```bash
docker run --name=[container_name] -d -p [port]:8080 neutronchicken/nasa-apod-graphql-wrapper:latest
```

Optionally, provide the `BASE_URL` and `PORT` environment variables with the `--env-file=[path/to/.env]` flag.
Just be sure to match the container's port to `PORT`.
