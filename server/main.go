package main

import (
    "net/http"
	"fmt"
	"io"
	"io/fs"
	"lipi/core"
	"os"
	"os/signal"
	"context"
	"embed"
	//"net/http/httputil"
)

//go:embed server/web
var webFiles embed.FS

func handleTransliterate(w http.ResponseWriter, r *http.Request) {
    // read body
	body, err := io.ReadAll(r.Body)

	//error check
	if err != nil {
		http.Error(w, "could not read body", 400)
		return
	}

    // call core.Transliterate
	result := core.Transliterate(string(body))
    // write response
	w.Write([]byte(result))
}

func main() {
	http.HandleFunc("/transliterate", handleTransliterate)
	// get port from environment variable
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	srv := &http.Server{Addr: ":" + port}
	fmt.Println("Server running on port " + port)
	//graceful shutdown
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	subFS, _ := fs.Sub(webFiles, "web")
	http.Handle("/", http.FileServer(http.FS(subFS)))
	go srv.ListenAndServe()
	<-quit
	fmt.Println("Shutting down...")
	srv.Shutdown(context.Background())
	fmt.Println("Done!")
}
