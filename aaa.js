var Allcustom = "루엘 파편 획득 확률 변화 ( -6 ~ 4 ) [100% 확률]";
//console.log(Allcustom);
var eqcustom = Allcustom.split('<br />');
var eqcustom = Allcustom.split('<br />');

var result_custom = 'null';

  var Special = "checked";
  var Reinforce = "checked";

  function Dice_roll(min, max){   //주사위 굴리기
    var diceroll = max - min + 1;
    return Math.floor(Math.random() * diceroll + min);
  }
  console.log(Allcustom)
  console.log(eqcustom)
        //console.log(Allcustom);
        var eqcustom = Allcustom.split('<br />');
        var result_custom = 'null';


        if (Allcustom === "") {
          var result_custom = "재조립할 커스텀이 없네요~_~";

        } else {
          for (var i = 0; i < eqcustom.length; i++) {

            if (eqcustom[i].indexOf('[') === -1) {
              var result_custom = "커스텀의 정보가 정확하지 않습니다." +"<br />"+"커스텀이 적용될 확률이 분명하게 표시되어있는지 확인해주세요."
            } else {
              if (eqcustom[i].indexOf("웨이블렘") == -1) {
                var find_cus_val1 = eqcustom[i].indexOf("(");
                var find_cus_val2 = eqcustom[i].indexOf(")");
                var find_cus_per1 = eqcustom[i].indexOf("[");
                var find_cus_per2 = eqcustom[i].indexOf("]");
                var cut_cus_name = eqcustom[i].substring(0,find_cus_val1);
                var cut_cus_value = eqcustom[i].substring(find_cus_val1+1,find_cus_val2); //커스텀 수치
                //var random_num = Math.floor(Math.random() * 10 + 1);
                var leng = eqcustom[i].length;
                var cus_per = eqcustom[i].substring(find_cus_per1+1,find_cus_per2); // 대괄호
                var cus_per_0 = cus_per.indexOf("%");
                var cus_per_1 = cus_per.substring(0,cus_per_0);  // 커스텀 뜰 확률
                if (Special == "checked") {
                  cus_per_1 = parseInt(cus_per.substring(0,cus_per_0)) + 30
                  if (cus_per_1 > 100) {
                    cus_per_1 = 100;
                  }
                }

                console.log(cus_per_1)
                var cus_per_2 = Math.floor(Math.random() * 100) + 1

                if (cus_per_2 <= cus_per_1) {
                  var cut_in_custom = cut_cus_value.indexOf("~");
                  var find_per_custom = cut_cus_value.indexOf("%");
                  var find_minus_custom = cut_cus_value.indexOf("-");
                  var custommin = cut_cus_value.substring(0,cut_in_custom); //커스텀 수치 최소  3 %
                  var custommax = cut_cus_value.substring(cut_in_custom+1); //커스텀 수치 최대    20 %
                  if (find_per_custom !== -1) {
                    var find_per_cusmin = custommin.indexOf("%");
                    var find_per_cusmax = custommax.indexOf("%");
                    var custommin = custommin.substring(0,find_per_cusmin);
                    var custommax = custommax.substring(0, find_per_cusmax);

                    var rancustom = Dice_roll(parseInt(custommin), parseInt(custommax));
                    if (rancustom !== 0) {
                      var rancustom = rancustom + ' %';
                    } else {
                      var rancustom =  ""
                    }
                  } else {

                    var rancustom = Dice_roll(parseInt(custommin), parseInt(custommax));
                  }
                  if (rancustom !== 0) {
                    if (find_minus_custom !== -1) {
                      if (result_custom === 'null') {
                        var result_custom = cut_cus_name + rancustom;
                      } else {
                        var result_custom = result_custom +"<br />" + cut_cus_name + rancustom;
                      }
                    } else {
                      if (result_custom === 'null') {
                        var result_custom = cut_cus_name +"+ "+ rancustom;
                      } else {
                        var result_custom = result_custom +"<br />" + cut_cus_name +"+ "+ rancustom;
                      }
                    }
                  }
                }
              } else {
                var find_cus_val1 = eqcustom[i].indexOf("("); //웨이블렘 괄호
                var find_cus_val2 = eqcustom[i].indexOf(")"); //웨이블렘 괄호
                var find_cus_val1 = eqcustom[i].indexOf("(",find_cus_val1 +1);
                var find_cus_val2 = eqcustom[i].indexOf(")",find_cus_val2 +1);
                var find_cus_per1 = eqcustom[i].indexOf("[");
                var find_cus_per2 = eqcustom[i].indexOf("]");
                var cut_cus_name = eqcustom[i].substring(0,find_cus_val1);
                var cut_cus_value = eqcustom[i].substring(find_cus_val1+1,find_cus_val2); //커스텀 수치
                console.log(cut_cus_value)

                //var random_num = Math.floor(Math.random() * 10 + 1);
                var leng = eqcustom[i].length;


                var cus_per = eqcustom[i].substring(find_cus_per1+1,find_cus_per2); // 대괄호
                var cus_per_0 = cus_per.indexOf("%");
                var cus_per_1 = cus_per.substring(0,cus_per_0);  // 커스텀 뜰 확률
                if (Special == "checked") {
                  cus_per_1 = parseInt(cus_per.substring(0,cus_per_0)) + 30
                  if (cus_per_1 > 100) {
                    cus_per_1 = 100;
                  }
                }
                console.log(cus_per_1)
                var cus_per_2 = Math.floor(Math.random() * 100) + 1

                if (cus_per_2 <= cus_per_1) {
                  var cut_in_custom = cut_cus_value.indexOf("~");
                  var find_per_custom = cut_cus_value.indexOf("%");
                  var find_minus_custom = cut_cus_value.indexOf("-");
                  var custommin = cut_cus_value.substring(0,cut_in_custom); //커스텀 수치 최소  3 %
                  var custommax = cut_cus_value.substring(cut_in_custom+1); //커스텀 수치 최대    20 %
                  if (find_per_custom !== -1) {
                    var find_per_cusmin = custommin.indexOf("%");
                    var find_per_cusmax = custommax.indexOf("%");
                    var custommin = custommin.substring(0,find_per_cusmin);
                    var custommax = custommax.substring(0, find_per_cusmax);

                    var rancustom = Dice_roll(parseInt(custommin), parseInt(custommax));

                    if (rancustom !== 0) {
                      var rancustom = rancustom + ' %';
                    } else {
                      var rancustom =  ""
                    }
                  } else {

                    var rancustom = Dice_roll(parseInt(custommin), parseInt(custommax));
                  }
                  if (rancustom !== 0) {
                    if (find_minus_custom !== -1) {
                      if (result_custom === 'null') {
                        var result_custom = cut_cus_name + rancustom;
                      } else {
                        var result_custom = result_custom +"<br />" + cut_cus_name + rancustom;
                      }
                    } else {
                      if (result_custom === 'null') {
                        var result_custom = cut_cus_name +"+ "+ rancustom;
                      } else {
                        var result_custom = result_custom +"<br />" + cut_cus_name +"+ "+ rancustom;
                      }
                    }
                  }

                }
              }
            }
          }
        }
        if (result_custom == 'null') {
          result_custom = ""
        }
        console.log(result_custom)

        //소켓 재조
        var Allsocket = "3~4"
        //console.log("소켓" + testsocket.length)
        //console.log("소켓 구분" + testsocket.indexOf("~"))
        if (Allsocket.indexOf("~") == -1) {
          var socket = "";

          for (var i = 0; i < Allsocket; i++) {
            socket = socket + "○"
          }
          var result_socket = socket ;

        } else {
          var minsocket = Allsocket.substring(0,Allsocket.indexOf("~"));
          var maxsocket = Allsocket.substring(Allsocket.indexOf("~")+1,Allsocket.length)
          var socket = "";
          var socketx = "";
          var socket_roll = Dice_roll(parseInt(minsocket),parseInt(maxsocket)) //소켓 범위 내에서 굴리기

          for (var i = 0; i < socket_roll; i++) {
            socket = socket + "○"
          }
          for (var j = parseInt(maxsocket)-socket_roll ; j > 0; j--) {
            socketx = socketx + "●"
          }
          var result_socket = socket + socketx;
          //console.log("소켓 주사위 굴리기" +socket_roll)
          //console.log(socket + socketx)
        }

        // 스텟 재조립
