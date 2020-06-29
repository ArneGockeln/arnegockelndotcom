var _paq = window._paq || [];
    _paq.push(['requireConsent']);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="https://analytics.gockeln.com/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '7']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
    function checkGDPR() {
      if ( document.cookie.indexOf('mtm_consent=') == -1 ) {
          $('div#gdpralert').slideDown().removeClass('hide');
      }
    }
    checkGDPR();
    $('div#gdpralert span.btn-agree').on('click', function(e) {
      _paq.push(['rememberConsentGiven']);
      $('#gdpralert').slideUp();
    });