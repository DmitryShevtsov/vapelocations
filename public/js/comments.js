$(document).ready(function () {
    var comments = $('[data-comment-id]');
    comments.on('click', function (event) {
        var vapeshop = $('[data-vapeshop_id]')[0];
        var vapeshopId = $(vapeshop).data('vapeshop_id');
        var id = $(this).data('comment-id');

        $.ajax({
            url: '/vapeshop/' + vapeshopId + '/comments/' + id,
            type: 'DELETE',
            success: function() {
                $('#'+id).remove();
            }
        });
    });

    $( "#commentForm" ).submit(function(event) {
        event.preventDefault();
        var vapeshop = $('[data-vapeshop_id]')[0];
        var vapeshopId = $(vapeshop).data('vapeshop_id');
        var obj = {
          text: $('#comment-text').val()
        };

        if ($.trim($('#comment-text').val()).length > 0) {

            $.ajax({
                type: 'POST',
                url: '/vapeshop/' + vapeshopId + '/comments',
                data: obj,
                success: function (response) {
                    $('#comments').prepend('<li id=' + response.comment.id + '> <h4>' + response.user.name + '</h4> <p>' + response.comment.text + '<a href="javascript:void(0)" data-comment-id=' + response.comment.id + '> X </a></p></li>');
                    $('#comment-text').val('');

                    var comments = $('[data-comment-id]');
                    comments.on('click', function (event) {
                        var vapeshop = $('[data-vapeshop_id]')[0];
                        var vapeshopId = $(vapeshop).data('vapeshop_id');
                        var id = $(this).data('comment-id');

                        $.ajax({
                            url: '/vapeshop/' + vapeshopId + '/comments/' + id,
                            type: 'DELETE',
                            success: function() {
                                $('#'+id).remove();
                            }
                        });
                    });
                }
            });
        }
        else {
            alert("Комментарий пуст:(");
        }

    });

});