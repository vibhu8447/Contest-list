import React from 'react';
function Item(item) {
            
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
            var hours = Math.floor(timestamp / 60 / 60);
            var minutes = Math.floor(timestamp / 60) - (hours * 60);
            
            if(minutes<10)
            {
                var x=hours + ":0" + minutes;

                return x;
            }
            else
            {
                return hours + ":" +minutes;
            }
        }


        

    var getid="";
    if(item.item.phase==="BEFORE")
      getid="orange";
    else if(item.item.phase==="CODING")
        getid="green"
    else
    {
    getid="red";
    
    }

    var url=`https://codeforces.com/contests/${item.item.id}`;
    return (
        <>
            {/*  hint for tommor add /{contest id in the end of href in first td} */}
            <td> <a target="_blank" rel="noreferrer"  href={url}> {item.item.name}</a></td>          
            <td>{timeConverter(item.item.startTimeSeconds)}</td>
            <td>{durationofcontest(item.item.durationSeconds)}</td>
            <td id ={getid}>{item.item.phase}</td>    
        
        </>
);
}

export default Item;