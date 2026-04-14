FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -ldflags="-w -s" -o out .

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/out .
COPY --from=builder /app/web ./web
EXPOSE 8080
CMD ["./out"]
