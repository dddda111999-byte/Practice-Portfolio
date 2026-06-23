// 平滑滾動
let full = document.getElementsByClassName("full")[0];
let x = 0; // 索引值
// 向前切換 (#prev 點擊事件)
document.getElementById("prev").addEventListener("click",function(){
    x--; // 2 1 0 的順序
    if(x < 0){ // 當 x < 0 時,第一張0 的前一張2即最後一張
        x = 2;
    }
    full.style.transform = "translateX(" + (-100 / 3) * x + "%)";
    // 因為 圖片第一張是0 第二張是移動-33.3 第三張是移動-66.6 才會跑到最左邊的位置
    // 所以一樣是 -100 計算
})


// 向後切換 (#next 點擊事件)
document.getElementById("next").addEventListener("click",function(){
    x++; // 0 1 2 的順序
    if(x >= 3){ // 如果 x >= 3 時,x 跳回第一張 0
        x = 0;
    }
    full.style.transform = "translateX(" + (-100 / 3) * x + "%)";
})


// 自動輪播 (setInterval) 
// let 變數名稱 = setInterval(要執行的函式, 毫秒時間);
let slideRun = setInterval(function(){
    x++;
    if(x >= 3){ // 如果 x >= 3
        x = 0; // x = 0 第一張 然後從第一張開始 +1 
            // 無限輪混所以不會超過或等於第三張
    }
    full.style.transform = "translateX(" + (-100 / 3) * x + "%)";
},2500)

// full.style.transform = "translateX(" + (-100 / 3) * x + "%)"; 
// 輸送帶（.full）要往左邊推多少距離
// x（索引值）：代表你現在要看第幾張圖
// 100 / 3：因為你的 .full 裡面裝了 3 張圖，所以每一張圖佔了整條輸送帶寬度的 $1/3$（大約 $33.33\%$）
// 因為是往左滑動，所以是x軸的 負值 引導移動方向 就使用-100
//  (總長度  / 總共有幾張圖 ) * 要推開幾張圖
// "translateX(" + (數字運算) + "%)"
// 因為 translateX( 不是 JavaScript 的指令，它是 CSS 的屬性值。我們必須用引號把它包起來，當作文字傳遞給 CSS
// "%)"：數值的單位與結尾 這也是為了讓 JavaScript 知道要把運算出來的數字後面，接上 % 這個符號
// "translateX(" 文字 (String) + (-100 / 3) * x	數字 (Number)，電腦會先算出 + "%)"	文字 (String)

// 第一步：拿字串 "translateX(" 加上 數字 -33.33。

// 結果：變成一個新的字串 "translateX(-33.33"。

// 第二步：拿這個新字串加上最後一個字串 "%)"。

// 最終結果："translateX(-33.33%)"。

// full.style.transform = 
// full 不是標籤本身 它是你在 JavaScript 裡宣告的一個「遙控器」
// 程式碼的第一行寫了 let full = ...。這代表你以後只要喊 full，電腦就知道你要對網頁上那個 class="full" 的長盒子做事情
// .style 樣式表（CSS）
// .transform 樣式表裡其中的一個「控制項目」

