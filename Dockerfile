FROM node:lts-alpine

COPY ./* /usr/app/

CMD ["node"]

