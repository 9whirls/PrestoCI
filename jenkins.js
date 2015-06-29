jQuery(function() {
	jQuery("div.changeset-message").each(function() {
		var content = jQuery(this).html();
		content = content.replace(/\b[0-9a-f]{40}\b/g, function(x) {
			x = '<a href="https://git.eng.vmware.com/?p=presto.git;a=commitdiff;h=' + x + '" target="_blank">' + x + '</a>';
			return x;
		});
		jQuery(this).html(content);
	})
});