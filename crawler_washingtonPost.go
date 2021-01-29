package main

import (
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

type SitemapIndex struct {
	Locations []string `xml:"sitemap>loc"`
}

type News struct {
	Titles   []string `xml:"url>news>title"`
	Keywords []string `xml:"url>news>keywords"`
	Location []string `xml:"url>loc"`
}

type NewsMap struct {
	Keywords string
	Location string
}

func main() {
	resp, _ := http.Get("https://washingtonpost.com/news-sitemaps/index.xml")
	bytes, _ := ioutil.ReadAll(resp.Body)
	body_string := string(bytes)
	fmt.Println(body_string)
	resp.Body.Close()

	var s SitemapIndex
	var n News
	xml.Unmarshal(bytes, &s)
	// fmt.Println("links:- ", s)
	news_map := make(map[string]NewsMap)

	for _, Location := range s.Locations[:2] {
		resp, _ := http.Get(strings.ReplaceAll(Location, "\n", ""))
		bytes, _ := ioutil.ReadAll(resp.Body)
		// body_string := string(bytes)
		// fmt.Println(body_string)
		xml.Unmarshal(bytes, &n)
		// fmt.Println(n)
		for idx, _ := range n.Keywords {
			news_map[n.Titles[idx]] = NewsMap{n.Keywords[idx], n.Location[idx]}
		}
	}

	for title, data := range news_map {
		fmt.Println("\n\n\n", title)
		fmt.Println("\n", data.Keywords)
		fmt.Println("\n", data.Location)
	}
}
