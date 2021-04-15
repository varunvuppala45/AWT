function fetchWeather()
{
    var table=document.createElement("TABLE")
    table.border="1"
    const request=new XMLHttpRequest();
    var city=document.getElementById("temp").value
    var apiKey='c55b45ee52fa48e1767c17e252843273';
    var url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

   

    request.open('GET',url,true)
    request.onload=function()
    {
        var result=JSON.parse(this.response)
        row=table.insertRow(-1);
            cellH1=row.insertCell(-1);
            cellH0=row.insertCell(-1);
            cellH2=row.insertCell(-1);
            cellH3=row.insertCell(-1);
            cellH1.innerHTML="DATE"
            cellH0.innerHTML="TIME"
            cellH2.innerHTML="MAXIMUM"
            cellH3.innerHTML="MINIMUM"
        result.list.forEach((day)=>
        {
            row=table.insertRow(-1);
            c1=row.insertCell(-1);
            c0=row.insertCell(-1);
            c2=row.insertCell(-1);
            c3=row.insertCell(-1);
            res=day.dt_txt.split(" ");
            c1.innerHTML=res[0];
            c0.innerHTML=res[1];
            c2.innerHTML=day.main.temp_max;
            c3.innerHTML=day.main.temp_min;
        })
    }
    var div=document.getElementById("table");
    div.append(table);
    request.send();
}