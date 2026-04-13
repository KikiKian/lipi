# Stage 1 - build
FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o lipi ./server/main.go

# Stage 2 - run
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/lipi .
COPY --from=builder /app/server/web ./server/web
EXPOSE 8080
CMD ["./lipi"]