# NASA APOD GraphQL Wrapper
A wrapper for NASA's Astronomy Picture of the Day (APOD) API made with GraphQL and Apollo Server.

## Installation
User Docker's command line to pull the image from Docker Hub
```bash
docker pull neutronchicken/na-gql-wrap:latest
```

## Usage
*Note: The default port for the server is 8080, pass the `PORT` env to change it.*

Run a container,
```bash
docker run --name=apod-api-wrap -d -p 5000:8080 neutronchicken/na-gql-wrap:latest
```
