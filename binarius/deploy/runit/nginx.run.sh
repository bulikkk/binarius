#!/bin/bash

set -e

exec /usr/sbin/nginx -c ${APP_HOME}/deploy/config/nginx.conf