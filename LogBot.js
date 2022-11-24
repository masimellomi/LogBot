//Made by Masimellomi
//이 소스는 GPL 3.0 라이센스를 사용합니다. 무단 복제 및 2차 유포를 금합니다.
//아래 소스는 파일 스트림을 기반으로 사용합니다. 1주일 경과시 파일이 많이 생성되기에 폴더를 찾아 일주일에 한번씩 지우는걸 추천합니다. ( 파일 자체 용량은 적음 )
//이 소스는 메신저봇R에서 정상작동합니다. 채팅 자동 응답봇은 테스트 하지 않았습니다.
//위 안내문을 삭제하지 마세요. 
//질문과 오류 지적은 언제든지 환영입니다!
//주의! 해당 코드는 개발자가 사용하는 코드와 다르니 오류 발생시 Issues로 말해주시길 바랍니다.
const prefix = "!";
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  const Lw = ' '.repeat(500);
  let sdf = new java.text.SimpleDateFormat('yyyy년\xa0MM월\xa0dd일\xa0HH시\xa0mm분\xa0ss초');
  let calendar = java.util.Calendar.getInstance();
  let NowTime = sdf.format(calendar.getTime());
  var d = new Date();
  const FS = FileStream;
  const mybotname = "마시멜로봇";
  FS.append("/sdcard/" + mybotname + "의 로그/" + room + '/방의 로그1.txt', "𝑺𝒆𝒏𝒅𝒆𝒓 : " + sender + "\n𝑹𝒐𝒐𝒎 : " + room + "\n𝑴𝒆𝒔𝒔𝒂𝒈𝒆 : " + msg + "\n𝑻𝒊𝒎𝒆 : " + NowTime + "\n_________________________________\n\n\n");
  FS.append("/sdcard/" + mybotname + "의 로그/" + room + '/방의 로그카운트1.txt', "1");
  //
  var logread = FS.read("sdcard/" + mybotname + "의 로그/" + room + '/방의 로그1.txt');
  var countread = FS.read("sdcard/" + mybotname + "의 로그/" + room + '/방의 로그카운트1.txt').length;
  var NowTime1 = d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ' + d.getHours() + '시 ' + d.getMinutes() + '분 ' + d.getSeconds() + '초 ';
  
  if (msg == prefix + "로그") {
    replier.reply(room + "의 최근 "+ countread +"개의 로그... 전체보기를 눌러 확인하십시오." + Lw  + "\n\n" + logread);
  }
  if (countread > 99) {
    FS.remove("sdcard/" + mybotname + "의 로그/" + room + '/방의 로그카운트1.txt');
    FS.remove("sdcard/" + mybotname + "의 로그/" + room + '/방의 로그1.txt');
  }
  if (msg == prefix + "로그삭제") {
    FS.remove("sdcard/" + mybotname + "의 로그/" + room + '/방의 로그1.txt');
    FS.remove("sdcard/" + mybotname + "의 로그/" + room + '/방의 로그카운트1.txt');
    replier.reply(room + "의 로그를 성공적으로 삭제했습니다.");
  }

}
// 리스폰스 종료
