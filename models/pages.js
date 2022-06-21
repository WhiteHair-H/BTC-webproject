$('#LogoLink').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('home', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

$('#login').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('login', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});