(function() {

  const serverUrl = 'http://127.0.0.1:3000';

 window.ajaxSwim = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl, //url of database
      success: (res) => (SwimTeam.move(res)), //console.log('success!');
      complete: () => setTimeout(ajaxSwim, 100)
    });
  };

  setTimeout(ajaxSwim, 0);


  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'FILL_ME_IN', //url of database
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
