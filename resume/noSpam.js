function noSpam1(user, domain) {
	document.location = 'mailto:' + user + '@' + domain;
	}

function noSpam2(user, domain, subject) {
	document.location = 'mailto:' + user + '@' + domain + '?subject=' + subject;
	}

