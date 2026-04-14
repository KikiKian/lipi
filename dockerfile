FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -ldflags="-w -s" -o out ./server/main.go

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/out .
EXPOSE 8080
CMD ["./out"]
