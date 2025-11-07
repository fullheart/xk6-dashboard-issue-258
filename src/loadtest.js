import http from "k6/http";

const options = {
  iterations: 1e3
};

function benchmarking() {
  const response = http.post("http://wiremock:8080/payload");
  console.log(response);
}

export {
  benchmarking as default,
  options
};
