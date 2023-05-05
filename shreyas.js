$(document).ready(function() {
      var width = document.getElementById('content').offsetWidth;
      $("head").append('<style type="text/css"></style>');
      var viewPortElement = $("head").children(':last');
      viewPortElement.html('@viewport{width:' + width + 'px}');
    });
