// let navTop = $('.nav').offset().top;


// $(window).scroll(function () {

//     let scrollTop = $(this).scrollTop();
//     console.log('navTop', navTop);
//     console.log('scrollTop', scrollTop);

//     if (scrollTop >= navTop) {
//         // nav fixed 
//         $('.nav').addClass('s_fixed');
//     }
//     else {
//         // nav unfixed 
//         $('.nav').removeClass('s_fixed');
//     }
// })

let heart = document.getElementsByClassName('s_heart-button')
for (let h of heart) {
    h.addEventListener("click", function (e) {
        // h.style.transform = "scale(1.2)";
        h.classList.toggle('s_heart_color');
        // console.log(h)
    });
}

// https://www.cnblogs.com/WindrunnerMax/p/13091710.html

$(".s_hotSale_dogFeed_Btn_PC").click(function () {
    $(".s_hotSale_dogFeed_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_dogCan_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogCan_Btn_PC").click(function () {
    $(".s_hotSale_dogCan_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_dogFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogSnack_Btn_PC").click(function () {
    $(".s_hotSale_dogSnack_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_dogFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogCan_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogOtherProduct_Btn_PC").click(function () {
    $(".s_hotSale_dogOtherProduct_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_dogFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogCan_Sec_PC").css('display', 'none');

    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});



$(".s_hotSale_catFeed_Btn_PC").click(function () {
    $(".s_hotSale_catFeed_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_catCan_Sec_PC").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catCan_Btn_PC").click(function () {
    $(".s_hotSale_catCan_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_catFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catSnack_Btn_PC").click(function () {
    $(".s_hotSale_catSnack_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_catFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_catCan_Sec_PC").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catOtherProduct_Btn_PC").click(function () {
    $(".s_hotSale_catOtherProduct_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_catFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_catCan_Sec_PC").css('display', 'none');

    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});


$(".s_hotSale_dogFeed_Btn_ph").click(function () {
    $(".s_hotSale_dogFeed_Sec_ph").css('display', 'block');
    $(".s_hotSale_dogCan_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogCan_Btn_ph").click(function () {
    $(".s_hotSale_dogCan_Sec_ph").css('position', 'absolute').css('left', '1500px');
    $(".s_hotSale_dogFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogSnack_Btn_ph").click(function () {
    $(".s_hotSale_dogSnack_Sec_ph").css('display', 'block');
    // .css(' transform', 'translateY(100px)')
    $(".s_hotSale_dogFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogCan_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogOtherProduct_Btn_ph").click(function () {
    $(".s_hotSale_dogOtherProduct_Sec_ph").css('display', 'block');
    $(".s_hotSale_dogFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogCan_Sec_ph").css('display', 'none');

    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});



$(".s_hotSale_catFeed_Btn_ph").click(function () {
    $(".s_hotSale_catFeed_Sec_ph").css('display', 'block');
    $(".s_hotSale_catCan_Sec_ph").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catCan_Btn_ph").click(function () {
    $(".s_hotSale_catCan_Sec_ph").css('display', 'block');
    $(".s_hotSale_catFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catSnack_Btn_ph").click(function () {
    $(".s_hotSale_catSnack_Sec_ph").css('display', 'block');
    $(".s_hotSale_catFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_catCan_Sec_ph").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catOtherProduct_Btn_ph").click(function () {
    $(".s_hotSale_catOtherProduct_Sec_ph").css('display', 'block');
    $(".s_hotSale_catFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_catCan_Sec_ph").css('display', 'none');

    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});









$(".s_index_column_DogBtn").click(function () {
    $(".s_index_column_DogArea").css('display', 'flex');
    $(".s_index_column_CatArea").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_index_column_CatBtn").click(function () {
    // $(".s_index_column_CatArea").css('visibility', 'visible');
    // $(".s_index_column_DogArea").css('visibility', 'hidden');
    $(".s_index_column_CatArea").css('display', 'flex');
    $(".s_index_column_DogArea").css('display', 'none');
    // $(".s_index_column_CatArea").show();
    // $(".s_index_column_DogArea").hide();
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});




















  // $(function () {
  //   var len = 30; // 超過50個字以"..."取代
  //   $(".s_index_column_index_dog_para").each(function (i) {
  //     if ($(this).text().length > len) {
  //       $(this).attr("title", $(this).text());
  //       var text = $(this).text().substring(0, len - 1) + "...";
  //       $(this).text(text);
  //     }
  //   });
  // });
