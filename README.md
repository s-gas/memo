# memo

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)

Full stack JWT-based authentication system built with React, Express and MongoDB.

## How to run

Clone the repository and change to its directory:

```bash
git clone https://github.com/s-gas/memo.git
cd memo
```

Install the dependencies:

```bash
cd web
npm install
cd ../api
npm install
```

Create an `.env` file in the `api` directory:

```bash
touch .env
```

Open the file and set up the environment variables:

```bash
PORT=3000
MONGODB_URL=<mongodb_url>
SECRET=<secret>
```

Run the backend:

```bash
npm run dev
```

Run the frontend:

```bash
cd ../web
npm run dev
```
