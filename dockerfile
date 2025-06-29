# ---- Build stage -------------------------------------------------
FROM node:20-alpine3.19.2 AS builder

WORKDIR /app

# Copy lock-file & package.json first for better Docker cache hits
COPY package*.json ./

# Install exactly the versions in package-lock.json
RUN npm ci --omit=dev=false

# Copy the rest of the project
COPY . .

# Build the extension (places output in /app/dist + /app/dist/src)
RUN npm run build

# ---- Final stage -------------------------------------------------
# If you just want the built files, uncomment below to create
# an *extremely* small image (distroless with only the output).
#
# FROM scratch AS final
# COPY --from=builder /app/dist /dist
# CMD ["/bin/sh"]  # (container exits immediately; dist is in /dist)

# For most users, just keep the builder image so you can run npm scripts.
CMD ["npm", "run", "watch"]   # hot-reload build inside the container
