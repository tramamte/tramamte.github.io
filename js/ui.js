(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        //content  = document.getElementById('content'),
        menuBg   = document.getElementById('menuBg'),
        mask     = document.getElementById('mask');

    function toggleClass(element, name) {
        var list = element.classList,
            length = list.length,
            i = 0
        
        if (length !== 0 && list.contains(name)) {
            list.toggle(name, false);
        }

        if (length === list.length) {
            list.add(name);
        } 

        if (list.length === 0) {
            element.removeAttribute('class');
        } else {
            element.classList = list;
        }

        /*
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === name) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(name);
        }
   
        if (classes.length === 0) {
            element.className = '';
        } else {
            element.className = classes.join(' ');
        }
        */
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
        toggleClass(menuBg, active);
        toggleClass(mask, active);
    }

    menuLink.onclick = function (e) {
        toggleAll(e);
    };

    /*
    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };
    */

    mask.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

}(this, this.document));
