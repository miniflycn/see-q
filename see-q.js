!function () {
    var $ = require('jquery'),
        curr;

    function walk(nodes, cb) {
        nodes.forEach(function (node) {
            cb(node);
            if (node.childNodes && node.childNodes.length) {
                walk([].slice.call(node.childNodes, 0), cb);
            }
        });
    }

    function deal(node) {
        $(node).hover(function () {
            node.style.outline = '2px solid red';
            curr = node;
        }, function () {
            node.style.outline = '';
        });
    }

    walk([document.body], function (node) {
        if ($(node).data('QI')) {
            deal(node);
        }
    });

    var tools = document.createElement('div');
    tools.innerHTML = '<b id="component-name"></b>&nbsp;<span>Q：打印Q对象</span>';
    tools.style.position = 'absolute';
    tools.style.top = '0';
    tools.style.left = '0';
    tools.style.background = 'white';
    document.body.appendChild(tools);

    $(document)
        .on('keydown', function (e) {
            if (e.which === 81 && curr) {
                console.log($(curr).data('QI'));
            }
        });

}()