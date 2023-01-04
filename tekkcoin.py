#!/usr/bin/env python3
import json
import hashlib
import base64
import requests
from json import loads, dumps
from hashlib import sha256
from base64 import b64encode, b64decode
from requests import get, post

class TekkcoinTransaction:
  def __init__(self, sender, recipient, amount, metadata={}):
    self.sender = sender
    self.recipient = recipient
    self.amount = amount
    self.metadata = metadata

  def to_json(self):
    return {
      "sender": self
    }