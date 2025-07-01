const { json } = require("express");
const express = require("express");
const app = require(express);

app.use(express,json());

require('dotenv').config();
