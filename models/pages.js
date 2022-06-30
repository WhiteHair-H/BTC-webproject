// LogoLink
$('#LogoLink').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('home', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// Login
$('#login').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('login', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// 회원가입
$('#membership').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('membership', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// 서비스 및 제품
$('#svpr').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('svpr', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// 비용
$('#bill').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('bill', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// 게시판
$('#board').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('board', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// 가이드
$('#giude').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('giude', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// 자료공유
$('#info').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('info', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// 뉴스 및 공지
$('#news').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('news', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

/* ------------ 서비스 제품 및 분석 ----------------- */

// Managed service
$('#services_1').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('services_1', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});


// Migration Ops
$('#services_2').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('services_2', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// DevOps
$('#services_3').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('services_3', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});


// DataOps
$('#services_4').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('services_4', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});

// SecOps
$('#services_5').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('services_5', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});


// PinOps
$('#services_6').click(function() { // id속성을 가진 div를 클릭을 할경우 이벤트
    $.ajax('services_6', { // 서버에 경로를 요청 (경로설정)
        success: function(data) { //success를 하면 실행 하도록 함 함수에 서버로 부터 받은 data를 파라미터로 사용
            $('body').empty(); //선택한 요소의 내용을 지움. DOM에서 일치하는 요소 집합의 모든 하위 노드를 제거합니다.
            $('body').append(data); // body에 서버로 부터 받은 데이터를 붙임.
        }
    })
});