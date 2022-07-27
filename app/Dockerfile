FROM public.ecr.aws/bitnami/node:14

COPY . ./

RUN npm i

EXPOSE 5000
CMD [ "node", "server.js" ]