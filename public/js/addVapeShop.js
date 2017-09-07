$(document).ready(function () {
    $('#AddVapeShopButton').on('click', (event) => {
        event.preventDefault();
        if ($.trim($('#shop-latitude').value()).length > 0) {
            $('#addVapeForm').submit();
        }
        else {
            alert('Укажите точку на карте');
        }
    })

}