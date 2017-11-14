/**
 * hexo-fbcomments
 *
 * Embbed facebook comments on your posts
 * Syntax: <%- fbcomments() %> on the place of the comment and <%- fbcommentshead() %> on the head of the page.
 * Set the following config on your _config.yml file (change the values to your needs):

# Enable facebook comments
fbcomments:
  enabled: true
  lang: pt_BR
  appId: 00000000
  numPosts: 5

 */

(function(helper) {
	var config = null;

	function initConfig() {
		if (!hexo.config.fbcomments) {
            config = { enabled: false };
            return;
			//return(false);
		}

		config = hexo.config.fbcomments;
		config.enabled = config.enabled || true;
		// if (config.enabled === false)
		// 	return(false);

		config.lang = config.lang || 'en_US';
		config.appId = config.appId || 0;	// This option MUST be set. TODO: Raise error.
        config.numPosts = config.numPosts;
        
        
		// return(true);
	}

	function fbcommentshead() {
        if(!config){
            initConfig();
        }
		if(!config.enabled) return("");

		var tag = '<div id="fb-root"></div>';
		tag += '<script>(function(d, s, id) {';
		tag += 'var js, fjs = d.getElementsByTagName(s)[0];';
		tag += 'if (d.getElementById(id)) return;';
		tag += 'js = d.createElement(s); js.id = id;';
		tag += 'js.src = "https://connect.facebook.net/';
		tag += config.lang; // Language
		tag += '/sdk.js#xfbml=1&version=v2.11&appId=';
		tag += config.appId + '";';	// AppID
		tag += 'fjs.parentNode.insertBefore(js, fjs);';
		tag += "}(document, 'script', 'facebook-jssdk'));</script>";

		return tag;
	}

	function fbcomments(permaLink) {
        if(!config){
            initConfig();
        }
        if(!config.enabled) return("");

		permaLink = permaLink || "err";

		var ret = '<section id="comments">';
		ret += '<div class="fb-comments" data-href="';
		ret += permaLink;
        ret += config.numPosts? ('" data-numposts="' + config.numPosts) : '';
        ret += config.colorscheme? ('" data-colorscheme="' + config.colorscheme) : '';
        ret += config.mobile? ('" data-mobile="' + config.mobile) : '';
        ret += config.orderBy? ('" data-order-by="' + config.orderBy) : '';
        ret += config.width? ('" data-width="' + config.width) : '';
		ret += '"></div>';
		ret += '</section>';

        
		return(ret);
	}

	helper.register('fbcomments', fbcomments);
	helper.register('fbcommentshead', fbcommentshead);
})(hexo.extend.helper);

