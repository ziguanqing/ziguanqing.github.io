stars={init:function(n){var i=this;$.getJSON(n,(function(n){for(var t in n){var a=n[t];i.render(a,t)}}))},render:function(n,i){for(var t,a,d="",r=0;r<n.length;r++)t=n[r].nickname,a=n[r].site,content=n[r].content,d+='<div class="card" onclick="window.open(\''+a+'\')" ><div class="card-header"><div>'+t+'</div></div><div class="card-content"><div>'+content+"</div></div></div>";$(i).append(d)}},stars.init("../stars/allstars.json");