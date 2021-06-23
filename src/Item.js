import React from 'react';
import { useState } from 'react';
function Item(item) {
            console.log(item.item);
              function timeConverter(UNIX_timestamp){
                var a = new Date(UNIX_timestamp * 1000);
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months[a.getMonth()];
                var date = a.getDate();
                var hour = a.getHours();
                var min = a.getMinutes();
                var sec = a.getSeconds();
                var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
                return time;
              }
        function durationofcontest(timegap)
        {
            var timestamp = timegap;

            // 2
            var hours = Math.floor(timestamp / 60 / 60);
            
            // 37
            var minutes = Math.floor(timestamp / 60) - (hours * 60);

            var res="";
            if(minutes<10)
            {

                return hours +":" +"0"+minutes;
            }
            else
            {
                return hours + ":" +minutes;
            }
        }
        console.log(timeConverter(item.item.startTimeSeconds),item.item.name);
        function website(weburl)
        {

            
        }
    return (
        <>
            {/*  hint for tommor add /{contest id in the end of href in first td} */}
            <td> <a target="_blank" href="https://codeforces.com/contests"> {item.item.name}</a></td>          
            <td>{timeConverter(item.item.startTimeSeconds)}</td>
            <td>{durationofcontest(item.item.durationSeconds)}</td>
            <td>{item.item.phase}</td>
            
        
        
        </>
);
}

export default Item;