.PHONY: help dev build run stop clean logs install-deps

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

dev: ## Start development servers
	cd backend && npm install && npm run dev &
	cd frontend && npm install && npm run dev

dev-single: ## Start development server and API
	cd backend && npm install && npm run dev &
	cd frontend && npm install && npm run dev

build: ## Build Docker images
	docker-compose build --no-cache

run: ## Start all services in detached mode
	docker-compose up -d

run-detached: ## Start all services detached
	docker-compose up -d

stop: ## Stop all running containers
	docker-compose down

stop-all: ## Stop all containers including volumes
	docker-compose down -v

restart: ## Restart all services
	@make stop
	@make run

logs: ## Show logs from all services
	docker-compose logs -f

logs-backend: ## Show logs from backend service
	docker-compose logs -f backend

logs-frontend: ## Show logs from frontend service
	docker-compose logs -f frontend

clean: ## Remove containers and images
	docker-compose down
	docker system prune -f

clean-deep: ## Remove everything including volumes and build cache
	docker-compose down -v
	docker system prune -a --volumes -f

install: ## Install dependencies for both frontend and backend
	cd backend && npm install
	cd frontend && npm install

test: ## Run tests (if any exist)
	@echo "No tests configured yet"

lint: ## Run linter (if configured)
	@echo "No linting configured yet"

update: ## Update dependencies
	cd backend && npm update
	cd frontend && npm update