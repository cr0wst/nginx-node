# nginx-node
[![Build Status](https://travis-ci.org/cr0wst/nginx-node.svg?branch=master)](https://travis-ci.org/cr0wst/nginx-node)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/nginx-node.svg)](https://badge.fury.io/js/nginx-node)


Node module for working with nginx as a proxy server.  Assists in writing conf.d configuration files (requires permissions to the conf.d directory).  Ability to restart nginx through sudo (requires password-less sudo permissions to /etc/init.d/nginx).

# General Idea
I currently host several Node.js Express apps on one server using multiple ports.  I use nginx as a proxy server which maps virtuals hosts to the different ports.  This module was created to assist in working with the nginx portion of my setup.

# Provided services
The following services are provided:
## ServerService
Allows for working with the server process.  It facilitates starting, stopping, and restarting nginx through init.d.  This requires sudo access to the init.d nginx process.  This can be done by adding a file to the /etc/sudoers.d folder:

The following must be done as root, replacing __nodeUsername__ with the user that will be running the node process:
```sh
cd /etc/init.d/
touch nodesudoaccess
echo "nodeUsername ALL=/etc/init.d/nginx" >> nodesudoaccess
echo "nodeUsername ALL=NOPASSWD: /etc/init.d/nginx" >> nodesudoaccess
```

This will allow the node process to have access to a non-prompt sudo command only for the nginx process.  It will not give access to other processes.

# In Development Services
## SiteService
Site service will allow for manipulation of the configuration directory to add, modify, and remove sites.  This will enable me to programmatically manipulate the sites that nginx is routing to:
### Example setup for nginx routing:
App # | Port | URL
------|------|-----
1     | 3001 | example.com
2     | 3002 | another.example.com
3     | 3003 | athirdexample.com

I have an nginx config file for each of those URLs with a mapping to which port the Express app is running on.  I will be using the nginx-conf module for manipulating the configuration files: https://github.com/tmont/nginx-conf

# Pull Requests
Pull requests are more than welcome.  I'm still new to NodeJS and Javascript development, and welcome any comments to improve things.  All code must pass **JavaScript Standard Style** linting: http://standardjs.com/rules.html
