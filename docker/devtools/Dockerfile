FROM node:18-alpine

# Copy your shell scripts into the container
COPY ./install.sh /install.sh
COPY ./build.sh /build.sh

# Make the scripts executable
RUN chmod +x /install.sh /build.sh

# Set working directory inside container
WORKDIR /app/clients/trip-report

# This will execute when you run `docker compose run --rm devtools`
CMD [ "/bin/sh" ]
