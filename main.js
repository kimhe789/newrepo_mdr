/* 
        실습 : Todo 리스트 만들기
        1. 사용자가 할 일 입력
        2. 등록버튼 누름
            - 사용자가 입력한 '할 일' 데이터를 가져오기
            - 화면에 보여주기 위한 요소노트, 텍스트노드 생성
              -> 요소노드 : li, button | 텍스트노드: 사용자가 입력한 '할 일', '삭제'
            - 요소노드와 텍스트 노드 연결
            -id가 'todoList'인 ul 요소에 연결

        3. 웹 페이지에 등록한 할 일 출력
        4. 삭제버튼 누를 시 해당 요소만 삭제
            - 버튼에 클릭 이벤트 구현
            - 부모요소.removeChild(삭제할 자식 노드) 활용해서 삭제
    */

const todoList = document.getElementById("todoList");
const addTodoBtn = document.todoForm.addTodoBtn;

addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const todo = document.todoForm.todo.value;

    const new_li = document.createElement("li");
    const new_txt = document.createTextNode(todo);
    // createTextNode(todo) 에 todo 변수가 들어가야함/"todo" 입력하니 todo 뜸 <- 문자열 todo

    const new_button = document.createElement("button");
    const new_btn_txt = document.createTextNode("삭제");

    new_button.appendChild(new_btn_txt);

    new_li.appendChild(new_txt);
    new_li.appendChild(new_button);

    todoList.appendChild(new_li);


});

// 자동정렬 : ctrl + K + F


