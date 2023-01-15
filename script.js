/*khai báo let list bằng bên trong query có .list và .item để lấy toàn bộ danh sách trong list và item*/
let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset  = false;

            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }

        }
    })
})/*add là nút thêm giỏ hàng, appendchild thuộc tính là di dời, tạo biến mớiitem dong var */
/*list chạy  vòng for, khi vòng trong vòng for từng item sẽ lắng nghe khi có  1 sự kiện click chuột nó sẽ chạy*/

function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}

/*add là nút thêm giỏ hàng, appendchild thuộc tính là di dời, tạo biến mớiitem dong var */
/*list chạy  vòng for, khi vòng trong vòng for từng item sẽ lắng nghe khi có  1 sự kiện click chuột nó sẽ chạy*/