# workshop-docker-k8s
Source code for our Docker + Kubernetes workshop

## Dockerfile Frontend

```dockerfile
FROM node:16
EXPOSE 3000
WORKDIR /srv/todo-app
ADD . /srv/todo-app
RUN yarn
ENV NODE_ENV production
CMD ["yarn", "start"]
```

## Dockerfile API

```dockerfile
FROM node:12 
EXPOSE 3000
WORKDIR /srv/todo-api
ADD . /srv/todo-api
RUN yarn
ENV NODE_ENV production
CMD ["yarn", "start:db"]
```