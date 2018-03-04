//************ Xử lý Thể hiện ***************/
function Tao_Th_Danh_sach_Mat_hang(Danh_sach) {
  
  var Dia_chi_Media = "../Media"
  var Th_Danh_sach = document.createElement("div")
  Th_Danh_sach.className = "row"

  for (var i = 0; i < Danh_sach.getElementsByTagName("Mat_hang").length; i++) {
    var Mat_hang = Danh_sach.getElementsByTagName("Mat_hang")[i]
    var Ten = Mat_hang.getAttribute("Ten")
    var Ma_so = Mat_hang.getAttribute("Ma_so")
    var Don_gia_Ban = parseInt(Mat_hang.getAttribute("Don_gia_Ban"))

    var Doanh_thu = 0
    for(var j = 0; j < Mat_hang.getElementsByTagName("Ban_hang").length; j++)
    {
      Doanh_thu += parseInt(Mat_hang.getElementsByTagName("Ban_hang")[j].getAttribute("Tien"))
    }
    
    var Th_Hinh = document.createElement("img")
    Th_Hinh.src = `${Dia_chi_Media}/${Ma_so}.png`
    Th_Hinh.style.cssText = `width:150px;height:150px;border-radius:50%;`

    var Th_Thong_tin = document.createElement("div")
    Th_Thong_tin.className = `btn`
    Th_Thong_tin.style.cssText = `line-height:1.2`
    Th_Thong_tin.innerHTML = `${Ten}
                    <br />Đơn giá Bán 
                    ${Don_gia_Ban.toLocaleString("vi")}
                    <br />Doanh thu
                    ${Doanh_thu.toLocaleString("vi")}`
    var Th_Mat_hang = document.createElement("div")//the div chua hinh va noi dung
    Th_Mat_hang.className = `col-md-3`
    Th_Mat_hang.style.cssText = `padding:10px;width:200px;height:250px;margin:8px;display:inline-block;background: rgba(0, 0, 3, 0.4);text-align:center;`
    Th_Mat_hang.appendChild(Th_Hinh)
    Th_Mat_hang.appendChild(Th_Thong_tin)

    Th_Danh_sach.appendChild(Th_Mat_hang)
  }
  return Th_Danh_sach
}
//************** Xử lý Nghiệp vụ ***********
// Tra cứu với Phiên bản cải tiến 
function Tim_Mat_Hang(Name,id){
  var Danh_sach_Mat_hang =Doc_Danh_sach_Mat_hang()
  var The_mat_hang = document.createElement("div")
  for(var i = 0; i < Danh_sach_Mat_hang.getElementsByTagName("Mat_hang").length; i++)
  {
    if(Name == Danh_sach_Mat_hang.getElementsByTagName("Mat_hang")[i].getAttribute("Ten"))
    {
      var Mat_hang=Danh_sach_Mat_hang.getElementsByTagName("Mat_hang")[i]
      var Ten = Mat_hang.getAttribute("Ten")
      var Gia_ban = Mat_hang.getAttribute("Don_gia_Ban")

    var Doanh_thu = 0
    for(var j = 0; j < Mat_hang.getElementsByTagName("Ban_hang").length; j++)
    {
      Doanh_thu += parseInt(Mat_hang.getElementsByTagName("Ban_hang")[j].getAttribute("Tien"))
    }
      document.getElementById(id).innerHTML=`Tên: ${Ten} / Giá bán: ${Gia_ban.toLocaleString("vi")}<br />Doanh thu: ${Doanh_thu.toLocaleString("vi")}`
    }
  }
}

// ************** Xử lý Lưu trữ *********** 
// PET : Lưu ý Kỹ thuật này đã lạc lậu
// nhưng rất thích hợp khi Giảng dạy mở đầu
function Doc_Danh_sach_Mat_hang() { 
  var Xu_ly_HTTP = new XMLHttpRequest()
  Xu_ly_HTTP.open("GET", "../2-Du_lieu_Luu_tru/Du_lieu.xml", false)
  Xu_ly_HTTP.send("")
  var Chuoi_XML = Xu_ly_HTTP.responseText
  var Du_lieu = new DOMParser().parseFromString(Chuoi_XML, "text/xml").documentElement
  var Danh_sach_Mat_hang=Du_lieu.getElementsByTagName("Danh_sach_Mat_hang")[0]
  return Danh_sach_Mat_hang
}

