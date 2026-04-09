package handlers

import (
	"database/sql"
	"net/http"
    "todo_api/models"
	"github.com/gin-gonic/gin"
)

func CreateTodoHandler(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		
		var todo models.Todo
		if err := c.ShouldBindJSON(&todo); err != nil {
		    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		    return
		}

		var id int
		err := db.QueryRow(
		    "INSERT INTO todos (title, description, status) VALUES ($1, $2, $3) RETURNING id",
		    todo.Title, todo.Description, todo.Status,
		).Scan(&id)
		
		if err != nil {
		    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		    return
		}
		
		todo.Id = id
		c.JSON(http.StatusCreated, todo)
	}
}


func GetAllTodosHandler(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		rows, err := db.Query("SELECT id, title, description, status, created_at FROM todos")
		
		if err != nil {
		    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		    return
		}
		
		defer rows.Close()
		
		todos := []models.Todo{}

		for rows.Next() {
		    var todo models.Todo
		    rows.Scan(
		        &todo.Id,
		        &todo.Title,
		        &todo.Description,
		        &todo.Status,
		        &todo.CreatedAt,
		    )
		    todos = append(todos, todo)
		}
		c.JSON(http.StatusOK, todos)
	}
}

func GetToDoByIDHandler(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		id := c.Param("id")
		
		row := db.QueryRow("SELECT id, title, description, status, created_at FROM todos WHERE id = $1", id)
		
		var todo models.Todo
		err := row.Scan(&todo.Id, &todo.Title, &todo.Description, &todo.Status, &todo.CreatedAt)
			
		if err != nil {
		    c.JSON(http.StatusNotFound, gin.H{"error": "todo not found"})
		    return
		}
		
		c.JSON(http.StatusOK, todo)
	}
}

func UpdateToDoHandler(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		
		var todo models.Todo
		if err := c.ShouldBindJSON(&todo); err != nil {
		    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		    return
		}
		
		id := c.Param("id")

		_, err := db.Exec("UPDATE todos SET title=$1, description=$2, status=$3 WHERE id=$4", todo.Title, todo.Description, todo.Status, id)
		
		if err != nil {
		    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		    return
		}
     	      	
      	c.JSON(http.StatusOK, todo)
	}
}

func DeleteToDoHandler(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		id := c.Param("id")
		
		_, err := db.Exec("DELETE FROM todos WHERE id = $1", id)
		
		if err != nil {
		    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		    return
		}
		
		c.JSON(http.StatusOK, gin.H{"message": "todo deleted"})
	}
}