function tab(_title, _content)
{
    var last;
    $('#' + _title).children().each(function (index)
    {
        if (index == 0) last = this; //第一个last为第一个title
        $(this).unbind('click').click(function ()
        {
            $(last).removeClass("this");
            $(this).addClass("this");

            last = this;

            toggleContent(index);
        });
    });

    function toggleContent(_index)
    {
        $("#" + _content).children().each(function (index)
        {
            if (index == _index) $(this).show();
            else $(this).hide();
        });
    }
}

tab("title", "content");