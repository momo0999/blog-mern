# Blog and photo gallery

> This is a [blog and photo gallery app](https://mernstack-blog.herokuapp.com/ 'blog and photo gallery app') build with the MERN stack & Redux.

![Blog and photo gallery](./uploads/blogProject.png)

## Features

- Read articles
- Explore photos
- Blog search feature
- Admin blog and photo management
- Database seeder (blogs, images and users)

## Usage

1. You should install [docker](https://docs.docker.com/get-docker/) to be able to provision the database.
1. On linux you might need to install [docker-compose](https://docs.docker.com/compose/install/) as well.
1. This project uses [npm](https://www.npmjs.com/) package manager.

## ES Modules in Node

I use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error.

## Env Variables

Create your .env file in the root of the repo, make use of the variables in the .env.example file.

###

## Install Dependencies (backend & client)

```bash
npm install
cd client
npm install
```

## Run

```
 # Run client (:3000) & backend (:5000)
 npm run dev

 # Run backend only
 npm run server
```

### For the backend:

1. You can run the database by running docker-compose up
1. You terminate mongoDB server docker-compose down
1. ### Seed Database:

   You can use the following to seed the database with some sample users, blogs and images as well as destroy all data.

   ```
   # Import data
   npm run data:import

   # Destroy data
   npm run data:destroy
   ```

   ```
   Sample user admin Login

   admin@example.com(com) (Admin)
   123456
   ```
