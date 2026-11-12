# Update united Docker Instances
echo "Updating united..."
git pull
docker compose pull
docker compose up -d --remove-orphans
echo "Successfully updated united."