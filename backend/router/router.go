package router

import (
    "github.com/gin-gonic/gin"
    "todo_api/handlers"
    "database/sql"
    "github.com/gin-contrib/cors"
)

func SetupRouter(db *sql.DB) *gin.Engine {

    router := gin.Default()
    router.SetTrustedProxies(nil)
    router.Use(cors.New(cors.Config{
        AllowOrigins: []string{"http://localhost:5173"},
        AllowMethods: []string{"GET", "POST", "PUT", "DELETE"},
        AllowHeaders: []string{"Content-Type"},
    }))

    router.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message":  "Todo API is running well!",
            "status":   "success",
            "database": "connected",
        })
    })

    todos := router.Group("/todos")
    todos.POST("", handlers.CreateTodoHandler(db))
    todos.GET("", handlers.GetAllTodosHandler(db))
    todos.PUT("/:id", handlers.UpdateToDoHandler(db))
    todos.DELETE("/:id", handlers.DeleteToDoHandler(db))
    todos.GET("/:id", handlers.GetToDoByIDHandler(db))

    return router
}