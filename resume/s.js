jQuery(document).ready(function(){
    var $sections = $('#skills, #experience, #projects, #education, #courses, #publications');
    var hash = window.location.hash;
    if (hash !== '#print') {
        $('a[href="' + hash + '"]').parent().addClass('active');
        $(hash).hide().removeClass('hidden').slideDown(400);
    } else {
        $('.hidden').each(function() {
            $(this).removeClass('hidden');
        });
        window.print();
    }
    $('ul.nav a').click(function(event) {
        event.preventDefault();
        var link = this.href;
        var selected = link.substring(link.lastIndexOf('#'), link.length);
        var previous = $('li.active a').attr('href');
        $('.active').removeClass('active');
        if (selected !== '#print') {
            if (selected === previous) {
                $(this).parent().removeClass('active');
                $(selected).slideUp(400, function() {
                    $(this).addClass('hidden').show();
                });
                window.location.hash = '';
            }
            else if (selected !== previous) {
                window.location.hash = selected;
                $(this).parent().addClass('active');
                $(selected).siblings().not('#contact, #summary').slideUp(400, function() {
                    $(this).addClass('hidden').show();
                });
                $(selected).hide().removeClass('hidden').slideDown(400);
            }
        } else {
            $sections.removeClass('hidden');
            $sections.show();
            window.print();
        }
    });
});

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
