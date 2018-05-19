(function (mail) {
    mail.noSpam = function (user, domain, subject) {
        var location;
        if (user && domain) {
            location = 'mailto:' + user + '@' + domain;
            if (subject) {
                location = location + '?subject=' + subject;
            }
            document.location = location;
        } else {
            throw new Error('user or domain cannot be empty!');
        }
    }
    return mail;
})(window.mail = window.mail || {});
