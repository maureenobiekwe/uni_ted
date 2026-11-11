rm -rf ~/.united
docker compose down
docker volume rm united_redis_data
docker volume rm united_postgres_data
echo "Deleted united dockers and volumes."