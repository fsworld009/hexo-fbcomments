hexo-fbcomments
===============

A simple way to add facebook comments support to a theme's articles.

Usage
-----

Install the plugin, and setup the config properly. If there is no configuration, the plugin will do nothing.

The theme needs to call a ```<%- fbcommentshead() %>``` on body (right after the opening body tag) and ```<%- fbcomments(url) %>``` on the place that you want the comments to appear.

Configuration
-------------

Put the following code inside your _config.yml. Change values as needed.

``` yml
# Enable facebook comments
fbcomments:
  enabled: true
  lang: en_US
  appId: 0
  numPosts: 20
```

Parameters

* **appId** (required) the AppID responsible for the comments
* **enabled** (optional) enable/disable your plugin in a pinch (default: true)
* **lang** (optional) the language to serve the facebook comments (default: en_GB)

The following parameters are for comment plugin settings, check [Official Documentation](https://developers.facebook.com/docs/plugins/comments/) for setting descriptions and their defaults.

| parameter | Comment plugin setting name |
| --- | --- |
| **colorscheme** | colorscheme |
| **mobile** | mobile |
| **orderBy** | orderby |
| **numPosts** | num_posts |
| **width** | width |

More
----
More information about the facebook comments plugin on the [Official Documentation](https://developers.facebook.com/docs/plugins/comments)

Author
------
Created and mantained by Sergio Moura.  
Nov.14.2017: Updated against latest comment plugin settings by WorldFS

License
-------
**MIT**