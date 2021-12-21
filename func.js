var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.63003404375192, 127.07633653685478), // 중심좌표
        level: 4 // 확대 레벨 (1~14 클수록 축소됨)
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성
var map = new kakao.maps.Map(mapContainer, mapOption);
var markers=[];
var markers_vegan=[];
var markers_lacto=[];
var markers_obo=[];
var markers_lactoobo=[];
var markers_fesco=[];
var markers_polo=[];
var overlays=[];
// 좌표 지정
var positions = [
  // {
  //   restaurant_name: '플랜트',
  //   restaurant_img: 'https://scontent.ficn1-1.fna.fbcdn.net/v/t1.6435-9/67944483_2279413595521289_2940732677000527872_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=973b4a&_nc_ohc=PX_QAacr1XsAX8pXV97&_nc_ht=scontent.ficn1-1.fna&oh=e03e595eb74848aa98f9a89fbe131fe3&oe=61CAEBC9',
  //   restaurant_addr: '이태원1동 보광로 117 2층',
  //   restaurant_homepage: 'https://www.plantcafeseoul.com/',
  //   latlng: new kakao.maps.LatLng(37.53308562804209, 126.99422999508919)
  // },
  // {
  //   restaurant_name: '브레게티',
  //   restaurant_img: 'https://lh3.googleusercontent.com/proxy/8r162aag7r2AFUMtHQqvoUtMi_pzywON4xkTzZYmvoXaqwYZGMAK_dYZRHmB7I6MyKHli-yyEO7OxS3dSWnZyMUKXE6Qu4Jzvns0YnwkUZ4CpUu_ith4Y22usag',
  //   restaurant_addr: '이태원1동 보광로 124 2층',
  //   restaurant_homepage: 'http://breaghetti.com/',
  //   latlng: new kakao.maps.LatLng(37.53379811117251, 126.99426638530281)
  // },
  // {
  //   restaurant_name: '스프라우트',
  //   restaurant_img: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/320x0/sprout-new-logo_5b28afc3f4e5a2474e53ce579ff1e7801633422475.jpg',
  //   restaurant_addr: '이태원로14길 21',
  //   restaurant_homepage: 'https://sprout-korea.com/ko/weekly-order-form-ko/',
  //   latlng: new kakao.maps.LatLng(37.533361446238885, 126.99088191042912)
  // },
  {
    restaurant_name: '롯데리아 공릉점',
    restaurant_img: 'https://mblogthumb-phinf.pstatic.net/20160427_143/ppanppane_1461740401939t0xPQ_PNG/%B7%D4%B5%A5%B8%AE%BE%C6_%B7%CE%B0%ED_%285%29.png?type=w2',
    restaurant_addr: '이태원로14길 21',
    restaurant_tele: '02-977-2430',
    latlng: new kakao.maps.LatLng(37.62637458840914, 127.07434558876018),
    lacto: '락토',
    menu: ''
  },
  {
    restaurant_name: '마이브라더스',
    restaurant_img: '',
    restaurant_addr: '노원구 공릉동 737번지',
    restaurant_tele: '070-4227-7576',
    latlng: new kakao.maps.LatLng(37.62682978192174, 127.08173420429078),
    obo: '오보',
    lactoobo: '락토오보'
  },
  {
restaurant_name: 'WHAT A CHEF (왓어쉐프)',
restaurant_img: '',
restaurant_addr: '서울 강남구 선릉로157길 23-3',
restaurant_tele: '070-8285-3337',
latlng: new kakao.maps.LatLng(37.5259988, 127.0379268),
menu : ' 감자 치아바타 샌드위치(락토), 스윗베리 리코타 샐러드(락토,비건가능), 연어 샐러드(페스코,비건가능), 왓어쉐프 샐러드(락토,비건가능), 쉬림프 샐러드(페스코,비건가능) '

},
{
restaurant_name: '가로수길 칼국수',
restaurant_img: '',
restaurant_addr: '서울 강남구 압구정로2길 46',
restaurant_tele: '02-512-6474',
latlng: new kakao.maps.LatLng(37.5187478, 127.0206781),
menu : ' 들깨수제비(일반식,비건가능), 들깨감자옹심이(일반식,비건가능), 새싹열무비빔밥(일반식,비건가능) '

},
{
restaurant_name: '강가 (역삼)',
restaurant_img: '',
restaurant_addr: '서울 강남구 논현로 508',
restaurant_tele: '02-2005-0610',
latlng: new kakao.maps.LatLng(37.5021366, 127.0376223),
menu : ' 알루고비 (비건), 베지터블 바지 (락토), 달 타르카 (비건), 로티(비건) '

},
{
restaurant_name: '강남더수제비',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로94길 23',
restaurant_tele: '02-561-5831',
latlng: new kakao.maps.LatLng(37.4997519, 127.0291935),
menu : ' 일반수제비(페스코,비건가능), 얼큰수제비(페스코,비건가능), 들깨수제비(페스코,비건가능), 찹쌀새알수제비(페스코,비건가능), 콩국수(비건), 감자전(비건) '

},
{
restaurant_name: '개성집',
restaurant_img: '',
restaurant_addr: '서울 강남구 봉은사로1길 6',
restaurant_tele: '02-547-8526',
latlng: new kakao.maps.LatLng(37.5052609, 127.025254),
menu : ' 돌솥비빔밥(일반식,비건가능), 누룽지(비건,오보가능), 김치순두부(페스코,오보가능), 된장찌개(일반식,비건가능), 청국장(일반식,비건가능), 김치볶음밥(일반식,페스코가능) '

},
{
restaurant_name: '걸신맛집',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로6길 29',
restaurant_tele: '02-566-9285',
latlng: new kakao.maps.LatLng(37.4967327, 127.0313021),
menu : ' 감자채전(오보), 부추전(오보), 고추장더덕구이(비건), 들기름부침두부(비건), 강된장보리밥(페스코,비건가능), 새싹비빔밥(페스코,비건가능) '

},
{
restaurant_name: '과수당',
restaurant_img: '',
restaurant_addr: '서울 강남구 역삼로14길 10 1층 102호',
restaurant_tele: '0507-1444-0047',
latlng: new kakao.maps.LatLng(37.4939634, 127.0353298),
menu : ' 비건 5색콩 샐러드(비건), 고구마 견과류 샐러드(비건) '

},
{
restaurant_name: '그리너 샐러드 (논현점)',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로124길 35',
restaurant_tele: '070-8880-3430',
latlng: new kakao.maps.LatLng(37.5094065, 127.0253471),
menu : ' 그릴드 머쉬샐러드(비건), 스윗단호박 두부 샐러드(비건) '

},
{
restaurant_name: '그리너 샐러드 (대치점)',
restaurant_img: '',
restaurant_addr: '서울 강남구 역삼로64길 18',
restaurant_tele: '070-8844-3430',
latlng: new kakao.maps.LatLng(37.4999005, 127.0530546),
menu : ' 그릴드 머쉬샐러드(비건), 스윗단호박 두부 샐러드(비건) '

},
{
restaurant_name: '내여자를부탁해 (선릉)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로 322',
restaurant_tele: '02-2183-2040',
latlng: new kakao.maps.LatLng(37.5032366, 127.0465997),
menu : '버섯 샐러드(비건)'

},
{
restaurant_name: '노이에아트멍',
restaurant_img: '',
restaurant_addr: '서울 강남구 도산대로23길 19',
restaurant_tele: '070-8834-5444',
latlng: new kakao.maps.LatLng(37.52026, 127.0259413),
menu : '빈센트(비건)'

},
{
restaurant_name: '닥터비건',
restaurant_img: '',
restaurant_addr: '서울특별시 강남구 도산대로68길 25',
restaurant_tele: '02-543-2030',
latlng: new kakao.maps.LatLng(37.5219174, 127.0446312),
menu : ' 6미 샌드위치(비건), 생과일주스(비건), 과일에이드(비건) '

},
{
restaurant_name: '더드림',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로78길 25',
restaurant_tele: '02-508-6777',
latlng: new kakao.maps.LatLng(37.495444, 127.0312848),
menu : ' 강된장 비빔밥(비건), 김치순두부(페스코) '

},
{
restaurant_name: '더드림 (본점)',
restaurant_img: '',
restaurant_addr: '서울 강남구 언주로85길 13',
restaurant_tele: '02-567-4323',
latlng: new kakao.maps.LatLng(37.5004802, 127.0422466),
menu : '강된장 비빔밥(비건)'

},
{
restaurant_name: '더벨로 (개포)',
restaurant_img: '',
restaurant_addr: '서울 강남구 선릉로 30',
restaurant_tele: '02-576-0045',
latlng: new kakao.maps.LatLng(37.4825121, 127.0612002),
menu : ' 우리밀 바게트(비건), 무화과 통밀빵(비건), 건포토 통밀빵(비건), 크랜베리 호밀빵(비건), 호두바게트(비건), 메밀치아바타(비건), 올리브치아바타(비건) '

},
{
restaurant_name: '도스타코스 (선릉)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로69길 10',
restaurant_tele: '02-555-4731',
latlng: new kakao.maps.LatLng(37.5066018, 127.0527324),
menu : ' 소프트 타코(락토,비건가능), 야채 치폴레 살사 부리또 볼(락토,비건가능), 리프라이드 빈 부리또(락토,비건가능), 감자 부리또(락토,비건가능), 야채 부리또(락토,비건가능), 볶은 야채 부리또(락토,비건가능) '

},
{
restaurant_name: '두부공작소 신사직영점',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로160길 21',
restaurant_tele: '02-6339-3646',
latlng: new kakao.maps.LatLng(37.5198006, 127.020506),
menu : ' 건강 백순두부(비건), 생생 버섯 순두부찌개(일반식,비건가능), 뜨거운 콩국수(비건), 콩죽(비건), 순두부 새싹비빔밥(비건), 김가루 순두부(비건), 두부공작소 콩국수(오보), 즉석두부 반접시(비건), 즉석두부 한접시(비건), 두부구이(비건), 두부참깨드레싱샐러드(비건), 즉석두유한잔(비건), 즉석순두부한그릇(비건) '

},
{
restaurant_name: '두잉',
restaurant_img: '',
restaurant_addr: '서울 강남구 삼성로 654 B01호',
restaurant_tele: '02-544-5752',
latlng: new kakao.maps.LatLng(37.5185966, 127.0507256),
menu : ' 카페라떼(비건), 아인슈페너(비건), 대추생강차(비건), 소이밀크티(비건), 오곡라떼(비건), 초코라떼(비건), 녹차라떼(비건), 제철 유기농 과일 스무디(비건), 여성 농민의 밭(비건), 와플(비건), 와플 (비건), 젤라또 와플(비건), 맥주+감자튀김/비건육포(비건) '

},
{
restaurant_name: '러빙헛 스마일',
restaurant_img: '',
restaurant_addr: '서울 강남구 논현로6길 18',
restaurant_tele: '02-578-0512',
latlng: new kakao.maps.LatLng(37.4735192, 127.0510021),
menu : ' 빨개 오뎅 (비건), 비건 두부면탕(비건), 카레 햄프 떡볶이(비건), GF 파스타(비건), GF 들기름 샐러드 누들(비건), 카레 쌀가츠 멘(비건), 유기농 샐러드 스페셜(비건), 비건 너비아니(비건), 비건 탕수채(비건), 소이 후라이드(비건), 양념 소이 후라이드(비건), 비건 슈슈버거 세트(비건), 머쉬룸 버거 스페셜(비건), 히어로 버거 세트(비건), 채소 비빔밥(비건), 비건 커리(비건), 쌀 떡볶이(비건), 비건 키토 김밥(비건), 비건 불구이 김밥(비건), 비건 짬뽕(비건), 비건 냉면(비건), 쌀가츠 라멘(비건), 비건 도시락(비건), 베지 도시락(비건), VIP 비건채식 도시락(비건), 비건 피스 도시락(비건), 비건 아보카도 스테이크 도시락(비건), 비건 함박스테이크 도시락(비건), 덮밥 도시락(비건), 스페셜 오더 도시락(비건), 스페셜 도시락(비건), 너비아니 쌈밥 도시락(비건), 비건 쌀까스 도시락(비건), 유기농 비건 치즈 김밥(비건), 비건 비빔밥 스페셜 도시락(비건), 유기농 비건 샌드위치(비건), 쌀까스 버거(비건), 비건 케이터링(비건) '

},
{
restaurant_name: '러빙헛 카페',
restaurant_img: '',
restaurant_addr: '서울 강남구 개포로22길 35',
restaurant_tele: '02-576-2158',
latlng: new kakao.maps.LatLng(37.4769037, 127.0494443),
menu : ' 토마토 파스타(비건), 소이 커틀릿(비건), 순두부 스페셜(비건), 노블 볶음밥(비건), 뚝배기 콩불구이(비건), 소이 커틀릿 버거(비건), 유기농 칠곡와플(비건), 프렌치 프라이(비건), 소이 스테이크 버거(비건), 냉면(비건), 소이 케이준샐러드(비건), 토마토 파스타(비건), 소이 후라이드 (비건), 소이 후라이드 (비건), 군만두(비건) '

},
{
restaurant_name: '로봇김밥 (강남역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로 101',
restaurant_tele: '02-3452-9993',
latlng: new kakao.maps.LatLng(37.4985981, 127.0280435),
menu : ' 포레스트 김밥(비건), 로봇건강한줄(오보,비건가능), 크림치즈포레스트(락토), 몸에좋은아몬드호두멸치크림치즈김밥(페스코), 연어포레스트김밥(페스코), 연어크림치즈김밥(페스코), 매콩쫄면(오보,비건가능) '

},
{
restaurant_name: '롤링파스타 (강남역씨티)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로1길 25',
restaurant_tele: '02-557-2223',
latlng: new kakao.maps.LatLng(37.4999715, 127.0274037),
menu : ' 마르게리따(락토), 고르곤졸라(락토), 그린샐러드(비건), 크림치즈 샐러드(락토) '

},
{
restaurant_name: '롯데리아 (강남우성사거리0',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로 334 SM타워',
restaurant_tele: '02-501-4642',
latlng: new kakao.maps.LatLng(37.4929956, 127.0304796),
menu : ' 리아미라클버거(비건), 어썸버거(비건) '

},
{
restaurant_name: '롯데리아 (강남일원)',
restaurant_img: '',
restaurant_addr: '서울 강남구 양재대로55길 21',
restaurant_tele: '02-451-2211',
latlng: new kakao.maps.LatLng(37.4923218, 127.0872903),
menu : ' 리아미라클버거(비건), 어썸버거(비건) '

},
{
restaurant_name: '롯데리아 (개포)',
restaurant_img: '',
restaurant_addr: '서울 강남구 선릉로 26',
restaurant_tele: '02-576-0840',
latlng: new kakao.maps.LatLng(37.482244, 127.061475),
menu : ' 리아미라클버거(비건), 어썸버거(비건) '

},
{
restaurant_name: '롯데리아 (선릉)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로 316 메트라이프타워',
restaurant_tele: '0507-1423-5939',
latlng: new kakao.maps.LatLng(37.5034354, 127.0455566),
menu : ' 리아미라클버거(비건), 어썸버거(비건) '

},
{
restaurant_name: '롯데리아 (세곡)',
restaurant_img: '',
restaurant_addr: '서울 강남구 헌릉로 569',
restaurant_tele: '02-459-9999',
latlng: new kakao.maps.LatLng(37.4657572, 127.1012126),
menu : ' 리아미라클버거(비건), 어썸버거(비건) '

},
{
restaurant_name: '롯데리아 (수서역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 밤고개로 99',
restaurant_tele: '02-459-9424',
latlng: new kakao.maps.LatLng(37.4854167, 127.1045615),
menu : ' 리아미라클버거(비건), 어썸버거(비건) '

},
{
restaurant_name: '롯데리아 (역삼)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로 116 동경빌딩',
restaurant_tele: '02-3453-4054',
latlng: new kakao.maps.LatLng(37.4984835, 127.0305444),
menu : ' 리아미라클버거(비건), 어썸버거(비건) '

},
{
restaurant_name: '롯데리아 (학동역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 학동로 219 국제빌딩',
restaurant_tele: '02-3443-9200',
latlng: new kakao.maps.LatLng(37.515003, 127.033136),
menu : ' 리아미라클버거(비건), 어썸버거(비건) '

},
{
restaurant_name: '르알레스카 가로수길(Le ALASKA)',
restaurant_img: '',
restaurant_addr: '서울 강남구 압구정로14길 15',
restaurant_tele: '02-546-5872',
latlng: new kakao.maps.LatLng(37.5233923, 127.0233551),
menu : ' 바게트(비건), 치아바타(비건), 효모종(비건) '

},
{
restaurant_name: '리밍',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로37길 27',
restaurant_tele: '02-3453-4788',
latlng: new kakao.maps.LatLng(37.5040311, 127.0401202),
menu : ' 유니짜장(일반식,비건가능) '

},
{
restaurant_name: '마녀샐러드 (역삼)',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로94길 75',
restaurant_tele: '02-568-8874',
latlng: new kakao.maps.LatLng(37.5007507, 127.0334216),
menu : ' 버섯두부 샐러드(비건), 리코타치즈 샐러드(락토), 과일 박스(비건) '

},
{
restaurant_name: '마치래빗 (신사)',
restaurant_img: '',
restaurant_addr: '서울 강남구 논현로153길 45',
restaurant_tele: '070-4531-4514',
latlng: new kakao.maps.LatLng(37.5203205, 127.0245377),
menu : ' 해피 비건 - 두부 스테이크(비건), 슬림 - 새우(페스코), 스키니 - 연어(페스코), 두도 - 두부 양송이 도시락(비건) '

},
{
restaurant_name: '마히나 비건 테이블',
restaurant_img: '',
restaurant_addr: '서울 강남구 논현로175길 75 2층',
restaurant_tele: '070-4105-5331',
latlng: new kakao.maps.LatLng(37.5236602, 127.0230575),
menu : ' 포르치니 파스타(비건), 볼로네제 파스타(비건), 샹트랠 레몬 파슬리 파스타(비건), 루꼴라 바질 페스토 파스타(비건), 모렐 크림 파스타(비건), 새송이 구이 파스타(비건), 아보카도 프라이 샐러드 파스타(비건), 미트볼 파스타(비건), (비건), (비건), 그릴드 파인애플 버거(비건), 아보카도 프라이 루꼴라 버거(비건), 트리플 체다 치즈 버거(비건), (비건), (비건), 프레시 트러플 파스타(비건), (비건), (비건), (비건), (비건), (비건), (비건), (비건), (비건), (비건), 로마식 카르보나라 파스타(비건), 할라페뇨 더블 치킨 버거(비건), 치즈 피자(비건), 버섯 크림 피자(비건), 루꼴라 바질 페스토 피자(비건), 그릴드 파인애플 피자(비건), 콜리플라워 스테이크(비건), 치킨 통밀 크루통 시저 샐러드(비건), 으깬 감자 버섯 허브 샐러드(비건), 구운 두부 버섯 토마토 샐러드(비건), 자몽 파인애플 오렌지 샐러드(비건), 아보카도 버섯 생바질 샐러드(비건), 병아리콩 썬드라이 토마토 샐러드(비건), 사과 크랜베리 샐러드(비건), 체다 치즈 감자튀김(비건), 수제 피클(비건), 티라미수 케이크와 유기농 하와이 코나 블렌드 커피 시럽(비건), 뉴욕 치즈 케이크와 유기농 크렌베리 콩포도(비건), 카페 라떼 빙수와 초콜릿 크럼블(비건), 바닐라 아이스크림과 아몬드 버터 크럼블(비건), 유기농 하와이 코나 블렌드 커피 바닐라 아포가토(비건), 비건 초콜릿 트러플(비건) '

},
{
restaurant_name: '명동칼국수',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로 124',
restaurant_tele: '02-539-2898',
latlng: new kakao.maps.LatLng(37.4987814, 127.0317054),
menu : ' 비빔국수(비건), 콩국수(비건), 새싹비빔밥(일반식,비건가능) '

},
{
restaurant_name: '명동칼국수샤브샤브 (역삼디오빌)',
restaurant_img: '',
restaurant_addr: '서울 강남구 언주로 427',
restaurant_tele: '02-2193-6060',
latlng: new kakao.maps.LatLng(37.5013935, 127.0426534),
menu : ' 비빔국수(오보,비건가능) '

},
{
restaurant_name: '모스가든',
restaurant_img: '',
restaurant_addr: '서울 강남구 논현로139길 12',
restaurant_tele: '02-546-8532',
latlng: new kakao.maps.LatLng(37.5166667, 127.0283522),
menu : ' 교토풍 토마토 쓰케(비건), 당근 호박 스프(비건), 둥근마 버섯 스프(비건), 가든 샐러드(비건), 비트 애플 샐러드(비건), 버섯 팜메이드 샐러드(비건), 퀴노아 아보카도 샐러드(비건) '

},
{
restaurant_name: '미락',
restaurant_img: '',
restaurant_addr: '서울 강남구 언주로107길 43',
restaurant_tele: '02-501-0310',
latlng: new kakao.maps.LatLng(37.5069056, 127.0357175),
menu : ' 김밥(일반식,비건가능), 들깨수제비(페스코,비건가능), 칼국수(페스코,비건가능) '

},
{
restaurant_name: '반미362 (대치)',
restaurant_img: '',
restaurant_addr: '서울 강남구 도곡로 458',
restaurant_tele: '02-566-3620',
latlng: new kakao.maps.LatLng(37.4984008, 127.0604585),
menu : ' 야채 반미(비건), 버섯 반미(오보,비건가능), 에그프라이 반미(오보), 치즈 반미(락토오보) '

},
{
restaurant_name: '베지그린',
restaurant_img: '',
restaurant_addr: '서울 강남구 개포로20길 24-10',
restaurant_tele: '02-577-6316',
latlng: new kakao.maps.LatLng(37.4769861, 127.0473742),
menu : ' 뷔페(비건), 피자(비건) '

},
{
restaurant_name: '베커린',
restaurant_img: '',
restaurant_addr: '서울 강남구 봉은사로55길 42-8',
restaurant_tele: '0507-1309-7960',
latlng: new kakao.maps.LatLng(37.5134077, 127.0441628),
menu : ' 흑임자 고구마 깜파뉴(비건), 와인 무화과 깜파뉴(비건), 감자 치아바타(비건) '

},
{
restaurant_name: '본도시락 (신논현역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로110길 15',
restaurant_tele: '02-563-4282',
latlng: new kakao.maps.LatLng(37.5039891, 127.0261867),
menu : ' 곤드레밥(비건), 쌈채소(비건), 고구마견과류샐러드(비건), 새우아보카도샐러드(페스코) '

},
{
restaurant_name: '본도시락 (역삼초교)',
restaurant_img: '',
restaurant_addr: '서울 강남구 역삼로7길 7',
restaurant_tele: '02-558-4282',
latlng: new kakao.maps.LatLng(37.4944942, 127.0330273),
menu : ' 곤드레밥(비건), 쌈채소(비건), 고구마견과류샐러드(비건), 새우아보카도샐러드(페스코) '

},
{
restaurant_name: '본도시락 (차병원사거리)',
restaurant_img: '',
restaurant_addr: '서울 강남구 봉은사로34길 9',
restaurant_tele: '02-562-4282',
latlng: new kakao.maps.LatLng(37.5073438, 127.0364131),
menu : ' 곤드레밥(비건), 쌈채소(비건), 고구마견과류샐러드(비건), 새우아보카도샐러드(페스코) '

},
{
restaurant_name: '본죽 (강남구청역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 선릉로 717',
restaurant_tele: '02-540-3777',
latlng: new kakao.maps.LatLng(37.5187034, 127.0405205),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (강남세브란스사거리)',
restaurant_img: '',
restaurant_addr: '서울 강남구 언주로 314',
restaurant_tele: '02-557-6277',
latlng: new kakao.maps.LatLng(37.495892, 127.0464782),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (개포동)',
restaurant_img: '',
restaurant_addr: '서울 강남구 선릉로 40',
restaurant_tele: '02-3462-6233',
latlng: new kakao.maps.LatLng(37.4832345, 127.0602527),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (개포동역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 개포로 510',
restaurant_tele: '02-445-6288',
latlng: new kakao.maps.LatLng(37.4892996, 127.0683524),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (경복아파트)',
restaurant_img: '',
restaurant_addr: '서울 강남구 언주로114길 23',
restaurant_tele: '02-515-2288',
latlng: new kakao.maps.LatLng(37.5104409, 127.0394273),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (대치롯데)',
restaurant_img: '',
restaurant_addr: '서울 강남구 도곡로 405',
restaurant_tele: '02-567-2926',
latlng: new kakao.maps.LatLng(37.497391, 127.0547261),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (대치은마)',
restaurant_img: '',
restaurant_addr: '서울 강남구 도곡로 516',
restaurant_tele: '02-501-6211',
latlng: new kakao.maps.LatLng(37.4991869, 127.0630046),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (도심공항타워)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로87길 36',
restaurant_tele: '02-2016-7477',
latlng: new kakao.maps.LatLng(37.510215, 127.0583649),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (매봉역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 남부순환로378길 12',
restaurant_tele: '02-575-6245',
latlng: new kakao.maps.LatLng(37.4854259, 127.0458763),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (삼성차관아파트)',
restaurant_img: '',
restaurant_addr: '서울 강남구 봉은사로 474',
restaurant_tele: '02-555-0686',
latlng: new kakao.maps.LatLng(37.5122513, 127.0516091),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (선릉역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 선릉로93길 26',
restaurant_tele: '02-556-6288',
latlng: new kakao.maps.LatLng(37.5048302, 127.0464437),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (세곡)',
restaurant_img: '',
restaurant_addr: '서울 강남구 헌릉로569길 9',
restaurant_tele: '02-451-6288',
latlng: new kakao.maps.LatLng(37.4667902, 127.1007819),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (수서)',
restaurant_img: '',
restaurant_addr: '서울 강남구 밤고개로1길 10',
restaurant_tele: '02-2040-6252',
latlng: new kakao.maps.LatLng(37.4880271, 127.1018278),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (신사)',
restaurant_img: '',
restaurant_addr: '서울 강남구 도산대로11길 5',
restaurant_tele: '02-549-6233',
latlng: new kakao.maps.LatLng(37.5178601, 127.0222847),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (압구정로데오)',
restaurant_img: '',
restaurant_addr: '서울 강남구 압구정로 330',
restaurant_tele: '02-514-6233',
latlng: new kakao.maps.LatLng(37.5282763, 127.03766),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (압구정역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 압구정로 151',
restaurant_tele: '02-3443-8245',
latlng: new kakao.maps.LatLng(37.5277884, 127.0243161),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (양재은광여고)',
restaurant_img: '',
restaurant_addr: '서울 강남구 남부순환로361길 9',
restaurant_tele: '02-579-6277',
latlng: new kakao.maps.LatLng(37.4855614, 127.0370322),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (역삼역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 봉은사로30길 78',
restaurant_tele: '02-539-6234',
latlng: new kakao.maps.LatLng(37.5024922, 127.0370297),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (역삼특허청)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로14길 8',
restaurant_tele: '02-501-3993',
latlng: new kakao.maps.LatLng(37.4986292, 127.0329288),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (일원)',
restaurant_img: '',
restaurant_addr: '서울 강남구 일원로 43',
restaurant_tele: '02-3411-6777',
latlng: new kakao.maps.LatLng(37.49006, 127.081449),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (청담)',
restaurant_img: '',
restaurant_addr: '서울 강남구 학동로 441',
restaurant_tele: '02-540-0779',
latlng: new kakao.maps.LatLng(37.5188899, 127.0490929),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (청담프리마)',
restaurant_img: '',
restaurant_addr: '서울 강남구 도산대로 521',
restaurant_tele: '02-516-4588',
latlng: new kakao.maps.LatLng(37.5248742, 127.0503859),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (코엑스몰)',
restaurant_img: '',
restaurant_addr: '서울 강남구 봉은사로 524',
restaurant_tele: '02-2016-7477',
latlng: new kakao.maps.LatLng(37.5128096, 127.0571899),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽 (학동역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 학동로 165',
restaurant_tele: '02-515-9533',
latlng: new kakao.maps.LatLng(37.5138145, 127.028853),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 가평잣죽(비건), 단호박죽(비건), 동지팥죽(비건), 흑임자죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '본죽&비빔밥cafe (선릉)',
restaurant_img: '',
restaurant_addr: '서울 강남구 선릉로 424',
restaurant_tele: '02-566-7763',
latlng: new kakao.maps.LatLng(37.5029132, 127.050076),
menu : ' 특전복내장죽(페스코), 특전복죽(페스코), 진전복죽(페스코), 전복죽(페스코), 매생이굴죽(페스코), 낙지김치죽(페스코), 해물죽(페스코), 버섯굴죽(페스코), 새우죽(페스코), 참치야채죽(페스코), 6가지야채죽(일반식,비건가능), 동지팥죽(비건), 단호박죽(비건), 녹두죽(비건) '

},
{
restaurant_name: '블렌드랩',
restaurant_img: '',
restaurant_addr: '서울 강남구 언주로113길 14',
restaurant_tele: '010-6831-2411',
latlng: new kakao.maps.LatLng(37.5094056, 127.036217),
menu : ' 비건세트(비건), 아보카도베이글(비건), 바질스무디(비건), 망고&그린스무디(비건) '

},
{
restaurant_name: '비건이삼 (비건23)',
restaurant_img: '',
restaurant_addr: '서울 강남구 삼성로115길 40 1층',
restaurant_tele: '0507-1363-4460',
latlng: new kakao.maps.LatLng(37.5141305, 127.0488705),
menu : ' GF 타르트/스퀘어케이크(비건), 파운드케이크 (비건), 스콘(비건), 마들렌(비건), 머핀(비건), 브라우니(비건), 비스코티(비건), 쿠키(비건), 조각 케이크(비건), 파운드 케이크 (비건), 케이크 (비건) '

},
{
restaurant_name: '산촌',
restaurant_img: '',
restaurant_addr: '서울 강남구 언주로71길 5-10',
restaurant_tele: '02-553-5293',
latlng: new kakao.maps.LatLng(37.4969494, 127.044644),
menu : ' 비빔밥(일반식,비건가능) '

},
{
restaurant_name: '샐러디 (강남역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로84길 23',
restaurant_tele: '02-557-6738',
latlng: new kakao.maps.LatLng(37.4971579, 127.0304145),
menu : ' 언리미트 웜볼(비건), 언리미트 웜랩(락토), 단호박 두부 웜볼(비건), 콥 샐러디(일반식,비건가능), 탄단지 샐러디(일반식,비건가능), 아보크랩 샐러디(페스코), 리코타치즈 샐러디(락토,비건가능), 연어 샐러디(페스코,비건가능), 나만의 샐러디/웜볼(비건), 나만의 샐러디 - 곡물볼(비건) '

},
{
restaurant_name: '샐러디 (삼성)',
restaurant_img: '',
restaurant_addr: '서울 강남구 삼성로96길 6',
restaurant_tele: '02-2191-5071',
latlng: new kakao.maps.LatLng(37.5084527, 127.0565773),
menu : ' 언리미트 웜볼(비건), 언리미트 웜랩(락토), 단호박 두부 웜볼(비건), 콥 샐러디(일반식,비건가능), 탄단지 샐러디(일반식,비건가능), 아보크랩 샐러디(페스코), 리코타치즈 샐러디(락토,비건가능), 연어 샐러디(페스코,비건가능), 나만의 샐러디/웜볼(비건), 나만의 샐러디 - 곡물볼(비건) '

},
{
restaurant_name: '샐러디 (선릉)',
restaurant_img: '',
restaurant_addr: '서울 강남구 선릉로93길 26',
restaurant_tele: '02-556-4066',
latlng: new kakao.maps.LatLng(37.5048302, 127.0464437),
menu : ' 언리미트 웜볼(비건), 언리미트 웜랩(락토), 단호박 두부 웜볼(비건), 콥 샐러디(일반식,비건가능), 탄단지 샐러디(일반식,비건가능), 아보크랩 샐러디(페스코), 리코타치즈 샐러디(락토,비건가능), 연어 샐러디(페스코,비건가능), 나만의 샐러디/웜볼(비건), 나만의 샐러디 - 곡물볼(비건) '

},
{
restaurant_name: '샐러디 (역삼)',
restaurant_img: '',
restaurant_addr: '서울 강남구 논현로85길 13',
restaurant_tele: '02-565-4066',
latlng: new kakao.maps.LatLng(37.4991069, 127.0362589),
menu : ' 언리미트 웜볼(비건), 언리미트 웜랩(락토), 단호박 두부 웜볼(비건), 콥 샐러디(일반식,비건가능), 탄단지 샐러디(일반식,비건가능), 아보크랩 샐러디(페스코), 리코타치즈 샐러디(락토,비건가능), 연어 샐러디(페스코,비건가능), 나만의 샐러디/웜볼(비건), 나만의 샐러디 - 곡물볼(비건) '

},
{
restaurant_name: '샐러디 (익스프레스 압구정)',
restaurant_img: '',
restaurant_addr: '서울 강남구 압구정로 144',
restaurant_tele: '02-516-3321',
latlng: new kakao.maps.LatLng(37.5249795, 127.0246015),
menu : ' 언리미트 웜볼(비건), 언리미트 웜랩(락토), 단호박 두부 웜볼(비건), 콥 샐러디(일반식,비건가능), 탄단지 샐러디(일반식,비건가능), 아보크랩 샐러디(페스코), 리코타치즈 샐러디(락토,비건가능), 연어 샐러디(페스코,비건가능), 나만의 샐러디/웜볼(비건), 나만의 샐러디 - 곡물볼(비건) '

},
{
restaurant_name: '스무디킹 (강남역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로 420',
restaurant_tele: '02-567-4959',
latlng: new kakao.maps.LatLng(37.50014, 127.0270849),
menu : ' 비건 애플 크럼블 케익(비건), 비건 초콜릿 칩 머핀(비건), 비건 당근호두머핀(비건), 비건 블루베리 크럼블케익(비건), 애플 키위 케일주스(비건), 베리 캐롯 주스(비건) '

},
{
restaurant_name: '스무디킹 (논현)',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로 512',
restaurant_tele: '02-3446-5912',
latlng: new kakao.maps.LatLng(37.5079571, 127.0233187),
menu : ' 비건 애플 크럼블 케익(비건), 비건 초콜릿 칩 머핀(비건), 비건 당근호두머핀(비건), 비건 블루베리 크럼블케익(비건), 애플 키위 케일주스(비건), 베리 캐롯 주스(비건) '

},
{
restaurant_name: '스무디킹 (스타필드코엑스몰)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로87길 22 B1',
restaurant_tele: '02-551-5446',
latlng: new kakao.maps.LatLng(37.509638, 127.059458),
menu : ' 비건 애플 크럼블 케익(비건), 비건 초콜릿 칩 머핀(비건), 비건 당근호두머핀(비건), 비건 블루베리 크럼블케익(비건), 애플 키위 케일주스(비건), 베리 캐롯 주스(비건) '

},
{
restaurant_name: '스윗밸런스 (역삼)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로25길 9',
restaurant_tele: '02-556-3222',
latlng: new kakao.maps.LatLng(37.501304, 127.0349752),
menu : ' 초록이(비건), 버섯둥이(오보), 구운 야채(비건), 두유 리조또(락토) '

},
{
restaurant_name: '쏭타이 (역삼)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로39길 51',
restaurant_tele: '02-554-0342',
latlng: new kakao.maps.LatLng(37.5056903, 127.0402799),
menu : ' 똠양꿍(일반식,비건가능), 쏭카롱(비건), 팍붕화이뎅 (비건), 팍톳 (비건), 꾸아이띠아오팍 (비건), 비건 까이팟맷마무어(비건), 레몬그라스수프(비건), 그린커리(비건), 팟카오팍 (비건), 가지튀김(비건) '

},
{
restaurant_name: '아이엠',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로48길 25',
restaurant_tele: '02-577-5032',
latlng: new kakao.maps.LatLng(37.4873919, 127.0349846),
menu : ' 카페라떼(락토,비건가능), 오일 파스타(페스코,비건가능), 아보카도 밥(비건) '

},
{
restaurant_name: '어게인리프레쉬 (가로수길)',
restaurant_img: '',
restaurant_addr: '서울 강남구 논현로153길 57',
restaurant_tele: '02-511-1374',
latlng: new kakao.maps.LatLng(37.5200517, 127.0236249),
menu : ' 아보카도&연어 샐러드(페스코), 아보카도&리코타 샐러드(락토), 리코타치즈(락토,비건가능), 연어 라이스볼(페스코) '

},
{
restaurant_name: '어글리스토브 (신논현강남역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로98길 20',
restaurant_tele: '02-558-8459',
latlng: new kakao.maps.LatLng(37.5007893, 127.0282413),
menu : ' 리코타 치즈 샐러드(락토오보), 쉬림프 알리오올리오(일반식,비건가능), 어글리라이브(비건), 칠리쉬림프 & 아보샐러드(페스코,비건가능) '

},
{
restaurant_name: '역삼정',
restaurant_img: '',
restaurant_addr: '서울 강남구 역삼로19길 31',
restaurant_tele: '02-539-7107',
latlng: new kakao.maps.LatLng(37.4972609, 127.037504),
menu : ' 순두부찌개(일반식,비건가능), 청국장(일반식,비건가능), 부추된장비빔밥(일반식,비건가능) '

},
{
restaurant_name: '오곡당',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로19길 19',
restaurant_tele: '02-564-5111',
latlng: new kakao.maps.LatLng(37.5013432, 127.0331539),
menu : ' 산채비빔밥(비건), 비빔모밀(비건), 해물파전(페스코,비건가능) '

},
{
restaurant_name: '온더보더 (코엑스도심공항)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로87길 22',
restaurant_tele: '02-565-0682',
latlng: new kakao.maps.LatLng(37.509638, 127.059458),
menu : ' BYO(일반식,비건가능), 비건 드레싱: 스모크드 할라피뇨 비네가(비건), 하우스샐러드(락토,비건가능), 구아카몰 라이브(비건), 구아카몰 볼(비건), 보더볼(일반식,비건가능) '

},
{
restaurant_name: '왓어바웃 롤',
restaurant_img: '',
restaurant_addr: '서울 강남구 학동로43길 38',
restaurant_tele: '070-7707-5145',
latlng: new kakao.maps.LatLng(37.5183946, 127.0380018),
menu : '비건쉬림프 템뿌라롤 (비건)'

},
{
restaurant_name: '인도야시장',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로96길 11-4',
restaurant_tele: '02-553-4568',
latlng: new kakao.maps.LatLng(37.5001121, 127.0280692),
menu : ' 파니르 마크니(락토), 팔락 파니르(락토), 알루 팔락(비건), 알루 고비(비건), 머쉬룸 마살라(비건), 믹스트 베지터블(비건), 달 마크니(락토), 달 프라이(비건), 그린 샐러드(비건), 파니르 샐러드(락토), 사모사(비건), 스프링롤(비건), 파코라(비건), 프렌치프라이(비건), 스파이시 프렌치프라이(비건), 사모사 짜트(락토), 타와 알루 짜트(락토), 티끼 플래터(비건), 믹스할디람 과자(비건), 베지터블 풀라오(비건), 로띠(비건) '

},
{
restaurant_name: '죠샌드위치 (논현학사)',
restaurant_img: '',
restaurant_addr: '서울 강남구 도산대로24길 15',
restaurant_tele: '02-516-7776',
latlng: new kakao.maps.LatLng(37.5180317, 127.0267056),
menu : ' 두부 샐러드 빠네디까사(비건), 머쉬룸 샐러드 빠네띠까사(비건), 치즈머쉬룸 빠네디까사(락토), 발사믹잭치즈 빠네디까사(락토), 에그아보카도 빠네띠까사(오보) '

},
{
restaurant_name: '죠샌드위치 (대치사거리)',
restaurant_img: '',
restaurant_addr: '서울 강남구 삼성로 345',
restaurant_tele: '02-555-6535',
latlng: new kakao.maps.LatLng(37.5023066, 127.0587244),
menu : ' 두부 샐러드 빠네디까사(비건), 머쉬룸 샐러드 빠네띠까사(비건), 치즈머쉬룸 빠네디까사(락토), 발사믹잭치즈 빠네디까사(락토), 에그아보카도 빠네띠까사(오보) '

},
{
restaurant_name: '죠샌드위치 (도곡렉슬)',
restaurant_img: '',
restaurant_addr: '서울 강남구 선릉로 225',
restaurant_tele: '02-575-0212',
latlng: new kakao.maps.LatLng(37.495284, 127.0526605),
menu : ' 두부 샐러드 빠네디까사(비건), 머쉬룸 샐러드 빠네띠까사(비건), 치즈머쉬룸 빠네디까사(락토), 발사믹잭치즈 빠네디까사(락토), 에그아보카도 빠네띠까사(오보) '

},
{
restaurant_name: '죠샌드위치 (삼성2호)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로82길 11',
restaurant_tele: '0507-1397-7576',
latlng: new kakao.maps.LatLng(37.5062391, 127.0580869),
menu : ' 두부 샐러드 빠네디까사(비건), 머쉬룸 샐러드 빠네띠까사(비건), 치즈머쉬룸 빠네디까사(락토), 발사믹잭치즈 빠네디까사(락토), 에그아보카도 빠네띠까사(오보) '

},
{
restaurant_name: '죠샌드위치 (선릉)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로77길 13 창조빌딩 1층',
restaurant_tele: '02-562-3001',
latlng: new kakao.maps.LatLng(37.50729, 127.0542846),
menu : ' 두부 샐러드 빠네디까사(비건), 머쉬룸 샐러드 빠네띠까사(비건), 치즈머쉬룸 빠네디까사(락토), 발사믹잭치즈 빠네디까사(락토), 에그아보카도 빠네띠까사(오보) '

},
{
restaurant_name: '죠샌드위치 (압구정)',
restaurant_img: '',
restaurant_addr: '서울 강남구 논현로159길 11',
restaurant_tele: '02-545-5455',
latlng: new kakao.maps.LatLng(37.5229106, 127.0272191),
menu : ' 두부 샐러드 빠네디까사(비건), 머쉬룸 샐러드 빠네띠까사(비건), 치즈머쉬룸 빠네디까사(락토), 발사믹잭치즈 빠네디까사(락토), 에그아보카도 빠네띠까사(오보) '

},
{
restaurant_name: '죠샌드위치 (일원역)',
restaurant_img: '',
restaurant_addr: '서울 강남구 일원로 115 120호 죠샌드위치',
restaurant_tele: '0507-1305-5350',
latlng: new kakao.maps.LatLng(37.4840192, 127.0844628),
menu : ' 두부 샐러드 빠네디까사(비건), 머쉬룸 샐러드 빠네띠까사(비건), 치즈머쉬룸 빠네디까사(락토), 발사믹잭치즈 빠네디까사(락토), 에그아보카도 빠네띠까사(오보) '

},
{
restaurant_name: '죠샌드위치 (포스코사거리)',
restaurant_img: '',
restaurant_addr: '서울 강남구 삼성로85길 42 대치동대우아이빌멤버스',
restaurant_tele: '02-557-2541',
latlng: new kakao.maps.LatLng(37.5045643, 127.0537195),
menu : ' 두부 샐러드 빠네디까사(비건), 머쉬룸 샐러드 빠네띠까사(비건), 치즈머쉬룸 빠네디까사(락토), 발사믹잭치즈 빠네디까사(락토), 에그아보카도 빠네띠까사(오보) '

},
{
restaurant_name: '죠샌드위치 (학동디오빌)',
restaurant_img: '',
restaurant_addr: '서울 강남구 학동로 165 1층  103호',
restaurant_tele: '0507-1315-3527',
latlng: new kakao.maps.LatLng(37.5138145, 127.028853),
menu : ' 두부 샐러드 빠네디까사(비건), 머쉬룸 샐러드 빠네띠까사(비건), 치즈머쉬룸 빠네디까사(락토), 발사믹잭치즈 빠네디까사(락토), 에그아보카도 빠네띠까사(오보) '

},
{
restaurant_name: '칙피스',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로152길 69',
restaurant_tele: '02-6956-6780',
latlng: new kakao.maps.LatLng(37.5191329, 127.0247455),
menu : ' 팔라펠 버거(락토,비건가능), 더 비건 버거(비건), 오리지널 허무스(비건), 사비흐 허무스(비건), 팔라펠 샐러드(비건), 사비흐 샐러드(비건), 아보카도 샐러드(비건), 팔라펠 라이스(비건), 통구이 콜리플라워(비건), 감자튀김(락토,비건가능), 더 비건 샐러드(비건) '

},
{
restaurant_name: '카페 딜리델리',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로43길 19 지상2층 202호',
restaurant_tele: '02-557-4493',
latlng: new kakao.maps.LatLng(37.5046099, 127.0437207),
menu : ' 올리브유사과바게뜨샌드위치(비건),베지테리언가지토마토라자냐(락토) '

},
{
restaurant_name: '캘리포니아 피자키친 (역삼 GFC)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로 152 강남파이낸스센터 B1F',
restaurant_tele: '02-508-5871',
latlng: new kakao.maps.LatLng(37.500028, 127.0365071),
menu : ' 멕시칸 스트리트 콘(락토,비건가능), 스피나치&아티쵸크 딥(락토,비건가능), 썬드라이 토마토&에그플랜트(오보,비건가능), 쉐이브머쉬룸&스피나치(락토,비건가능), 마르게리타 피자(락토,비건가능), 캘리포니아 베지 피자(락토,비건가능), 와일드 머쉬룸 피자(락토,비건가능), 소이미트 크런치 볼(비건), 비건 음료 (비건) '

},
{
restaurant_name: '캘리포니아 피자키친 (코엑스)',
restaurant_img: '',
restaurant_addr: '서울 강남구 영동대로 513 1층',
restaurant_tele: '02-551-6500',
latlng: new kakao.maps.LatLng(37.512561, 127.0587766),
menu : ' 멕시칸 스트리트 콘(락토,비건가능), 스피나치&아티쵸크 딥(락토,비건가능), 썬드라이 토마토&에그플랜트(오보,비건가능), 쉐이브머쉬룸&스피나치(락토,비건가능), 마르게리타 피자(락토,비건가능), 캘리포니아 베지 피자(락토,비건가능), 와일드 머쉬룸 피자(락토,비건가능), 소이미트 크런치 볼(비건), 비건 음료 (비건) '

},
{
restaurant_name: '퀴즈노스 (대치사거리)',
restaurant_img: '',
restaurant_addr: '서울 강남구 역삼로 519 케이제이빌딩 1층 1호',
restaurant_tele: '02-508-1101',
latlng: new kakao.maps.LatLng(37.503768, 127.0600746),
menu : ' 리코타베지&아보카도샌드위치(락토,비건가능), 플렉스 스테이크(락토,비건가능) '

},
{
restaurant_name: '퀴즈노스 (신사위워크)',
restaurant_img: '',
restaurant_addr: '서울 강남구 강남대로 586 위워크 빌딩 1층',
restaurant_tele: '02-2039-9932',
latlng: new kakao.maps.LatLng(37.5142061, 127.0206243),
menu : ' 리코타베지&아보카도샌드위치(락토,비건가능), 플렉스 스테이크(락토,비건가능) '

},
{
restaurant_name: '퀴즈노스 (압구정)',
restaurant_img: '',
restaurant_addr: '서울 강남구 압구정로 144 한주빌딩',
restaurant_tele: '02-3443-3332',
latlng: new kakao.maps.LatLng(37.5249795, 127.0246015),
menu : ' 리코타베지&아보카도샌드위치(락토,비건가능), 플렉스 스테이크(락토,비건가능) '

},
{
restaurant_name: '퀴즈노스 (역삼)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로 230 인호 IP 빌딩',
restaurant_tele: '02-501-8951',
latlng: new kakao.maps.LatLng(37.5018258, 127.0415169),
menu : ' 리코타베지&아보카도샌드위치(락토,비건가능), 플렉스 스테이크(락토,비건가능) '

},
{
restaurant_name: '할랄가이즈 (삼성)',
restaurant_img: '',
restaurant_addr: '서울 강남구 테헤란로 83길 11 지하 2층 8호',
restaurant_tele: '010-7621-5091',
latlng: new kakao.maps.LatLng(37.5081533, 127.057452),
menu : ' 팔라펠 샌드위치(오보,비건가능), 팔라펠 플래터(오보,비건가능), 후무스와 피타(락토) '

},
{
restaurant_name: '해피돌핀 비건분식',
restaurant_img: '',
restaurant_addr: '서울특별시 강남구 학동로43길 38 지하2층 B201호 주방7호',
restaurant_tele: 'nan',
latlng: new kakao.maps.LatLng(37.5183946, 127.0380018),
menu : ' 유부초밥(비건),베지김밥(비건),언리미트베지김밥(비건),콩치킨베지김밥(비건),곤약떡볶이(비건),곤약크림떡볶이(비건),언리미트아보카도덮밥(비건),콩치킨데리야끼덮밥(비건) '

},
{
restaurant_name: '스타일비건',
restaurant_img: '',
restaurant_addr: '서울 강남구 학동로43길 38',
restaurant_tele: '1800-2361',
latlng: new kakao.maps.LatLng(37.5183946, 127.0380018),
menu : ' 클래식 비건치즈(비건), 할라피뇨 스파이시 비건버거(비건), 비건에그 치즈버거(비건), 스모키 비비큐 버섯 비건버거(비건), 바질페스토 비건버거(비건), 와사비 아보카도 비건버거(비건), 더블더블 클래식 버거(비건), 루꼴라 피자(비건), 고르곤졸라 피자(비건), 할라피뇨 피자(비건), 칼조네 피자(비건), 불로냐 피자(비건), 바질페스토 피자(비건), 1인피자(비건), 토마토 구운야채 파스타(비건), 아라비아따 파스타(비건), 바질페스토 시금치 파스타(비건), 찐한 더블 체다 크림치즈 파스타(비건), 카프레제 샐러드(비건), 케토 샐러드(비건), 웨지튀김(비건), 더티 웨지튀김(비건), 트러플 웨지튀김(비건), 콤부차(비건), 에이드(비건), 비건밀크티(비건), 비건밀크쉐이크(비건) '

},

];

// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성
var bounds = new kakao.maps.LatLngBounds();

for (var i = 0; i < positions.length; i++) {
  var data = positions[i];
  displayMarker(data);
  bounds.extend(positions[i].latlng);
}




//functionㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



function displayMarker(data) {
  for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
      map: map,
      position : positions[i].latlng,
      title: positions[i].title
  });
  marker.setMap(map);
  markers.push(marker);
}

  for (var i = 0; i < positions.length; i++) {
  var overlay = new kakao.maps.CustomOverlay({
    position: positions[i].latlng,
    map: null
  });
  overlays.push(overlay);
}


  //content 생성ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  var content = document.createElement('div');
  content.className = "wrap";

  var info = document.createElement('div');
  info.className = "info";
  content.appendChild(info);

  var title = document.createElement('div');
  title.innerHTML = data.restaurant_name;
  title.className = "title";
  info.appendChild(title);

  var closeBtn = document.createElement('button');
  closeBtn.className = "close";
  closeBtn.style.cssText="border:none;"
  closeBtn.onclick = function() {
    overlay.setMap(null);
  };
  title.appendChild(closeBtn);

  var body = document.createElement('div');
  body.className = "body";
  info.appendChild(body);

  var imgDiv = document.createElement('div');
  imgDiv.className = "img";
  body.appendChild(imgDiv);

  var img = document.createElement('img');
  img.src = data.restaurant_img;
  img.width = "73";
  img.height = "70";
  imgDiv.appendChild(img);

  var desc = document.createElement('div');
  desc.className = "desc";
  body.appendChild(desc);

  var ellipsis = document.createElement('div');
  ellipsis.innerHTML = data.restaurant_addr;
  ellipsis.className = "ellipsis";
  desc.appendChild(ellipsis);

  var tele = document.createElement('div');
  tele.innerHTML = '연락처: ' + data.restaurant_tele;
  tele.className = "tele";
  desc.appendChild(tele);

  var menu = document.createElement('div');
  menu.innerHTML = '비건 메뉴 : ' + data.menu;
  menu.className = "menu";
  desc.appendChild(menu);

//여기부터
if (data.hasOwnProperty('vegan')) {
  var vegan = document.createElement('div');
  vegan.innerHTML = data.vegan;
  vegan.className = "tag";
  desc.appendChild(vegan);}
if (data.hasOwnProperty('lacto')) {
  var lacto = document.createElement('div');
  lacto.innerHTML = data.lacto;
  lacto.className = "tag";
  desc.appendChild(lacto);}
if (data.hasOwnProperty('obo')) {
  var obo = document.createElement('div');
  obo.innerHTML = data.obo;
  obo.className = "tag";
  desc.appendChild(obo);
}
if (data.hasOwnProperty('lactoobo')) {
  var lactoobo = document.createElement('div');
  lactoobo.innerHTML = data.lactoobo;
  lactoobo.className = "tag";
  desc.appendChild(lactoobo);}
if (data.hasOwnProperty('fesco')) {
  var fesco = document.createElement('div');
  fesco.innerHTML = data.fesco;
  fesco.className = "tag";
  desc.appendChild(fesco);}
if (data.hasOwnProperty('polo')) {
  var polo = document.createElement('div');
  polo.innerHTML = data.polo;
  polo.className = "tag";
  desc.appendChild(polo);}

//여기까지





  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



  function setMarkers(map) {
      for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
      }
  }


  overlay.setContent(content);

for (var i = 0; i < markers.length; i++) {
kakao.maps.event.addListener(markers[i], 'click', connectOverlay(map, overlays[i]));
function connectOverlay(map, overlay){
  return function(){
    overlay.setMap(map);
  }
}
}



  function clear_except(){
    setMarkers(null);
  }
  var tag_lacto=document.getElementById("lacto");
  var tag_vegan=document.getElementById("vegan");
  var tag_obo=document.getElementById("obo");
  var tag_lactoobo=document.getElementById("lactoobo");
  var tag_fesco=document.getElementById("fesco");
  var tag_polo=document.getElementById("polo");
  tag_vegan.onclick=clear_except;
  tag_lacto.onclick=clear_except;
  tag_obo.onclick=clear_except;
  tag_lactoobo.onclick=clear_except;
  tag_fesco.onclick=clear_except;
  tag_polo.onclick=clear_except;
}




//수정한곳
function panTo(a){
  if(a == "Nowon"){
    var moveLatLon = new kakao.maps.LatLng(37.63003404375192, 127.07633653685478);
    map.panTo(moveLatLon);
  }
  if(a=="Gangnam"){
    var moveLatLon = new kakao.maps.LatLng(37.498065867898255, 127.02760560978642);
    map.panTo(moveLatLon);
  }
  if(a=="Seocho"){
    var moveLatLon = new kakao.maps.LatLng(37.49185700518922, 127.0076987269816);
    map.panTo(moveLatLon);
  }
  if(a=="Mapo"){
    var moveLatLon = new kakao.maps.LatLng(37.55728195019073, 126.92431954788557);
    map.panTo(moveLatLon);
  }
  if(a=="Yongsan"){
    var moveLatLon = new kakao.maps.LatLng(37.52911931485525, 126.96781430527618);
    map.panTo(moveLatLon);
  }
}
//여기까지
//되는척하기
