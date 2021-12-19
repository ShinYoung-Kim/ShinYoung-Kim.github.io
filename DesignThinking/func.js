var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.63003404375192, 127.07633653685478), // 중심좌표
        level: 4 // 확대 레벨 (1~14 클수록 축소됨)
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성
var map = new kakao.maps.Map(mapContainer, mapOption);

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
    restaurant_homepage: 'https://sprout-korea.com/ko/weekly-order-form-ko/',
    latlng: new kakao.maps.LatLng(37.62637458840914, 127.07434558876018)
  },
  {
    restaurant_name: '마이브라더스',
    restaurant_img: '',
    restaurant_addr: '노원구 공릉동 737번지',
    restaurant_homepage: '',
    latlng: new kakao.maps.LatLng(37.62682978192174, 127.08173420429078)
  }
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
  var marker = new kakao.maps.Marker({
    map: map,
    position : positions[i].latlng,
    title: positions[i].title
  });
  var overlay = new kakao.maps.CustomOverlay({
    map: null,
    position: marker.getPosition()
  });

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

  var linkDiv = document.createElement('div');
  desc.appendChild(linkDiv);

  var link = document.createElement('a');
  link.href = data.restaurant_homepage;
  link.target = "_blank";
  link.className = "link";
  link.innerHTML = "공식 홈페이지";
  linkDiv.appendChild(link);
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  overlay.setContent(content);

  kakao.maps.event.addListener(marker, 'click', function() {
    overlay.setMap(map);
  });

  bounds.extend(data.latlng);
}



//지도 중심으로 부드럽게 이동하는 함수
function panTo() {
    // 이동할 위도 경도 위치를 생성
    var moveLatLon = new kakao.maps.LatLng(37.63003404375192, 127.07633653685478);

    // 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동.
    map.panTo(moveLatLon);
}

// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정하는 함수
function setBounds() {
    // 지도의 중심좌표와 레벨이 변경될 수 있음
    map.setBounds(bounds);
}

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
function closeOverlay() {
    overlay.setMap(null);
}
