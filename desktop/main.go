package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend
var assets embed.FS

func main() {
	app := NewApp()

	err := wails.Run(&options.App{
		Title:  "Lipi",
		Width:  900,
		Height: 680,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		OnStartup:        app.startup,
		BackgroundColour: &options.RGBA{R: 26, G: 26, B: 26, A: 1},
		Bind: []interface{}{
			app,
		},
	})
	if err != nil {
		println("Error:", err.Error())
	}
}