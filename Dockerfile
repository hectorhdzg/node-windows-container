FROM mcr.microsoft.com/windows/servercore:ltsc2019


ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 14.14.0
ENV ARCH x64


RUN powershell -Command "wget -Uri https://nodejs.org/dist/v%NODE_VERSION%/node-v%NODE_VERSION%-%ARCH%.msi -OutFile nodejs.msi -UseBasicParsing"


RUN msiexec.exe /q /i nodejs.msi

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "index.js" ]