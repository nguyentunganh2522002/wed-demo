<?php
session_start();
$conn = new mysqli("localhost", "root", "", "test_db");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $_SESSION['username'] = $username;
        echo "Đăng nhập thành công!";
        // Redirect to dashboard
    } else {
        echo "Tên đăng nhập hoặc mật khẩu không đúng!";
    }
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Đăng nhập</title>
</head>
<body>
    <form method="POST" action="">
        Tên đăng nhập: <input type="text" name="username"><br>
        Mật khẩu: <input type="password" name="password"><br>
        <button type="submit">Đăng nhập</button>
    </form>
</body>
</html>
<?php
function countWordOccurrences($str, $word) {
    $words = explode(" ", $str);
    $count = 0;

    foreach ($words as $w) {
        if ($w == $word) {
            $count++;
        }
    }

    return $count;
}

$str = "Lập trình PHP rất thú vị và PHP là một ngôn ngữ lập trình mạnh mẽ";
$word = "PHP";

echo "Số lần xuất hiện của từ '$word' trong chuỗi: " . countWordOccurrences($str, $word);
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];
    $description = $_POST['description'];

    $sql = "INSERT INTO tasks (title, description) VALUES ('$title', '$description')";
    if ($conn->query($sql) === TRUE) {
        echo "Thêm công việc thành công!";
    } else {
        echo "Lỗi: " . $conn->error;
    }
}
?>
<?php
$sql = "SELECT * FROM tasks";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()) {
    echo "ID: " . $row["id"]. " - Tiêu đề: " . $row["title"]. " - Trạng thái: " . $row["status"]. "<br>";
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $status = $_POST['status'];

    $sql = "UPDATE tasks SET title='$title', description='$description', status='$status' WHERE id=$id";
    if ($conn->query($sql) === TRUE) {
        echo "Sửa công việc thành công!";
    } else {
        echo "Lỗi: " . $conn->error;
    }
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    $sql = "DELETE FROM tasks WHERE id=$id";
    if ($conn->query($sql) === TRUE) {
        echo "Xóa công việc thành công!";
    } else {
        echo "Lỗi: " . $conn->error;
    }
}
?>
<?php
session_start();

if (!isset($_SESSION['visited'])) {
    $_SESSION['visited'] = true;
    $counter_file = "counter.txt";

    if (!file_exists($counter_file)) {
        file_put_contents($counter_file, 0);
    }

    $counter = file_get_contents($counter_file);
    $counter++;
    file_put_contents($counter_file, $counter);
}

$counter = file_get_contents("counter.txt");
echo "Số lượt truy cập: " . $counter;
?>
