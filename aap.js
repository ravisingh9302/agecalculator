console.log("ravi shankar singh");
function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function calcu() {
        if (d1 > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        var d = d2 - d1;
        var m = m2 - m1;
        var y = y2 - y1;

        document.getElementById('age').innerHTML = 'You are now ' + y + ' Years ' + m + ' Months ' + d + ' Days old';
    };



    if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
        document.getElementById('age').innerHTML = 'Please Enter numbers only';
    }

    else {

        if (d1 > 0 && d1 < 32 && m1 > 0 && m1 < 13 && y1 > 1500 && y1 < y2 + 1) {

            if(y1==y2 && m1==m2 && d1>d2){
                document.getElementById('age').innerHTML = 'You are not Birth yet';
            }
            else if(y1==y2 && m1>m2){
                document.getElementById('age').innerHTML = 'You are not Birth yet';
            }

            else if(y1==y2 && m1==m2 && d1==d2){
                document.getElementById('age').innerHTML = 'Congratulations, and most Welcome you';
            }
            else if(m1==m2 && d1==d2){

                document.getElementById('age').innerHTML = 'HAPP BIRTHDAY TO YOU <br> your age '+(y2-y1)+'';
            }

            else{
                calcu();
            }

        }

        else {
            document.getElementById('age').innerHTML = 'Please enter details in Range';
        }


    }


}

