#!/usr/bin/python3.4
import logging.config
import os
import yaml

def setup():
    path = 'logger/config.yaml'
    if os.path.exists(path):
        with open(path, 'rt') as f:
            configulation = yaml.load(f.read())
            logging.config.dictConfig(configulation)
    else:
        logging.basicConfig(level=logging.DEBUG)