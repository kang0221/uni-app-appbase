
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"me-image { width: 100%; position: absolute; }\n.",[1],"me-login { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; z-index: 1; padding-top: 100%; }\n.",[1],"me-login-input { z-index: 1; margin: ",[0,30]," ",[0,10],"; width: 60%; }\n.",[1],"reg-submit { display: block; margin-top: ",[0,30],"; padding: ",[0,10],"; text-align: center; color: white; border-radius: ",[0,23.5],"; background-color: #2196f3; box-shadow: 0 0 ",[0,10]," rgba(51, 211, 201, .35); }\n",],undefined,{path:"./pages/login/login.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/login/login.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      