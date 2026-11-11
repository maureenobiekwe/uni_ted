rm -rf ~/.united
rm -rf node_modules/
docker container rm united_devcontainer_db_1 --force
docker container rm united_devcontainer_redis_1 --force
docker container rm united_devcontainer_app_1 --force
docker volume rm united_devcontainer_redis_data
docker volume rm united_devcontainer_postgres_data

echo "Deleted united dev dockers and volumes."