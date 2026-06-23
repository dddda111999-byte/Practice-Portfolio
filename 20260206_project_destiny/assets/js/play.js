let data = datas[document.getElementById("title").getAttribute("data-txt")];
let btn = document.getElementById("btn"); // 抽籤的btn
let load = document.getElementById("load"); // 抽籤時的畫面
let result = document.getElementById("result"); // 抽籤結果
let txt;

// 選分類
// 當 data 指向 lucky 分類時，for...in 會去抓取 lucky 物件裡面的所有「名稱」
// 原本在ol裡面輸入三個選項清單，這裡改成自動生成並且加上,item
for (const itemList in data) { // 把選項清單填入data(父層 .tittle標籤 data-txt分類)
    let li = document.createElement("li"); // 1. 創立一個新的列表項目 let li 是你的變數名稱，而 "li" 是 HTML 的標籤名稱
    // css的item是main#home .box .full .item像這樣被包起來的 這裡被包起來的位置不一樣所以不影響
    // js沒有連結homeSlide.js而是另外兩個js所以不影響
    li.classList.add("item");
    li.textContent = itemList; // 4. 把選項清單填入data()
    // document 找按鈕）、改東西（改文字）、或是加東西（加清單），你都必須先呼叫 document 這個總管，它才擁有權限去操作這張網頁
    // 如果不加 [0]，你拿到的是一個「清單」而不是「標籤本身」，電腦會不知道要把東西塞進清單的哪裡，進而導致程式報錯
    document.getElementsByTagName("ol")[0].appendChild(li); //  document.找到"ol"標籤.附加子元素li變數創建的"li" 
}

// 按下抽籤
// 設一個變數items去找.item的li標籤位置
let items = document.getElementsByClassName("item"); // 從上面第二行被往後移到這邊 因為前面要先增加.item不然系統不知道在說什麼
for (const item of items) { // 網頁只跑一次的開關 目的：幫每一個選項（item）裝上「監聽器（耳朵）」
    item.addEventListener("click",function(){  // 點擊動作
        // 點擊後，先清掉發亮效果，不然點下去一直點每個燈都會亮著
        // items(清單全部)是.item(單個)上的選單們，itm是items的每一個選項被拉出來
        for (const itm of items) { // 點擊時就會啟動 先跑這層迴圈把所有燈都關掉
            itm.classList.remove("active");
        }
        // Math.floor() 無條件捨去  Math.ceil()無條件進位  Math.round()	四捨五入
        let x = Math.floor(Math.random()*30);
        // data 最開始定義的大變數（從 datas 抓過來的分類內容）裡面包含："今日運勢"、"本週運勢"、"今年流年"
        // [this.textContent] 是你點到的那個 <li> 標籤上面的字 data["今日運勢"]：這會幫你定位到 data 物件裡面的那一個陣列 (Array)
        // data["今日運勢"][0] 抓取今日運勢陣列裡的第 0 個項目
        document.getElementById("result").textContent = data[this.textContent][x];
        this.classList.add("active"); // 這個標籤 加上燈
        txt = this.textContent; // 這個標籤存進txt，「今日運勢」...

        // 設定下面抽籤按鈕開始執行抽籤效果
        btn.addEventListener("click",function(){ 
            load.classList.remove("none");  // 抽籤時的畫面
            result.classList.remove("none"); // 抽籤結果
            document.getElementsByTagName("ol")[0].remove(); // remove() 針對自己所以沒寫東西
            document.getElementById("title").textContent = txt; // 把標題換成上面選到的txt填入
            this.textContent = "再抽一次"; // 改變開始抽籤字樣
            this.addEventListener("click",function(){ // 在變成再點一次之後要再點擊才會觸發的click
                window.location.reload(); // 視窗．位置．重新載入 因為整個效果都是寫在同一夜的所以只要觸發就會變回還未選擇的樣子
            })
            // setTimeout(動作, 毫秒)
            setTimeout(function(){
                load.remove(); // 前面都先設定好後，這個最後跑，點下去之後跑完跑這行，到新頁面時就會變化
            },1000)
        })
    })
}
