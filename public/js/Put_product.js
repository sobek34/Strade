$(document).ready(function () {
    $('#put_button').click(function () {
       
       var data = {};
            data.id = document.getElementById('id_product').value
            data.model=document.getElementById('model').value
            data.id_order=document.getElementById('id_order').value
            data.data_start=document.getElementById('data_start').value
  console.log(JSON.stringify(data))
            $.ajax({
            url: "/put_product",
            type: "PUT",
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