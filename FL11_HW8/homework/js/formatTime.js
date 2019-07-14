function formatTime(a){
  let min, hour, day;
  const H=60, D=24;
  min = a%H;
  hour = (a-min)%(H*D);
  day = ~~((a-min)/(H*D));
  return +day+' day(s) '+hour+' hour(s) '+min+' min(s)'
}
let ax=120, bx=59, cx=3601;
formatTime(ax);
formatTime(bx);
formatTime(cx);
