package main

import (
    "net/http"
	"fmt"
	"io"
	"lipi/core"
	"os"
	"os/signal"
	"context"
)

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
	srv := &http.Server{Addr: ":8080"}
    fmt.Println("Server running on port 8080")

	//graceful shutdown
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)

	go srv.ListenAndServe()

	<-quit  

	fmt.Println("Shutting down...")
	srv.Shutdown(context.Background())
	fmt.Println("Done!")
}