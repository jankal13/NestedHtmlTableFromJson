var jsonStr = [{"0":{"example":"1","test":"2"},"1":{"example":"1","test":"2"},"2":{"example":"1"},"3":"1","4":[],"5":false},{"0":{"example":"1","test":"2"},"1":{"example":"1","test":"2"},"2":{"example":"1"},"3":"1","4":[],"5":false},{"0":{"example":"1","test":"2"},"1":{"example":"1","test":"2"},"2":{"example":"1"},"3":"1","4":[],"5":false},{"0":{"example":"1","test":"2"},"1":{"example":"1","test":"2"},"2":{"example":"1"},"3":"1","4":[],"5":false,"6":{"1":{"1":"1","2":"2"}}}];
var divSelector = '#tableDynamic';

function tableCreator(e, t) {
                // inner function -> inner table
                function i(e, t) {
                    var n = "";
                    var r = "";
                    var s = "";
                    s += "<tr>";
                    $.each(t[0], function (e, t) {
                        s += "<th>" + e + "</th>";
                    });
                    s += "</tr>";
                    //console.log('s: ', s);
                    //console.log('e: ', e, " | s: ", s);

                    $.each(t, function (e, t) {
                        //console.log('t: ', t);
                        //r += "<tr>";
                        $.each(this, function (e, t) {

                            var n = 1 + Math.floor(Math.random() * 90 + 10);
                            var s = $.isPlainObject(t);
                            var o = [];
                            if (s) {
                                o = $.makeArray(t);
                            }
                            if ($.isArray(t) && t.length > 0) {
                                r += "<td>"; //td
                                r += "<div><a href='#" + n + "' data-toggle='collapse' data-parent='#msgReport'><span class='glyphicon glyphicon-plus'></span></a><div id='" + n + "' class='panel-collapse collapse'>" + i(e, t) + "</div></div>";
                                r += "</td>";
                            } else {
                                if (o.length > 0) {
                                    r += "<td>"; //td
                                    r += "<div><a href='#" + n + "' data-toggle='collapse' data-parent='#msgReport'><span class='glyphicon glyphicon-plus'></span></a><div id='" + n + "' class='panel-collapse collapse'>" + i(e, o) + "</div></div>";
                                    r += "</td>";
                                } else {
                                    r += "<td>"; //td
                                    r += t;
                                    r += "</td>";
                                    console.log(t);
                                }
                            }

                        });
                        //r += "</tr>"

                    });
                    n += "<table class='table table-bordered table-hover table-condensed'><thead>" + s + "</thead><tbody>" + r + "</tbody></table>";
                    return n;
                }

                // parent table
                $(t).empty();
                $(t).append("<table id='parentTable' class='table table-bordered table-hover table-condensed'><thead></thead><tbody></tbody></table>");
                var n = "";
                var r = "";
                n += "<th>Id</th><th>Table Data</th>";
                $.each(e, function (e, t) {
                    //n += "<th>" + e + "</th>";
                    var s = 1 + Math.floor(Math.random() * 90 + 10);
                    var o = $.isPlainObject(t);
                    var u = [];
                    if (o) {
                        u = $.makeArray(t);
                    }
                    console.log("n: ",n);
                    //r += "<tr>"; //tr
                    if ($.isArray(t) && t.length > 0) {
                        r += "<tr>"; //tr
                        r += "<td>";
                        r += e;
                        r += "</td>"; //td
                        r += "<td>"; //td
                        r += "<div id='accordion'><a href='#" + s + "' data-toggle='collapse' data-parent='#msgReport'><span class='glyphicon glyphicon-plus'></span></a><div id='" + s + "' class='panel-collapse collapse'>" + i(e, t) + "</div></div>";
                        r += "</td>"; //td
                        r += "</tr>"; //tr
                    } else {
                        if (u.length > 0) {
                            r += "<tr>" //tr
                            r += "<td>";
                            r += e;
                            r += "</td>"; //td
                            r += "<td>"; //td
                            r += "<div id='accordion'><a href='#" + s + "' data-toggle='collapse' data-parent='#msgReport'><span class='glyphicon glyphicon-plus'></span></a><div id='" + s + "' class='panel-collapse collapse'>" + i(e, u) + "</div></div>";
                            r += "</td>"; //td
                            r += "</tr>"; //tr
                        } else {
                            r += "<tr>";//tr
                            r += "<td>";
                            r += e;
                            r += "</td>"; //td
                            r += "<td>"; //td
                            r += t;
                            r += "</td>"; //td
                            r += "</tr>"; //tr
                            console.log(t);
                        }
                    }
                    //r += "</tr>"; //tr

                    console.log("e: ", e, "| t: ", t);
                });
                //$("#parentTable thead").append/*(n);*/("<tr>" + n + "</tr>");
                 $("#parentTable thead").append("<tr>" + n + "</tr>");
                $("#parentTable tbody").append("<tr>" + r + "</tr>");
                $(".glyphicon ").on("click", function () {
                    var e = $(this).attr("class");
                    switch (e) {
                        case "glyphicon glyphicon-plus":
                            $(this).removeClass("glyphicon-plus").addClass("glyphicon-minus");
                            break;
                        case "glyphicon glyphicon-minus":
                            $(this).removeClass("glyphicon-minus").addClass("glyphicon-plus");
                            break;
                        default:
                    }
                });
            };

$(function(){
  tableCreator(jsonStr, divSelector);
});

