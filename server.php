<?php
    $todo_list = file_get_contents('todo-list.json');

    $list = json_decode($todo_list, true);

    if(isset($_POST['item'])){
        $item = $_POST['item'];
        array_push($list, $item);

        file_put_contents('todo-list.json', jsone_encode($list));
    }

    header('Content-type: application/json');

    echo json_encode($list);
    
?>