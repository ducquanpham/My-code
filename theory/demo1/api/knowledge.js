// cors: Cross Origin  Resource sharing => chia sẻ tài nguyên giữa các origin với nhau (origin =>)
// same origin: check có phải cùng đầu main hay không

// status
// 200 - Success( Mỗi lần get trả về , hoặc trả về khi thành công 1 cái gì đó)
// 201 - Create ( tạo dữ liệu thành công)

// Hàng 3 redirect (điều hướng)
// 301 - Moved Permanently
// 307 - Temporary Redirect

// Hàng 4 là lỗi

// 400 Bad Request ( mạng chậm)
// 401 Unauthorized (khi truy cập vàoAPI đó và yêu cầu đăng nhập -> k đăng nhập truy cập =>)
// 403 Forbidden => không thể truy cập được
// 404 not Found => k tìm thấy
//  408 Request Timeout ( quá time lâu quá => k lấy đc data)

// Hàng 5 server
// 502 Bad Gateway          => server die
// 504 Gateway Timeout    =>

// Method
// => POST GET PUT PATCH DELETE
/**
 *  1.GET         => CALL API lấy dữ liệu về  khi muốn truy xuất dữ liệu
 *  2. POST      => lưu dự liệu
 *  3. PUT        => update dữ liệu  ( sửa all rescoure trong data)
 *  4.PATCH     => sửa 1 phần dữ liệu
 * PUT,PATCH  => update dữ liệu
 *  5.DELETE   => xoá  dữ liệu
 */
