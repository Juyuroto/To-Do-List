package main

import (
	"fmt"
	"os"
	
	"todo_api/config"
	"todo_api/router"

	"github.com/joho/godotenv"
)

func main() {
	
	godotenv.Load()
		
	db := config.ConnectDB()
	
	dbHost := os.Getenv("PostgreHost")
	dbUser := os.Getenv("PostgreUser")
	dbPassword := os.Getenv("PostgrePassword")
	dbPort := os.Getenv("PostgrePort")
	dbName := os.Getenv("PostgreDB")

	fmt.Println("Connect to", dbHost)
	fmt.Printf("%v est connecté avec le mdps: %v", dbUser, dbPassword)
	fmt.Printf("Voici le port: %v au nom %v", dbPort, dbName)
	
	defer db.Close()
	
	router.SetupRouter(db).Run(":8080")
	
}