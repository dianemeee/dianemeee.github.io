  $(document).ready(function () {
    $('#sidebarToggle').click(function () {
      $('#sidebar').toggleClass('active');
    });

    $('#closeSidebar').click(function () {
      $('#sidebar').removeClass('active');
    });
  });