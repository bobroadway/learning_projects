#!/usr/bin/python3.4
import logging.config
import os
import yaml

def setup():
    print("in init_logger.setup()")
    path = 'logger/config.yaml'
    if os.path.exists(path):
        print("path exists")
        with open(path, 'rt') as f:
            configulation = yaml.load(f.read())
            logging.config.dictConfig(configulation)
    else:
        print("path does not exist")
        logging.basicConfig(level=logging.DEBUG)