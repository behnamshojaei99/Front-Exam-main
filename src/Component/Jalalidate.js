import React, { useEffect, useState } from 'react';
import Jdate from './jDate'


function calc(){
    var d = new Date();
    var month= d.getMonth();
    
    var date=d.getDate();
    var day=parseInt(d.getDay()) + 1;
    
    switch (day) {
        case 1:
            day = "شنبه";
            break
        case 2:
            day = "یکشنبه";
            break
        case 3:
            day = "دوشنبه";
            break
        case 4:
            day = "سه شنبه";
            break
        case 5:
            day = "چهارشنبه";
            break
        case 6:
            day = "پنجشنبه";
            break
            default:
            day = "جمعه";
            break
        
            }
    
    var year=d.getFullYear();
    const jalalidate = new Jdate();
    var jalali= jalalidate.gregorian_to_jalali(year,month,date);

    return{
        'day':day,
        'year':jalali[0],
        'month':jalali[1],
        'date':jalali[2]
    }
    }

export default function Jalalidate() {

const [shamsi, setShamsi] = useState({
    day:'',
    year:'',
    month:'',
    date:''
} );
let tarikh=calc();

useEffect( setShamsi(  {'day':tarikh.day,
'year':tarikh.year,
'month':tarikh.month,
'date':tarikh.date}), [])

    return (
        <div>
            charshanbe 22 khordad

        </div>
    )
}

