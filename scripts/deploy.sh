echo "Jump to app folder"
cd /home/ubuntu/apps/sabbi-pro-api

echo "Update app from Git"
sudo git pull

echo "Install dependencies"
sudo yarn bootstrap

echo "Build app"
sudo yarn build

echo "Migrate"
node_modules/.bin/prisma migrate deploy
node_modules/.bin/prisma generate

echo "Run new PM2 action"
sudo pm2 stop ecosystem.config.js
sudo pm2 start ecosystem.config.js
sudo pm2 restart ecosystem.config.js
