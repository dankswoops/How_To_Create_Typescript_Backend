[Markdown Guide](https://markdown-it.github.io/)

# How to create a typescript server
[Video Guide](https://www.youtube.com/watch?v=HvxYkugp55A)
Create backend folder

  mkdir backend

Change directory backend

  cd backend

Create compiled output folder

  mkdir dist

Create uncompiled in folder

  mkdir src

Create project seed

  npm init -y

Update `package.json`

  {
    "name": "backend",
    "version": "0.00",
    "main": "src/index.ts",
    "type": "module",
    "scripts": {
      "start": "tsc && node dist/index.js"
    },
    "keywords": [],
    "license": "ISC"
  }

Install typescript globally

  npm i -g typescript

Create file that configures the compiling

  npx tsc --init

Update `tsconfig.json`

  {
    "compilerOptions": {
      "target": "ES2022",
      "module": "NodeNext",
      "moduleResolution": "NodeNext",
      "rootDir": "./src",
      "outDir": "./dist",
      "strict": true,
      "removeComments": true,
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true
    }
  }

Create password file

  touch .env

Update `.env / update user pass and cluster`

  MONGO_URL='' ASK FOR TEAM PASSWORD OR SIGN UP TO MONGO DB FOR FREE
  PORT='3001'

Create the main backend file

  touch src/index.ts

Update `src/index.ts`

  import express, { Request, Response } from "express";
  import mongoose from "mongoose";
  import dotenv from "dotenv";
  dotenv.config();
  const app = express();
  /* MONGOOSE SETUP */
  const PORT: string | number = process.env.PORT || 3002;
  mongoose
    .connect(process.env.MONGO_URL!, {
    } as mongoose.ConnectOptions)
    .then(() => {
      app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error: any) => console.log(`${error} did not connect`));

Install packages and typescript packages

  npm i express dotenv mongodb mongoose @types/express @types/mongodb @types/mongoose

Test setup, CTRL + C to stop

  npm run start
