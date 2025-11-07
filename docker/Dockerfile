# Multi-stage build to generate custom k6 with extension
FROM golang:1.24-alpine as builder
WORKDIR $GOPATH/src/go.k6.io/k6

RUN apk --no-cache add build-base git
RUN go install go.k6.io/xk6/cmd/xk6@latest

# Last working version before issue started:
# ---
# RUN CGO_ENABLED=1 xk6 build v1.1.0 \
#   --with github.com/grafana/xk6-dashboard@v0.7.9 \
#   --output /tmp/k6

# Build with latest k6 and xk6-dashboard
RUN CGO_ENABLED=1 xk6 build \
  --with github.com/grafana/xk6-dashboard@latest \
  --output /tmp/k6

# Create image for running your customized k6
FROM alpine:3.17
RUN apk add --no-cache ca-certificates \
  && adduser -D -u 12345 -g 12345 k6
COPY --from=builder /tmp/k6 /usr/bin/k6

USER 12345
WORKDIR /home/k6

ENTRYPOINT ["k6"]