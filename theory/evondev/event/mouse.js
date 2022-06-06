// 1.mousemove,  mouseover, mouseenter, mouseleave;
// mouseover: chạy khi rê chuột vào  phần tử và con của phần tử đó
// mouseenter: nó chạy khi rê chuột vào  phần tử con của phần tử đó
// mouseleave:  nó chạy khi rê chuột vào phần từ rồi rê ra ngoài
// enter >< leave
// 2.clientX,Y và pageX,Y
document.addEventListener("mousemove", function (event) {
  console.log(`pageY: ${event.pageY}`);
  console.log(`clientY: ${event.clientY}`);
});
// clientY:  lấy toạ độ theo viewport
// pageY: lấy toạ độ document, khi có scroll thì  nó sẽ thay đổi
// X: chiều width
// Y: chiều height
