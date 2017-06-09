function araf(x)
{
var1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.?!';
p='';
q='';
a=document.getElementById('txt').value;
n=0;
while(n<a.length)
{
o=0;
s=0;
while (s!=1)
{
if(a.charAt(n)!=var1.charAt(o))
{o++;
if(o==x.length)
{
q=a.charAt(n);
s=1;}}
else
{
q=x.charAt(o);
s=1;}
;
}
p=p+q;
n++;
}
return p;
}
function start()
{

document.getElementById('o1').value=araf('αв¢đєƒgнιjкĻмησρqяѕтυνωχуzαв¢đєƒgнιjкĻмησρqяѕтυνωχуz.?!');
document.getElementById('o2').value=araf('αвcdєfghíjklmnσpqrstuvwхчzαвcdєfghíjklmnσpqrstuvwхчz.?!');
document.getElementById('o3').value=araf('ΛBCDΣFGΉIJΚLMПӨPQЯSTЦVЩXΥZΛBCDΣFGΉIJΚLMПӨPQЯSTЦVЩXΥZ๏?!');
document.getElementById('o4').value=araf('ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאzค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאz.؟!');
document.getElementById('o5').value=araf('aвcdeғgнιjĸlмnopqrѕтυvwхyzaвcdeғgнιjĸlмnopqrѕтυvwхyz.?!');
document.getElementById('o6').value=araf('ábćdéfghíjklmńőpqŕśtúvwxýźábćdéfghíjklmńőpqŕśtúvwxýź.?!');
document.getElementById('o7').value=araf('äbćdëfghïjklmnöpqrstüvwxÿżäbćdëfghïjklmnöpqrstüvwxÿż.?!');
document.getElementById('o8').value=araf('ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ.؟!');
document.getElementById('o9').value=araf('ÁßČĎEŦĞHĨJĶĹМŃŐРQŔŚŤÚVWЖYŹÁßČĎEŦĞHĨJĶĹМŃŐРQŔŚŤÚVWЖYŹ.؟!');
document.getElementById('o10').value=araf('ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎzɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz˙¿¡');
document.getElementById('o11').value=araf('ﾑ乃cd乇ｷgんﾉﾌズﾚﾶ刀oｱq尺丂ｲu√wﾒﾘ乙ﾑ乃cd乇ｷgんﾉﾌズﾚﾶ刀oｱq尺丂ｲu√wﾒﾘ乙.?!');
document.getElementById('o12').value=araf('48CD3E9H1JKLMN0PQR57UVWXY248CD3E9H1JKLMN0PQR57UVWXY2.?!');
document.getElementById('o13').value=araf('ᗩᗷᑕᗪᕮᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇSTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪᕮᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇSTᑌᐯᗯ᙭Yᘔ.?!');
document.getElementById('o14').value=araf('ᗩᙖᙅᗪᙓᖴᘜᕼIᒍKᒪᙏᑎOᑭᑫᖇSTᙀᐯᙎ᙭YᘔᗩᙖᙅᗪᙓᖴᘜᕼIᒍKᒪᙏᑎOᑭᑫᖇSTᙀᐯᙎ᙭Yᘔ.?!');
document.getElementById('o15').value=araf('ᗩᗷᑢᕲᘿᖴᘜᕼᓰᒚᖽᐸᒪᘻᘉᓍᕵᕴᖇSᖶᑘᐺᘺ᙭ᖻᗱᗩᗷᑢᕲᘿᖴᘜᕼᓰᒚᖽᐸᒪᘻᘉᓍᕵᕴᖇSᖶᑘᐺᘺ᙭ᖻᗱ.?!');
document.getElementById('o16').value=araf('მჩƈძεբցհἶʝƙlოղօրգɾʂէմνωჯყzABCDEFGHIJKLMNOPQRSTUVWXYZ.?!');
};
