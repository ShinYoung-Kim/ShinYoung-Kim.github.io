var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.63003404375192, 127.07633653685478),
        level: 4 // 확대 레벨 (1~14 클수록 축소됨)
    };
var map = new kakao.maps.Map(mapContainer, mapOption);

var restaurant = [
  {
    name: '롯데리아 공릉점',
    img: '',
    addr: '이태원로14길 21',
    tele: '02-977-2430',
    latlng: new kakao.maps.LatLng(37.62637458840914, 127.07434558876018),
    //kind: 'food',
    tag1: '베지테리언'
  },
  {
    name: '마이브라더스',
    img: '',
    addr: '노원구 공릉동 737번지',
    tele: '070-4227-7576',
    latlng: new kakao.maps.LatLng(37.62682978192174, 127.08173420429078),
    //kind: 'food',
    tag1:'베지테리언',
    tag2: '오보',
    tag3: '락토오보'
  },
  {
name: 'WHAT A CHEF (왓어쉐프)',
img: '',
addr: '서울 강남구 선릉로157길 23-3',
tele: '070-8285-3337',
latlng: new kakao.maps.LatLng(37.5259988, 127.0379268),
tag1 : '베지테리언',tag2 : '락토',tag3 : '페스코'

},
{
name: '가로수길 칼국수',
img: '',
addr: '서울 강남구 압구정로2길 46',
tele: '02-512-6474',
latlng: new kakao.maps.LatLng(37.5187478, 127.0206781),
tag1 : '베지테리언'

},
{
name: '강가 (역삼)',
img: '',
addr: '서울 강남구 논현로 508',
tele: '02-2005-0610',
latlng: new kakao.maps.LatLng(37.5021366, 127.0376223),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '강남더수제비',
img: '',
addr: '서울 강남구 강남대로94길 23',
tele: '02-561-5831',
latlng: new kakao.maps.LatLng(37.4997519, 127.0291935),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '개성집',
img: '',
addr: '서울 강남구 봉은사로1길 6',
tele: '02-547-8526',
latlng: new kakao.maps.LatLng(37.5052609, 127.025254),
tag1 : '베지테리언',tag2 : '오보',tag3 : '페스코'

},
{
name: '걸신맛집',
img: '',
addr: '서울 강남구 테헤란로6길 29',
tele: '02-566-9285',
latlng: new kakao.maps.LatLng(37.4967327, 127.0313021),
tag1 : '베지테리언',tag2 : '오보',tag3 : '페스코'

},
{
name: '과수당',
img: '',
addr: '서울 강남구 역삼로14길 10 1층 102호',
tele: '0507-1444-0047',
latlng: new kakao.maps.LatLng(37.4939634, 127.0353298),
tag1 : '베지테리언'

},
{
name: '그리너 샐러드 (논현점)',
img: '',
addr: '서울 강남구 강남대로124길 35',
tele: '070-8880-3430',
latlng: new kakao.maps.LatLng(37.5094065, 127.0253471),
tag1 : '베지테리언'

},
{
name: '그리너 샐러드 (대치점)',
img: '',
addr: '서울 강남구 역삼로64길 18',
tele: '070-8844-3430',
latlng: new kakao.maps.LatLng(37.4999005, 127.0530546),
tag1 : '베지테리언'

},
{
name: '내여자를부탁해 (선릉)',
img: '',
addr: '서울 강남구 테헤란로 322',
tele: '02-2183-2040',
latlng: new kakao.maps.LatLng(37.5032366, 127.0465997),
tag1 : '베지테리언'

},
{
name: '노이에아트멍',
img: '',
addr: '서울 강남구 도산대로23길 19',
tele: '070-8834-5444',
latlng: new kakao.maps.LatLng(37.52026, 127.0259413),
tag1 : '베지테리언'

},
{
name: '닥터비건',
img: '',
addr: '서울특별시 강남구 도산대로68길 25',
tele: '02-543-2030',
latlng: new kakao.maps.LatLng(37.5219174, 127.0446312),
tag1 : '베지테리언'

},
{
name: '더드림',
img: '',
addr: '서울 강남구 강남대로78길 25',
tele: '02-508-6777',
latlng: new kakao.maps.LatLng(37.495444, 127.0312848),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '더드림 (본점)',
img: '',
addr: '서울 강남구 언주로85길 13',
tele: '02-567-4323',
latlng: new kakao.maps.LatLng(37.5004802, 127.0422466),
tag1 : '베지테리언'

},
{
name: '더벨로 (개포)',
img: '',
addr: '서울 강남구 선릉로 30',
tele: '02-576-0045',
latlng: new kakao.maps.LatLng(37.4825121, 127.0612002),
tag1 : '베지테리언'

},
{
name: '도스타코스 (선릉)',
img: '',
addr: '서울 강남구 테헤란로69길 10',
tele: '02-555-4731',
latlng: new kakao.maps.LatLng(37.5066018, 127.0527324),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '두부공작소 신사직영점',
img: '',
addr: '서울 강남구 강남대로160길 21',
tele: '02-6339-3646',
latlng: new kakao.maps.LatLng(37.5198006, 127.020506),
tag1 : '베지테리언',tag2 : '오보'

},
{
name: '두잉',
img: '',
addr: '서울 강남구 삼성로 654 B01호',
tele: '02-544-5752',
latlng: new kakao.maps.LatLng(37.5185966, 127.0507256),
tag1 : '베지테리언'

},
{
name: '러빙헛 스마일',
img: '',
addr: '서울 강남구 논현로6길 18',
tele: '02-578-0512',
latlng: new kakao.maps.LatLng(37.4735192, 127.0510021),
tag1 : '베지테리언'

},
{
name: '러빙헛 카페',
img: '',
addr: '서울 강남구 개포로22길 35',
tele: '02-576-2158',
latlng: new kakao.maps.LatLng(37.4769037, 127.0494443),
tag1 : '베지테리언'

},
{
name: '로봇김밥 (강남역)',
img: '',
addr: '서울 강남구 테헤란로 101',
tele: '02-3452-9993',
latlng: new kakao.maps.LatLng(37.4985981, 127.0280435),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보',tag4 : '페스코'

},
{
name: '롤링파스타 (강남역씨티)',
img: '',
addr: '서울 강남구 테헤란로1길 25',
tele: '02-557-2223',
latlng: new kakao.maps.LatLng(37.4999715, 127.0274037),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '롯데리아 (강남우성사거리0',
img: '',
addr: '서울 강남구 강남대로 334 SM타워',
tele: '02-501-4642',
latlng: new kakao.maps.LatLng(37.4929956, 127.0304796),
tag1 : '베지테리언'

},
{
name: '롯데리아 (강남일원)',
img: '',
addr: '서울 강남구 양재대로55길 21',
tele: '02-451-2211',
latlng: new kakao.maps.LatLng(37.4923218, 127.0872903),
tag1 : '베지테리언'

},
{
name: '롯데리아 (개포)',
img: '',
addr: '서울 강남구 선릉로 26',
tele: '02-576-0840',
latlng: new kakao.maps.LatLng(37.482244, 127.061475),
tag1 : '베지테리언'

},
{
name: '롯데리아 (선릉)',
img: '',
addr: '서울 강남구 테헤란로 316 메트라이프타워',
tele: '0507-1423-5939',
latlng: new kakao.maps.LatLng(37.5034354, 127.0455566),
tag1 : '베지테리언'

},
{
name: '롯데리아 (세곡)',
img: '',
addr: '서울 강남구 헌릉로 569',
tele: '02-459-9999',
latlng: new kakao.maps.LatLng(37.4657572, 127.1012126),
tag1 : '베지테리언'

},
{
name: '롯데리아 (수서역)',
img: '',
addr: '서울 강남구 밤고개로 99',
tele: '02-459-9424',
latlng: new kakao.maps.LatLng(37.4854167, 127.1045615),
tag1 : '베지테리언'

},
{
name: '롯데리아 (역삼)',
img: '',
addr: '서울 강남구 테헤란로 116 동경빌딩',
tele: '02-3453-4054',
latlng: new kakao.maps.LatLng(37.4984835, 127.0305444),
tag1 : '베지테리언'

},
{
name: '롯데리아 (학동역)',
img: '',
addr: '서울 강남구 학동로 219 국제빌딩',
tele: '02-3443-9200',
latlng: new kakao.maps.LatLng(37.515003, 127.033136),
tag1 : '베지테리언'

},
{
name: '르알레스카 가로수길(Le ALASKA)',
img: '',
addr: '서울 강남구 압구정로14길 15',
tele: '02-546-5872',
latlng: new kakao.maps.LatLng(37.5233923, 127.0233551),
tag1 : '베지테리언'

},
{
name: '리밍',
img: '',
addr: '서울 강남구 테헤란로37길 27',
tele: '02-3453-4788',
latlng: new kakao.maps.LatLng(37.5040311, 127.0401202),
tag1 : '베지테리언'

},
{
name: '마녀샐러드 (역삼)',
img: '',
addr: '서울 강남구 강남대로94길 75',
tele: '02-568-8874',
latlng: new kakao.maps.LatLng(37.5007507, 127.0334216),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '마치래빗 (신사)',
img: '',
addr: '서울 강남구 논현로153길 45',
tele: '070-4531-4514',
latlng: new kakao.maps.LatLng(37.5203205, 127.0245377),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '마히나 비건 테이블',
img: '',
addr: '서울 강남구 논현로175길 75 2층',
tele: '070-4105-5331',
latlng: new kakao.maps.LatLng(37.5236602, 127.0230575),
tag1 : '베지테리언'

},
{
name: '명동칼국수',
img: '',
addr: '서울 강남구 테헤란로 124',
tele: '02-539-2898',
latlng: new kakao.maps.LatLng(37.4987814, 127.0317054),
tag1 : '베지테리언'

},
{
name: '명동칼국수샤브샤브 (역삼디오빌)',
img: '',
addr: '서울 강남구 언주로 427',
tele: '02-2193-6060',
latlng: new kakao.maps.LatLng(37.5013935, 127.0426534),
tag1 : '베지테리언',tag2 : '오보'

},
{
name: '모스가든',
img: '',
addr: '서울 강남구 논현로139길 12',
tele: '02-546-8532',
latlng: new kakao.maps.LatLng(37.5166667, 127.0283522),
tag1 : '베지테리언'

},
{
name: '미락',
img: '',
addr: '서울 강남구 언주로107길 43',
tele: '02-501-0310',
latlng: new kakao.maps.LatLng(37.5069056, 127.0357175),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '반미362 (대치)',
img: '',
addr: '서울 강남구 도곡로 458',
tele: '02-566-3620',
latlng: new kakao.maps.LatLng(37.4984008, 127.0604585),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보',tag4 : '락토오보'

},
{
name: '베지그린',
img: '',
addr: '서울 강남구 개포로20길 24-10',
tele: '02-577-6316',
latlng: new kakao.maps.LatLng(37.4769861, 127.0473742),
tag1 : '베지테리언'

},
{
name: '베커린',
img: '',
addr: '서울 강남구 봉은사로55길 42-8',
tele: '0507-1309-7960',
latlng: new kakao.maps.LatLng(37.5134077, 127.0441628),
tag1 : '베지테리언'

},
{
name: '본도시락 (신논현역)',
img: '',
addr: '서울 강남구 강남대로110길 15',
tele: '02-563-4282',
latlng: new kakao.maps.LatLng(37.5039891, 127.0261867),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본도시락 (역삼초교)',
img: '',
addr: '서울 강남구 역삼로7길 7',
tele: '02-558-4282',
latlng: new kakao.maps.LatLng(37.4944942, 127.0330273),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본도시락 (차병원사거리)',
img: '',
addr: '서울 강남구 봉은사로34길 9',
tele: '02-562-4282',
latlng: new kakao.maps.LatLng(37.5073438, 127.0364131),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (강남구청역)',
img: '',
addr: '서울 강남구 선릉로 717',
tele: '02-540-3777',
latlng: new kakao.maps.LatLng(37.5187034, 127.0405205),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (강남세브란스사거리)',
img: '',
addr: '서울 강남구 언주로 314',
tele: '02-557-6277',
latlng: new kakao.maps.LatLng(37.495892, 127.0464782),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (개포동)',
img: '',
addr: '서울 강남구 선릉로 40',
tele: '02-3462-6233',
latlng: new kakao.maps.LatLng(37.4832345, 127.0602527),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (개포동역)',
img: '',
addr: '서울 강남구 개포로 510',
tele: '02-445-6288',
latlng: new kakao.maps.LatLng(37.4892996, 127.0683524),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (경복아파트)',
img: '',
addr: '서울 강남구 언주로114길 23',
tele: '02-515-2288',
latlng: new kakao.maps.LatLng(37.5104409, 127.0394273),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (대치롯데)',
img: '',
addr: '서울 강남구 도곡로 405',
tele: '02-567-2926',
latlng: new kakao.maps.LatLng(37.497391, 127.0547261),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (대치은마)',
img: '',
addr: '서울 강남구 도곡로 516',
tele: '02-501-6211',
latlng: new kakao.maps.LatLng(37.4991869, 127.0630046),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (도심공항타워)',
img: '',
addr: '서울 강남구 테헤란로87길 36',
tele: '02-2016-7477',
latlng: new kakao.maps.LatLng(37.510215, 127.0583649),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (매봉역)',
img: '',
addr: '서울 강남구 남부순환로378길 12',
tele: '02-575-6245',
latlng: new kakao.maps.LatLng(37.4854259, 127.0458763),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (삼성차관아파트)',
img: '',
addr: '서울 강남구 봉은사로 474',
tele: '02-555-0686',
latlng: new kakao.maps.LatLng(37.5122513, 127.0516091),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (선릉역)',
img: '',
addr: '서울 강남구 선릉로93길 26',
tele: '02-556-6288',
latlng: new kakao.maps.LatLng(37.5048302, 127.0464437),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (세곡)',
img: '',
addr: '서울 강남구 헌릉로569길 9',
tele: '02-451-6288',
latlng: new kakao.maps.LatLng(37.4667902, 127.1007819),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (수서)',
img: '',
addr: '서울 강남구 밤고개로1길 10',
tele: '02-2040-6252',
latlng: new kakao.maps.LatLng(37.4880271, 127.1018278),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (신사)',
img: '',
addr: '서울 강남구 도산대로11길 5',
tele: '02-549-6233',
latlng: new kakao.maps.LatLng(37.5178601, 127.0222847),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (압구정로데오)',
img: '',
addr: '서울 강남구 압구정로 330',
tele: '02-514-6233',
latlng: new kakao.maps.LatLng(37.5282763, 127.03766),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (압구정역)',
img: '',
addr: '서울 강남구 압구정로 151',
tele: '02-3443-8245',
latlng: new kakao.maps.LatLng(37.5277884, 127.0243161),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (양재은광여고)',
img: '',
addr: '서울 강남구 남부순환로361길 9',
tele: '02-579-6277',
latlng: new kakao.maps.LatLng(37.4855614, 127.0370322),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (역삼역)',
img: '',
addr: '서울 강남구 봉은사로30길 78',
tele: '02-539-6234',
latlng: new kakao.maps.LatLng(37.5024922, 127.0370297),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (역삼특허청)',
img: '',
addr: '서울 강남구 테헤란로14길 8',
tele: '02-501-3993',
latlng: new kakao.maps.LatLng(37.4986292, 127.0329288),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (일원)',
img: '',
addr: '서울 강남구 일원로 43',
tele: '02-3411-6777',
latlng: new kakao.maps.LatLng(37.49006, 127.081449),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (청담)',
img: '',
addr: '서울 강남구 학동로 441',
tele: '02-540-0779',
latlng: new kakao.maps.LatLng(37.5188899, 127.0490929),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (청담프리마)',
img: '',
addr: '서울 강남구 도산대로 521',
tele: '02-516-4588',
latlng: new kakao.maps.LatLng(37.5248742, 127.0503859),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (코엑스몰)',
img: '',
addr: '서울 강남구 봉은사로 524',
tele: '02-2016-7477',
latlng: new kakao.maps.LatLng(37.5128096, 127.0571899),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽 (학동역)',
img: '',
addr: '서울 강남구 학동로 165',
tele: '02-515-9533',
latlng: new kakao.maps.LatLng(37.5138145, 127.028853),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '본죽&비빔밥cafe (선릉)',
img: '',
addr: '서울 강남구 선릉로 424',
tele: '02-566-7763',
latlng: new kakao.maps.LatLng(37.5029132, 127.050076),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '블렌드랩',
img: '',
addr: '서울 강남구 언주로113길 14',
tele: '010-6831-2411',
latlng: new kakao.maps.LatLng(37.5094056, 127.036217),
tag1 : '베지테리언'

},
{
name: '비건이삼 (비건23)',
img: '',
addr: '서울 강남구 삼성로115길 40 1층',
tele: '0507-1363-4460',
latlng: new kakao.maps.LatLng(37.5141305, 127.0488705),
tag1 : '베지테리언'

},
{
name: '산촌',
img: '',
addr: '서울 강남구 언주로71길 5-10',
tele: '02-553-5293',
latlng: new kakao.maps.LatLng(37.4969494, 127.044644),
tag1 : '베지테리언'

},
{
name: '샐러디 (강남역)',
img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MjhfMTQ0%2FMDAxNjI3NDc5OTI3NTMw.XPhStLIL7xqWfyeZTDh50OCtqkdPdxNB3axl6zhnk9Qg.-TjizK2qEAK6NzpbqueLRWNYmJy14ljU9YrbX4wpwXYg.PNG.realestateconsulting%2FScreen_Shot_2021-07-28_at_10.31.35_PM.png&type=sc960_832',
addr: '서울 강남구 강남대로84길 23',
tele: '02-557-6738',
latlng: new kakao.maps.LatLng(37.4971579, 127.0304145),
tag1 : '베지테리언',tag2 : '락토',tag3 : '페스코'

},
{
name: '샐러디 (삼성)',
img: '',
addr: '서울 강남구 삼성로96길 6',
tele: '02-2191-5071',
latlng: new kakao.maps.LatLng(37.5084527, 127.0565773),
tag1 : '베지테리언',tag2 : '락토',tag3 : '페스코'

},
{
name: '샐러디 (선릉)',
img: '',
addr: '서울 강남구 선릉로93길 26',
tele: '02-556-4066',
latlng: new kakao.maps.LatLng(37.5048302, 127.0464437),
tag1 : '베지테리언',tag2 : '락토',tag3 : '페스코'

},
{
name: '샐러디 (역삼)',
img: '',
addr: '서울 강남구 논현로85길 13',
tele: '02-565-4066',
latlng: new kakao.maps.LatLng(37.4991069, 127.0362589),
tag1 : '베지테리언',tag2 : '락토',tag3 : '페스코'

},
{
name: '샐러디 (익스프레스 압구정)',
img: '',
addr: '서울 강남구 압구정로 144',
tele: '02-516-3321',
latlng: new kakao.maps.LatLng(37.5249795, 127.0246015),
tag1 : '베지테리언',tag2 : '락토',tag3 : '페스코'

},
{
name: '스무디킹 (강남역)',
img: '',
addr: '서울 강남구 강남대로 420',
tele: '02-567-4959',
latlng: new kakao.maps.LatLng(37.50014, 127.0270849),
tag1 : '베지테리언'

},
{
name: '스무디킹 (논현)',
img: '',
addr: '서울 강남구 강남대로 512',
tele: '02-3446-5912',
latlng: new kakao.maps.LatLng(37.5079571, 127.0233187),
tag1 : '베지테리언'

},
{
name: '스무디킹 (스타필드코엑스몰)',
img: '',
addr: '서울 강남구 테헤란로87길 22 B1',
tele: '02-551-5446',
latlng: new kakao.maps.LatLng(37.509638, 127.059458),
tag1 : '베지테리언'

},
{
name: '스윗밸런스 (역삼)',
img: '',
addr: '서울 강남구 테헤란로25길 9',
tele: '02-556-3222',
latlng: new kakao.maps.LatLng(37.501304, 127.0349752),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '쏭타이 (역삼)',
img: '',
addr: '서울 강남구 테헤란로39길 51',
tele: '02-554-0342',
latlng: new kakao.maps.LatLng(37.5056903, 127.0402799),
tag1 : '베지테리언'

},
{
name: '아이엠',
img: '',
addr: '서울 강남구 강남대로48길 25',
tele: '02-577-5032',
latlng: new kakao.maps.LatLng(37.4873919, 127.0349846),
tag1 : '베지테리언',tag2 : '락토',tag3 : '페스코'

},
{
name: '어게인리프레쉬 (가로수길)',
img: '',
addr: '서울 강남구 논현로153길 57',
tele: '02-511-1374',
latlng: new kakao.maps.LatLng(37.5200517, 127.0236249),
tag1 : '베지테리언',tag2 : '락토',tag3 : '페스코'

},
{
name: '어글리스토브 (신논현강남역)',
img: '',
addr: '서울 강남구 강남대로98길 20',
tele: '02-558-8459',
latlng: new kakao.maps.LatLng(37.5007893, 127.0282413),
tag1 : '베지테리언', tag2 : '락토', tag3 : '오보', tag4 : '락토오보', tag5 : '페스코'

},
{
name: '역삼정',
img: '',
addr: '서울 강남구 역삼로19길 31',
tele: '02-539-7107',
latlng: new kakao.maps.LatLng(37.4972609, 127.037504),
tag1 : '베지테리언'

},
{
name: '오곡당',
img: '',
addr: '서울 강남구 테헤란로19길 19',
tele: '02-564-5111',
latlng: new kakao.maps.LatLng(37.5013432, 127.0331539),
tag1 : '베지테리언',tag2 : '페스코'

},
{
name: '온더보더 (코엑스도심공항)',
img: '',
addr: '서울 강남구 테헤란로87길 22',
tele: '02-565-0682',
latlng: new kakao.maps.LatLng(37.509638, 127.059458),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '왓어바웃 롤',
img: '',
addr: '서울 강남구 학동로43길 38',
tele: '070-7707-5145',
latlng: new kakao.maps.LatLng(37.5183946, 127.0380018),
tag1 : '베지테리언'

},
{
name: '인도야시장',
img: '',
addr: '서울 강남구 강남대로96길 11-4',
tele: '02-553-4568',
latlng: new kakao.maps.LatLng(37.5001121, 127.0280692),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '죠샌드위치 (논현학사)',
img: '',
addr: '서울 강남구 도산대로24길 15',
tele: '02-516-7776',
latlng: new kakao.maps.LatLng(37.5180317, 127.0267056),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '죠샌드위치 (대치사거리)',
img: '',
addr: '서울 강남구 삼성로 345',
tele: '02-555-6535',
latlng: new kakao.maps.LatLng(37.5023066, 127.0587244),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '죠샌드위치 (도곡렉슬)',
img: '',
addr: '서울 강남구 선릉로 225',
tele: '02-575-0212',
latlng: new kakao.maps.LatLng(37.495284, 127.0526605),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '죠샌드위치 (삼성2호)',
img: '',
addr: '서울 강남구 테헤란로82길 11',
tele: '0507-1397-7576',
latlng: new kakao.maps.LatLng(37.5062391, 127.0580869),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '죠샌드위치 (선릉)',
img: '',
addr: '서울 강남구 테헤란로77길 13 창조빌딩 1층',
tele: '02-562-3001',
latlng: new kakao.maps.LatLng(37.50729, 127.0542846),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '죠샌드위치 (압구정)',
img: '',
addr: '서울 강남구 논현로159길 11',
tele: '02-545-5455',
latlng: new kakao.maps.LatLng(37.5229106, 127.0272191),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '죠샌드위치 (일원역)',
img: '',
addr: '서울 강남구 일원로 115 120호 죠샌드위치',
tele: '0507-1305-5350',
latlng: new kakao.maps.LatLng(37.4840192, 127.0844628),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '죠샌드위치 (포스코사거리)',
img: '',
addr: '서울 강남구 삼성로85길 42 대치동대우아이빌멤버스',
tele: '02-557-2541',
latlng: new kakao.maps.LatLng(37.5045643, 127.0537195),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '죠샌드위치 (학동디오빌)',
img: '',
addr: '서울 강남구 학동로 165 1층  103호',
tele: '0507-1315-3527',
latlng: new kakao.maps.LatLng(37.5138145, 127.028853),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '칙피스',
img: '',
addr: '서울 강남구 강남대로152길 69',
tele: '02-6956-6780',
latlng: new kakao.maps.LatLng(37.5191329, 127.0247455),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '카페 딜리델리',
img: '',
addr: '서울 강남구 테헤란로43길 19 지상2층 202호',
tele: '02-557-4493',
latlng: new kakao.maps.LatLng(37.5046099, 127.0437207),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '캘리포니아 피자키친 (역삼 GFC)',
img: '',
addr: '서울 강남구 테헤란로 152 강남파이낸스센터 B1F',
tele: '02-508-5871',
latlng: new kakao.maps.LatLng(37.500028, 127.0365071),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '캘리포니아 피자키친 (코엑스)',
img: '',
addr: '서울 강남구 영동대로 513 1층',
tele: '02-551-6500',
latlng: new kakao.maps.LatLng(37.512561, 127.0587766),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '퀴즈노스 (대치사거리)',
img: '',
addr: '서울 강남구 역삼로 519 케이제이빌딩 1층 1호',
tele: '02-508-1101',
latlng: new kakao.maps.LatLng(37.503768, 127.0600746),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '퀴즈노스 (신사위워크)',
img: '',
addr: '서울 강남구 강남대로 586 위워크 빌딩 1층',
tele: '02-2039-9932',
latlng: new kakao.maps.LatLng(37.5142061, 127.0206243),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '퀴즈노스 (압구정)',
img: '',
addr: '서울 강남구 압구정로 144 한주빌딩',
tele: '02-3443-3332',
latlng: new kakao.maps.LatLng(37.5249795, 127.0246015),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '퀴즈노스 (역삼)',
img: '',
addr: '서울 강남구 테헤란로 230 인호 IP 빌딩',
tele: '02-501-8951',
latlng: new kakao.maps.LatLng(37.5018258, 127.0415169),
tag1 : '베지테리언',tag2 : '락토'

},
{
name: '할랄가이즈 (삼성)',
img: '',
addr: '서울 강남구 테헤란로 83길 11 지하 2층 8호',
tele: '010-7621-5091',
latlng: new kakao.maps.LatLng(37.5081533, 127.057452),
tag1 : '베지테리언',tag2 : '락토',tag3 : '오보'

},
{
name: '해피돌핀 비건분식',
img: '',
addr: '서울특별시 강남구 학동로43길 38 지하2층 B201호 주방7호',
tele: 'nan',
latlng: new kakao.maps.LatLng(37.5183946, 127.0380018),
tag1 : '베지테리언'

},
{
name: '스타일비건',
img: '',
addr: '서울 강남구 학동로43길 38',
tele: '1800-2361',
latlng: new kakao.maps.LatLng(37.5183946, 127.0380018),
tag1 : '베지테리언'

}
];
var upcycling = [
  {
    name: '프라이탁스토어 서울압구정',
    img: '',
    addr: '서울 강남구 신사동 654-3',
    tele: '02-547-0605',
    latlng: new kakao.maps.LatLng(37.52471872069981, 127.03859907585787),
    tag1: '업사이클링',
    tag2: '가방'
  },
  {
    name: '아름다운가게',
    img: '',
    addr: '서울 강남구 논현동 116-11',
    tele: '02-542-0014',
    latlng: new kakao.maps.LatLng(37.51636433398107, 127.03785484945021),
    tag1: '업사이클링',
    tag2: '생활용품'
  },
  {
    name: '비보트(bvoat)',
    img: '',
    addr: '서울 강남구 봉은사로4길 24',
    tele: '010-3051-2487',
    latlng: new kakao.maps.LatLng(37.50325151345756, 127.02639969712959),
    tag1: '업사이클링',
    tag2: '의류'
  }
];
var veganBeauty = [
  {
    name: '더 바디샵 강남3점',
    img: '',
    addr: '서울특별시 강남구 역삼동 816-1',
    tele: '02-562-1816',
    latlng: new kakao.maps.LatLng(37.50003221840443, 127.027045073892),
    tag1: '비건뷰티'
  },
  {
    name: '더 바디샵 신강남역점',
    img: '',
    addr: '서울 강남구 신사동 654-3',
    tele: '070-4713-8535',
    latlng: new kakao.maps.LatLng(37.496612574727656, 127.02824142666093),
    tag1: '비건뷰티'
  },
  {
    name: '디어달리아',
    img: '',
    addr: '서울 강남구 도산대로45길 14',
    tele: '02-547-0502',
    latlng: new kakao.maps.LatLng(37.5232217575314, 127.03561181568683),
    tag1: '비건뷰티'
  }
];
var zeroWaste = [
  {
    name: '지구샵 상도점',
    img: '',
    addr: '서울 동작구 성대로1길 16',
    tele: '070-7721-3336',
    latlng: new kakao.maps.LatLng(37.5007532559927, 126.93385819640346),
    tag1: '제로웨이스트'
  },
  {
    name: '아로마티카 제로스테이션',
    img: '',
    addr: '서울 강남구 도산대로1길 62',
    tele: '031-777-5293',
    latlng: new kakao.maps.LatLng(37.52076591677507, 127.01941409595337),
    tag1: '제로웨이스트'
  }
];

var markerImageSrc = 'https://i.ibb.co/609GTTp/image.png';
var restaurantMarkers = [],
    upcyclingMarkers = [],
    veganBeautyMarkers = [],
    zeroWasteMarkers = [];
var restaurantOverlays = [],
    upcyclingOverlays = [],
    veganBeautyOverlays = [],
    zeroWasteOverlays = [];

for (var i = 0; i < restaurant.length; i++) {
  var data = restaurant[i];
  createRestaurantMarkers(data);
}
for (var i = 0; i < upcycling.length; i++) {
  var data = upcycling[i];
  createUpcyclingMarkers(data);
}
for (var i = 0; i < veganBeauty.length; i++) {
  var data = veganBeauty[i];
  createVeganBeautyMarkers();
}
for (var i = 0; i < zeroWaste.length; i++) {
  var data = zeroWaste[i];
  createZeroWasteMarkers();
}
changeMarker('restaurant');

var clickedOverlay = null;
//functionㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function createContent(data, overlay) {
  var content = document.createElement('div');
  content.className = "wrap";

  var info = document.createElement('div');
  info.className = "info";
  content.appendChild(info);

  var title = document.createElement('div');
  title.innerHTML = data.name;
  title.className = "title";
  info.appendChild(title);

  var closeBtn = document.createElement('button');
  closeBtn.className = "close";
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
  img.src = data.img;
  img.width = "70";
  img.height = "70";
  img.className="storeimg"
  imgDiv.appendChild(img);

  var desc = document.createElement('div');
  desc.className = "desc";
  body.appendChild(desc);

  var ellipsis = document.createElement('div');
  ellipsis.innerHTML = '<img class="address_pic" src="https://i.ibb.co/PgyKQRn/image.png"><div class="address">주소</div><div class="address_info">'+data.addr+'</div>';
  ellipsis.className = "ellipsis";
  desc.appendChild(ellipsis);

  var tele = document.createElement('div');
  tele.innerHTML = '<img class="call_pic" src="https://i.ibb.co/QNDYgjW/image.png"><div class="call">연락처</div><div class="call_info">' + data.tele+'</div><div class="clear"></div>';
  tele.className = "tele";
  desc.appendChild(tele);

  var tag1 = document.createElement('div');
  tag1.innerHTML = data.tag1;
  tag1.className = "tag";
  desc.appendChild(tag1);

  if (data.hasOwnProperty('tag2')) {
    var tag2 = document.createElement('div');
    tag2.innerHTML = data.tag2;
    tag2.className = "tag";
    desc.appendChild(tag2);
    if (data.hasOwnProperty('tag3')) {
      var tag3 = document.createElement('div');
      tag3.innerHTML = data.tag3;
      tag3.className = "tag";
      desc.appendChild(tag3);
      if (data.hasOwnProperty('tag4')) {
        var tag4 = document.createElement('div');
        tag4.innerHTML = data.tag4;
        tag4.className = "tag";
        desc.appendChild(tag4);
      }
    }
  }
  return content;
} //content 생성 함수

function createMarkerImage(src, size, options) {
  var markerImage = new kakao.maps.MarkerImage(src, size, options);
  return markerImage;
}

function createMarker(position, image) {
  var marker = new kakao.maps.Marker({
    map: map,
    position: position.latlng,
    image: image
  });
  return marker;
}

function createOverlay(marker) {
  var overlay = new kakao.maps.CustomOverlay({
    map: null,
    position: marker.getPosition()
  });
  return overlay;
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function createRestaurantMarkers() {
  var imgSize = new kakao.maps.Size(34,40),
      imageOption = {offset: new kakao.maps.Point(27, 69)};
  var markerImage = new kakao.maps.MarkerImage(markerImageSrc, imgSize, imageOption),
      marker = createMarker(restaurant[i], markerImage);
  restaurantMarkers.push(marker);

  var overlay = createOverlay(marker);
  var content = createContent(restaurant[i], overlay);
  overlay.setContent(content);

  kakao.maps.event.addListener(marker, 'click', function() {
    if (clickedOverlay) {
      clickedOverlay.setMap(null);
    }
    overlay.setMap(map);
    clickedOverlay = overlay;
  });
  restaurantOverlays.push(overlay);
}
function setRestaurantMarkers(map) {
  for (var i = 0; i < restaurant.length; i++) {
    restaurantMarkers[i].setMap(map);
  }
}
function setRestaurantOverlays(map) {
  for (var i = 0; i < restaurant.length; i++) {
    restaurantOverlays[i].setMap(map);
  }
}

function createUpcyclingMarkers() {
  var imgSize = new kakao.maps.Size(34,40),
      imageOption = {offset: new kakao.maps.Point(27, 69)};
  var markerImage = new kakao.maps.MarkerImage(markerImageSrc, imgSize, imageOption),
      marker = createMarker(upcycling[i], markerImage);
  upcyclingMarkers.push(marker);

  var overlay = createOverlay(marker);
  var content = createContent(upcycling[i], overlay);
  overlay.setContent(content);

  kakao.maps.event.addListener(marker, 'click', function() {
    if (clickedOverlay) {
      clickedOverlay.setMap(null);
    }
    overlay.setMap(map);
    clickedOverlay = overlay;
  });
  upcyclingOverlays.push(overlay);
}
function setUpcyclingMarkers(map) {
  for (var i = 0; i < upcycling.length; i++) {
    upcyclingMarkers[i].setMap(map);
  }
}
function setUpcyclingOverlays(map) {
  for (var i = 0; i < upcycling.length; i++) {
    upcyclingOverlays[i].setMap(map);
  }
}

function createVeganBeautyMarkers() {
  var imgSize = new kakao.maps.Size(34,40),
      imageOption = {offset: new kakao.maps.Point(27, 69)};
  var markerImage = new kakao.maps.MarkerImage(markerImageSrc, imgSize, imageOption),
      marker = createMarker(veganBeauty[i], markerImage);
  veganBeautyMarkers.push(marker);

  var overlay = createOverlay(marker);
  var content = createContent(veganBeauty[i], overlay);
  overlay.setContent(content);

  kakao.maps.event.addListener(marker, 'click', function() {
    if (clickedOverlay) {
      clickedOverlay.setMap(null);
    }
    overlay.setMap(map);
    clickedOverlay = overlay;
  });
  veganBeautyOverlays.push(overlay);
}
function setVeganBeautyMarkers(map) {
  for (var i = 0; i < veganBeauty.length; i++) {
    veganBeautyMarkers[i].setMap(map);
  }
}
function setVeganBeautyOverlays(map) {
  for (var i = 0; i < veganBeauty.length; i++) {
    veganBeautyOverlays[i].setMap(map);
  }
}

function createZeroWasteMarkers() {
  var imgSize = new kakao.maps.Size(34,40),
      imageOption = {offset: new kakao.maps.Point(27, 69)};
  var markerImage = new kakao.maps.MarkerImage(markerImageSrc, imgSize, imageOption),
      marker = createMarker(zeroWaste[i], markerImage);
  zeroWasteMarkers.push(marker);

  var overlay = createOverlay(marker);
  var content = createContent(zeroWaste[i], overlay);
  overlay.setContent(content);

  kakao.maps.event.addListener(marker, 'click', function() {
    if (clickedOverlay) {
      clickedOverlay.setMap(null);
    }
    overlay.setMap(map);
    clickedOverlay = overlay;
  });
  zeroWasteOverlays.push(overlay);
}
function setZeroWasteMarkers(map) {
  for (var i = 0; i < zeroWaste.length; i++) {
    zeroWasteMarkers[i].setMap(map);
  }
}
function setZeroWasteOverlays(map) {
  for (var i = 0; i < zeroWaste.length; i++) {
    zeroWasteOverlays[i].setMap(map);
  }
}

function changeMarker(type) {
  if (type === 'restaurant') {
    setRestaurantMarkers(map);
    setUpcyclingMarkers(null);
    setVeganBeautyMarkers(null);
    setZeroWasteMarkers(null);
  } else if (type === 'upcycling') {
    setRestaurantMarkers(null);
    setUpcyclingMarkers(map);
    setVeganBeautyMarkers(null);
    setZeroWasteMarkers(null);
  } else if (type === 'veganBeauty') {
    setRestaurantMarkers(null);
    setUpcyclingMarkers(null);
    setVeganBeautyMarkers(map);
    setZeroWasteMarkers(null);
  } else if (type === 'zeroWaste') {
    setRestaurantMarkers(null);
    setUpcyclingMarkers(null);
    setVeganBeautyMarkers(null);
    setZeroWasteMarkers(map);
  }
  setRestaurantOverlays(null);
  setUpcyclingOverlays(null);
  setVeganBeautyOverlays(null);
  setZeroWasteOverlays(null);
}

function panTo(a){
  if(a=="Nowon"){
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

function findTag(keyWord){
  if (keyWord === '락토' || keyWord === '오보' || keyWord === '락토오보' ||
      keyWord === '페스코' || keyWord === '폴로') {
    for (var i = 0; i < restaurant.length; i++) {
      if (restaurant[i].tag1 == keyWord || restaurant[i].tag2 == keyWord
      || restaurant[i].tag3 == keyWord || restaurant[i].tag4 == keyWord) {
        restaurantMarkers[i].setMap(map);
        restaurantOverlays[i].setMap(null);
      } else {
        restaurantMarkers[i].setMap(null);
        restaurantOverlays[i].setMap(null);
      }
    }
    setUpcyclingMarkers(null);
    setUpcyclingOverlays(null);
    setVeganBeautyMarkers(null);
    setVeganBeautyOverlays(null);
    setZeroWasteMarkers(null);
    setZeroWasteOverlays(null);
  } else if (keyWord === '의류' || keyWord === '가방' || keyWord === '생활용품') {
    for (var i = 0; i < upcycling.length; i++) {
      if (upcycling[i].tag1 == keyWord || upcycling[i].tag2 == keyWord || upcycling[i].tag3 == keyWord) {
        upcyclingMarkers[i].setMap(map);
        upcyclingOverlays[i].setMap(null);
      } else {
        upcyclingMarkers[i].setMap(null);
        upcyclingOverlays[i].setMap(null);
      }
    }
    setRestaurantMarkers(null);
    setRestaurantOverlays(null);
    setVeganBeautyMarkers(null);
    setVeganBeautyOverlays(null);
    setZeroWasteMarkers(null);
    setZeroWasteOverlays(null);
  } else if (keyWord === '화장품' || keyWord === '향수') {
    for (var i = 0; i < veganBeauty.length; i++) {
      if (veganBeauty[i].tag1 == keyWord || veganBeauty[i].tag2 == keyWord) {
        veganBeautyMarkers[i].setMap(map);
        veganBeautyOverlays[i].setMap(null);
      } else {
        veganBeautyMarkers[i].setMap(null);
        veganBeautyOverlays[i].setMap(null);
      }
    }
    setRestaurantMarkers(null);
    setRestaurantOverlays(null);
    setUpcyclingMarkers(null);
    setUpcyclingOverlays(null);
    setZeroWasteMarkers(null);
    setZeroWasteOverlays(null);
  }
}
