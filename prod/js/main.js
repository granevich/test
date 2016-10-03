/**
 * Created by granevich on 06.05.2016.
 */
window.onload = function () {
    var arraList = document.getElementsByTagName('li');
    var ul = document.getElementById('ul').children;
    var contentList = document.querySelectorAll('.content-wrapper');
    arraList[0].style.cssText = 'background:#aca5ff; border-right:none';
    contentList[0].classList.add('active');
    for (var i=0; i < arraList.length; i++) {
        arraList[i].onclick = function () {
            var html = this.getAttribute('id');
            for (var y = 0; y < ul.length; y++) {
                ul[y].style.background = '#52c8ff';
                ul[y].style.cssText = 'background:#52c8ff; border-right:1px solid black';
            }
            this.style.cssText = 'background:#aca5ff; border-right:none; transition: background 1s';
            for (var z = 0; z < contentList.length; z++) {
                contentList[z].classList.remove('active');
                if (html == 'item' + z) {
                    contentList[z].classList.add('active');
                }
            }
        };
    }
};
