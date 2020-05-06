function CallQQ(){   
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent))
    {
        window.location.href='mqqapi://card/show_pslcard?src_type=internal&version=1&uin=436420762&card_type=group&source=qrcode';
    } 
else 
    {
        window.location.href='tencent://groupwpa/?subcmd=all&param=7b2267726f757055696e223a3433363432303736322c2274696d655374616d70223a313537353535353136392c22617574684b6579223a222f52484b5274712f75416f504f64796235615a3777437847783550584473467363794d59485345706d4b4f3068774f35516c426c6e396c57525957743635346d227d';
    }
}