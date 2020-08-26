#!/bin/bash

set -e

YARN_DIR = yarn global bin

export PATH=$PATH:/usr/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$YARN_DIR

if [ -z "$@" ]; then
  #exec /usr/bin/supervisord -c /etc/supervisor/supervisord.conf --nodaemon
  exec /bin/bash
else
  exec $@
fi
