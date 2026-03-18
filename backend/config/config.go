package config

import (
	"database/sql"
	_ "github.com/lib/pq"
	"fmt"
	"log"
	"os"
)

func ConnectDB() *sql.DB {
	host := os.Getenv("Host")
	port := os.Getenv("PortDB")
	user := os.Getenv("PostgreUser")
	password := os.Getenv("PostgrePassword")
	dbname := os.Getenv("PostgreDB")
	
	fmt.Println("Starting connection with Postgres Db")
	connStr := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable", user, password, host, port, dbname)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	if err = db.Ping(); err != nil {
		log.Println("DB Ping Failed")
  		log.Fatal(err)
 	}
 	  	
  	log.Println("DB Connection started successfully")
  
   	return db
}