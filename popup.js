     document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('search');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'https://cse.google.com/cse/publicurl?cx=002438850917420784790:eq2rhwn-omy';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);


 /*   <script>
        (function() {
            var cx = '002438850917420784790:eq2rhwn-omy';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
          })();
    </script>
    <gcse:search></gcse:search>
    */