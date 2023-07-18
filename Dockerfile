FROM node:18-alpine3.15 as builder-theme
WORKDIR /app
COPY . /app
RUN cd cqgc-theme/ && npm install && npm run keycloak

FROM maven:3-adoptopenjdk-11 as builder-providers
WORKDIR /app
COPY . /app
RUN cd cqgc-providers/ && mvn clean package -DskipTests


FROM quay.io/keycloak/keycloak:21.1.2

ENV KC_DB=postgres
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true
ENV KC_HTTP_ENABLED=true
ENV KC_CACHE=local
ENV KC_HOSTNAME_DEBUG=true
ENV KC_HOSTNAME_STRICT=false
ENV KC_HOSTNAME_STRICT_HTTPS=false

WORKDIR /opt/keycloak

COPY clin-blacklist.txt /opt/keycloak/data/password-blacklists/clin-blacklist.txt 
COPY --from=builder-providers /app/cqgc-providers/target/bio.ferlab.keycloak.cqgc-keycloak-ext.jar /opt/keycloak/providers
COPY --from=builder-theme /app/cqgc-theme/build_keycloak/src/main/resources/theme/keycloakify-cqgc-app /opt/keycloak/themes/keycloakify-cqgc-app
COPY cqgc-old-theme/ /opt/keycloak/themes/clin-keycloak-theme

RUN /opt/keycloak/bin/kc.sh build

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]