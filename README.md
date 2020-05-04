# Irregular

## Instalation

1. Install dependencies

```sh
npm install
```

2. Copy environment file

```sh
cp src/environments/environment.example.ts src/environments/environment.ts
```

## Docker to deploy

1. Copy environment file

```sh
cp src/environments/environment.example.ts src/environments/environment.prod.ts
```

2. Pull image

```sh
docker pull andreysenov/firebase-tools
```

3. Execute image

```sh
docker run --name firebase -d -p 9005:9005 -v ${PWD}:/usr/src andreysenov/firebase-tools tail -f /dev/null
```

4. Enter the container

```sh
docker exec -it firebase sh
```

5. Login in firebase

```sh
firebase login
```

6. Deploy application

```sh
firebase deploy --project <alias_or_project_id>
``` 
