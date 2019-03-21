
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"list-page { background: #fafafa; }\n.",[1],"text { margin: ",[0,16]," 0; background-color: #fff; color: #555; border-radius: ",[0,8],"; padding: ",[0,20],"; }\n.",[1],"home-list-block-title { border-bottom: ",[0,1]," solid #f6f6f6; margin-bottom: ",[0,5],"; }\n.",[1],"home-list-block-detail { color: #aaa; font-size: ",[0,12],"; line-height: ",[0,26],"; }\n",],undefined,{path:"./pages/list/list.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/list/list.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      