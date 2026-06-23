#build
FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

COPY . .

RUN bun run build


#prod
FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["bun", "run", "start"]