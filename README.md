[Markdown Guide](https://markdown-it.github.io/)

# Server Creation Documentation
[Video Guide](https://www.youtube.com/watch?v=HvxYkugp55A)

```
mkdir backend
```


```
cd backend
```


```
mkdir dist
```


```
mkdir src
```


```
npm init -y
```

`package.json`

```
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
```


```
npm i -g typescript
```


```
npx tsc --init
```

`tsconfig.json`

```
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
```


```
touch .env
```

`.env / update user pass and cluster`

```
MONGO_URL='mongodb+srv://databaseusername:databasepassword@Clustorname.w6phlxn.mongodb.net/?retryWrites=true&w=majority&appName=Clustorname'
PORT='3001'
```


```
touch src/index.ts
```

`src/index.ts`

```
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
```


```
npm i express dotenv mongodb mongoose @types/express @types/mongodb @types/mongoose
```


```
npm run start
```