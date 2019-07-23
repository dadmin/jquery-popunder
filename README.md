jquery-popunder
=====

**jquery-popunder** is a jquery-plugin to create popunder in major browsers. This is jquery-popunder commonjs implementation.

Usage
-----

Popunders are popups which are opened in the background of a browser-window.
This script will only work, if the popunder is opened on a user-generated event (e.g. click or submit).

For examples and usage documentation, take a look at the index.html.

The recommended usage is the first example: a function to build the url-stack.
So you leave the event-handling to the plugin. To add some flexibility to the function, the plugin will pass the initial event to the function - from which you may access e.g. DOM-data of the activated DOM-element.

Options
-------
All of the options are optional!

<pre>
{
    "cookie": "__puc",     The cookie-name (optional, used for blocking a popunder)
    "name": "__pu",        The window-name (optional)
    "blocktime": false,    The time to block popunder, in minutes
    "window": {
        "height": ..       The width of the popunder
        "width": ..        The height of the popunder
        ..: ..             more window.open-parameters ..
    },
    "skip": {              UA-Patterns to skip (needs to be a known ua!)
        "opera": true
    },
    "cb": null             Callback, after a popunder has been opened (if a function)
}
</pre>
    
Compatibility
-------

jquery-popunder was tested with:
- Mozilla Firefox 3-67
- Google Chrome 10-75
- Microsoft Internet Explorer 6-11, edge

Known Issues
-------
- chrome 45+ & linux is covered by moving the originating website into a new tab, leaving the popunder on the first one
- in Firefox, when the setting: 'Open new windows in a new tab instead' is deactivated

Installation
-------
With yarn and save dependency (```-S``` flag) in package.json:
```shell
    yarn add @codevadmin/jquery-popunder@latest -S
```
With npm and save dependency (```-S``` flag) in package.json:
```shell
    npm i @codevadmin/jquery-popunder@latest -S
```
Without any package manager. Just copy ```dist/jquery.popunder.min.js``` to your library folder.

Usages with Webpack
-------
```
    import $ from '@codevadmin/jquery-popunder';

    $(() => {
        $.popunder();
    });
```

Dependencies
-------
- (optional) jquery (http://www.jquery.com)
- (optional) js-cookie (https://github.com/js-cookie/js-cookie)
