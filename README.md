# node-nginx
Node module for working with nginx as a proxy server.  Assists in writing conf.d configuration files (requires permissions to the conf.d directory).  Ability to restart nginx through sudo (requires password-less sudo permissions to /etc/init.d/nginx).

# General Idea
I currently host several Node.js Express apps on one server using multiple ports.  I use nginx as a proxy server which maps virtuals hosts to the different ports.  This app was created to help keep track of which ports are being used and which servers are online.  

The various services can be used to (some of these may be split into other modules for reusability):
  1. Start and Stop the specified Node.js App
  2. Keep track of which ports are assigned to each App
  3. Deploy new Apps and assign sequential ports.
  4. Write configuration files for nginx.
  5. Restart nginx service.

# Example setup for nginx routing:
App # | Port | URL
------|------|-----
1     | 3001 | example.com
2     | 3002 | another.example.com
3     | 3003 | athirdexample.com

I have an nginx config file for each of those URLs with a mapping to which port the Express app is running on.
