# Budowanie obrazu:
#   $ docker build --force-rm --rm -t binarius .
# Uruchamianie:
#   $ docker run --name binarius --rm -p "8080:80" binarius
# Inne komendy:
#   $ docker exec -it binarius pstree
#   $ docker run --rm -it binarius bash

FROM registry.redefine.pl/base/baseimage-python2.7:ubuntu_my-init-14.04


ENV APP_ENV=${APP_ENV:-prod}
ENV APP_PORT=${APP_PORT:-80}
ENV APP_HOME=${APP_HOME:-/opt/app}

# Let the conatiner know that there is no tty
ENV DEBIAN_FRONTEND=noninteractive

ARG APP_DATA_VOLUME=/mnt/reports
ARG APP_LOG_PATH=$APP_HOME/logs
ARG APP_RUN_PATH=$APP_HOME/run
ARG APP_USER=www-data
ARG APP_PRE_SETUP=/etc/my_init.d
ARG APP_RUNIT_PATH=/etc/service
ARG APP_NGINX_CONFIG=/etc/nginx
ARG APP_NGINX_LOG=$APP_LOG_PATH/nginx

# Avoid ERROR: invoke-rc.d: policy-rc.d denied execution of start
RUN echo "#!/bin/sh\nexit 0" > /usr/sbin/policy-rc.d

ADD requirement_pip.txt $APP_HOME/

# Set the working directory to /app
WORKDIR $APP_HOME

RUN pip install -r requirement_pip.txt
ADD . $APP_HOME


RUN mkdir -p $APP_DATA_VOLUME $APP_LOG_PATH $APP_RUN_PATH $APP_NGINX_LOG $APP_RUNIT_PATH/nginx $APP_RUNIT_PATH/uwsgi
RUN chown -R $APP_USER:$APP_USER $APP_DATA_VOLUME $APP_LOG_PATH $APP_RUN_PATH $APP_NGINX_LOG $APP_NGINX_CONFIG $APP_RUNIT_PATH $APP_PRE_SETUP
RUN chmod +x $APP_HOME/deploy/runit/*

RUN rm $APP_NGINX_CONFIG/sites-enabled/default
RUN rm $APP_NGINX_CONFIG/sites-available/default

RUN ln -s $APP_HOME/deploy/config/nginx-app.conf $APP_NGINX_CONFIG/sites-available/
RUN ln -s /etc/nginx/sites-available/nginx-app.conf $APP_NGINX_CONFIG/sites-enabled/

RUN ln -s $APP_HOME/deploy/runit/nginx.run.sh $APP_RUNIT_PATH/nginx/run
RUN ln -s $APP_HOME/deploy/runit/uwsgi.run.sh $APP_RUNIT_PATH/uwsgi/run
RUN ln -s $APP_HOME/deploy/runit/app.init.sh $APP_PRE_SETUP/app.init.sh

EXPOSE $APP_PORT

CMD ["/sbin/my_init"]
