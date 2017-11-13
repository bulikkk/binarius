#!/bin/bash

set -e

exec uwsgi --ini ${APP_HOME}/deploy/config/uwsgi.ini