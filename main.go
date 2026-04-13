package main

import (
    "fmt"
    "guju-pinyin/core"
)

func main() {
    result := core.Transliterate("k`em ch`o")
    fmt.Println(result)

}
