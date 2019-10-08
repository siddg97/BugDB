#!/bin/bash

PID=$(lsof -t -i :5000 -s TCP:LISTEN)

kill -9 $PID
echo "[PORT:5000]: Now available to use!"
