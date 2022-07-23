# Reference to https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
# Reference to https://www.youtube.com/watch?v=Pd2tVxhFnO4

ARG VERSION=14.17-alpine

# Install dependencies only when needed
FROM node:${VERSION} AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR / 
COPY package.json ./
RUN npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:${VERSION} AS builder
WORKDIR /
COPY . .
COPY --from=deps /node_modules ./node_modules
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build


# Production image, copy all the files and run next
FROM node:${VERSION} AS runner
WORKDIR /

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /next.config.js ./
COPY --from=builder /public ./public
COPY --from=builder /package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /.next ./.next
COPY --from=builder /node_modules ./node_modules

# note:
# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]