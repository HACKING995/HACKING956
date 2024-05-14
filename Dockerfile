FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*
  
RUN git clone https://github.com/HACKING995/HACKING956.git /root/zokou_BOt
WORKDIR /root/zokou_Bot/


COPY package.json .
RUN npm install 
COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
