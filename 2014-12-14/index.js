var innerContainer = $('#inner-container');
var innerContent = $('#inner-content');
innerContainer.on('mousewheel', function(e, delta) {
    var $this = $(this);
    var scrollableDist = innerContent.height() - $this.height();
    var curScrollPos = $this.scrollTop();
    if ((delta < 0 && curScrollPos >= scrollableDist) || (delta > 0 && curScrollPos <= 0)) {
        e.preventDefault();
    }
});
