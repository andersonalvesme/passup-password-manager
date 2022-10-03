$.notifyDefaults({
    delay: 5000,
    offset: {
        x: 65,
        y: 46
    },
    z_index: 10000,
    mouse_over: 'pause',
    animate: {
        enter: 'animated fadeIn',   //'animated fadeIn',
        exit: 'animated fadeOut'    //'animated fadeOut'
    },
    placement: {
        from: "bottom",
        align: "left"
    },
    template:
        '<div data-notify="container" class="alert alert-{0} alert-dismissible">' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
        '</div>'
});

$.blockUI.defaults = {
    // message displayed when blocking (use null for no message)
    message: '<div class="loader"></div>',
    title: null,        // title string; only used when theme == true
    draggable: true,    // only used when theme == true (requires jquery-ui.js to be loaded)
    theme: false, // set to true to use with jQuery UI themes
    // styles for the message when blocking; if you wish to disable
    // these and use an external stylesheet then do this in your code:
    // $.blockUI.defaults.css = {};
    css: {
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%',
        /*top:            '40%',
        left:           '35%',*/
        textAlign: 'center',
        color: '#000',
        border: 'none',
        backgroundColor: 'none',
        cursor: 'wait'
    },

    // minimal style set used when themes are used
    /*themedCSS: {
        width:  '30%',
        top:    '40%',
        left:   '35%'
    }, */

    // styles for the overlay
    overlayCSS: {
        backgroundColor: '#fff',
        opacity: 0.6,
        cursor: 'wait'
    },

    // style to replace wait cursor before unblocking to correct issue
    // of lingering wait cursor
    cursorReset: 'default',

    // styles applied when using $.growlUI
    growlCSS: {
        width: '350px',
        top: '10px',
        left: '',
        right: '10px',
        border: 'none',
        padding: '5px',
        opacity: 0.6,
        cursor: null,
        color: '#fff',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px'
    },

    // IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
    // (hat tip to Jorge H. N. de Vasconcelos)
    iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

    // force usage of iframe in non-IE browsers (handy for blocking applets)
    forceIframe: false,

    // z-index for the blocking overlay
    baseZ: 1000,

    // set these to true to have the message automatically centered
    centerX: true, // <-- only effects element blocking (page block controlled via css above)
    centerY: true,

    // allow body element to be stetched in ie6; this makes blocking look better
    // on "short" pages.  disable if you wish to prevent changes to the body height
    allowBodyStretch: true,

    // enable if you want key and mouse events to be disabled for content that is blocked
    bindEvents: true,

    // be default blockUI will supress tab navigation from leaving blocking content
    // (if bindEvents is true)
    constrainTabKey: true,

    // fadeIn time in millis; set to 0 to disable fadeIn on block
    fadeIn: 200,

    // fadeOut time in millis; set to 0 to disable fadeOut on unblock
    fadeOut: 200,

    // time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
    timeout: 0,

    // disable if you don't want to show the overlay
    showOverlay: true,

    // if true, focus will be placed in the first available input field when
    // page blocking
    focusInput: true,

    // suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
    // no longer needed in 2012
    // applyPlatformOpacityRules: true,

    // callback method invoked when fadeIn has completed and blocking message is visible
    onBlock: null,

    // callback method invoked when unblocking has completed; the callback is
    // passed the element that has been unblocked (which is the window object for page
    // blocks) and the options that were passed to the unblock call:
    //   onUnblock(element, options)
    onUnblock: null,

    // don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
    quirksmodeOffsetHack: 4,

    // class name of the message block
    blockMsgClass: 'blockCustom',

    // if it is already blocked, then ignore it (don't unblock and reblock)
    ignoreIfBlocked: false
};

$.fn.dataTable.ext.errMode = 'none';

$.extend(
    true,
    $.fn.dataTable.defaults, {
        serverSide: true,
        processing: false,
        dom: "<'row'<'col-9'f><'col-3'B>>" +
            "<'row'<'col-12'tr>>" +
            "<'card-footer d-flex align-items-center'ip>",
        // dom: "frtip", // "lfrtip",
        oLanguage: {
            // "sEmptyTable": "Nenhum registro encontrado",
            // "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            // "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            // "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            // "sInfoPostFix": "",
            // "sInfoThousands": ".",
            // "sLengthMenu": "_MENU_ resultados por página",
            // "sLoadingRecords": "Carregando...",
            // "sProcessing": "",
            // "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "",
            "sSearchPlaceholder": "Search...",
            "oPaginate": {
                "sNext": '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><polyline points="9 6 15 12 9 18"></polyline></svg>',
                "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><polyline points="15 6 9 12 15 18"></polyline></svg>',
            //     "sFirst": "Primeiro",
            //     "sLast": "Último"
            },
            // "oAria": {
            //     "sSortAscending": ": Ordenar colunas de forma ascendente",
            //     "sSortDescending": ": Ordenar colunas de forma descendente"
            // }
        }
    });

function number_format(number, decimals, dec_point, thousands_sep) {
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}

function capitalize(str, force) {
    str = force ? str.toLowerCase() : str;
    return str.replace(/(\b)([a-zA-Z])/g,
        function (firstLetter) {
            return firstLetter.toUpperCase();
        });
}

function copy(element, value) {
    let _ptmp = $('<input>');
    element.append(_ptmp);
    _ptmp.val(value).select();
    document.execCommand("copy");
    _ptmp.remove();
    return true;
}
