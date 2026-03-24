package router

import (
    "github.com/gin-gonic/gin"
    "todo_api/handlers"
    "database/sql"
)

func SetupRouter(db *sql.DB) *gin.Engine {
	
	var router *gin.Engine = gin.Default()
		router.SetTrustedProxies(nil)
		router.GET("/", func(c *gin.Context) {
			// map[string]interface{}
			// map[string]any{}
			c.JSON(200, gin.H{
				"message":  "Todo API is running well!",
				"status":   "success",
				"database": "connected",
			})

		})	
    
	protected := router.Group("/todos")
	
		protected.POST("", handlers.CreateTodoHandler(db))
		protected.GET("", handlers.GetAllTodosHandler(db))
		protected.PUT("/:id", handlers.UpdateToDoHandler(db))
		protected.DELETE("/:id", handlers.DeleteToDoHandler(db))
		protected.GET("/:id", handlers.GetToDoByIDHandler(db))
		
	return router
}