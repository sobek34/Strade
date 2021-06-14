$(document).ready(function () {
    $('#delete_button').click(function () {
       
       var data = {};
            data.id = document.getElementById('id_del').value
            
  console.log(JSON.stringify(data))
            $.ajax({
            url: "/del",
            type: "DELETE",
            contentType: "application/json",
             data: JSON.stringify(data),
              dataType: 'json',
            success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
        });
    });
});
