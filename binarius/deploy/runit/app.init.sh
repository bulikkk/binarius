#!/bin/bash

set -e

sudo service postgresql start

loger 'Running app migrations...'

python ${APP_HOME}/manage.py syncdb --noinput || exit 1

loger 'Starting app...'