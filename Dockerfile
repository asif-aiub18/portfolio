FROM node:16-alpine3.14 as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .
RUN yarn build

FROM node:16-alpine3.14

COPY --from=builder /app/.next/standalone/. /app/.
COPY --from=builder /app/.next/static/. /app/.next/static/.
COPY --from=builder /app/public/. /app/public/.

WORKDIR /app

ARG PORT

ENV PORT "${PORT}"


EXPOSE "${PORT}"

CMD ["node","server.js"]

