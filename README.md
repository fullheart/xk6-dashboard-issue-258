This project reproduces the issue with the K6 dashboard: https://github.com/grafana/xk6-dashboard/issues/258.

# How to reproduce

1. Build k6 with Docker
    ```sh
    docker compose -f ./docker/docker-compose.yaml build --no-cache
    ```
1. Start loadtest
    ```sh
    docker compose -f ./docker/docker-compose.yaml up
    ```
3. Open in Browser: http://localhost:5665

4. Open the console in the browser to see the `TypeError: Cannot convert undefined or null to object` error.

# Known workarounds
1. Downgrade k6 to version `v1.1.1` and xk6-dashboard to `v0.7.9` (see comment in [./docker/Dockerfile](./docker/Dockerfile))
2. Reduce response time from two seconds to a few milliseconds (see comment in [./docker/docker-compose.yaml](./docker/docker-compose.yaml))