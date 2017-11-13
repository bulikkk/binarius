#!/bin/bash

set -e

loger 'Running app tests...'
python ${APP_HOME}/manage.py test || exit 1

loger 'Starting app...'