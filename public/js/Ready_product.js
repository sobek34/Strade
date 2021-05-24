function reply_click(clicked_id)
{
    var data={};
    data.id=clicked_id;
    $.ajax({
        url: "/update_arch",
        type: "PUT",
        contentType: "application/json",
         data: JSON.stringify(data),
          dataType: 'json',
        success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
    });
}