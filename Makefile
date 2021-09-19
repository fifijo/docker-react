up:
	docker-compose -f docker-compose.yml up -d
stop:
	docker-compose -f docker-compose.yml stop
down:
	docker-compose -f docker-compose.yml down --remove-orphans
build:
	docker-compose -f docker-compose.yml build --no-cache
