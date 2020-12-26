function r(f){
    if(document.readyState != "loading"){
        f();
    }else{
        document.addEventListener("DOMContentLoaded", f);
    }
}

r(function(){

    function s(x){
        var y = document.querySelectorAll(x);
        if(y.length > 0){
            if(y.length > 1){
                return(y);
            }else{
                return(document.querySelector(x));
            }
        }else{
            return "";
        }
    }

    function h(...data){

        let size = data.length;

        if(size==3){
            if(typeof(data[0]) == "object" && typeof(data[1]) == "string" && typeof(data[2]) == "function"){
                data[0].addEventListener(data[1], function () {
                    data[2]();
                });
            }
        }

    }

    function setAllDatas(allDatasSelector){
        if(allDatasSelector != null && !allDatasSelector.length){
            allDatas[allDatasSelector.getAttribute("tab_data")] = allDatasSelector;
            allDatasSelector.parentNode.removeChild(allDatasSelector);
        }else if (allDatasSelector.length > 1) {
            for(let i = 0; i < allDatasSelector.length; i++){
                allDatas[allDatasSelector[i].getAttribute("tab_data")] = allDatasSelector[i];
                allDatasSelector[i].parentNode.removeChild(allDatasSelector[i]);
            }
        }else{
            allDatas = 0;
        }

        return allDatas;
    }

    function setAllTargets(allTargetsSelector){
        if(allTargetsSelector != null && !allTargetsSelector.length){
            allTargets[0] = allTargetsSelector;
        }else if (allTargetsSelector.length > 1) {
            for(let i = 0; i < allTargetsSelector.length; i++){
                allTargets[i] = allTargetsSelector[i];
            }
        }else{
            allTargets = 0;
        }

        return allTargets;
    }

    function showTarget(i){
        if(allDatas[i] != null){
            area.innerHTML = allDatas[i].innerHTML;
        }
    }

    var all = s("[tab=system]");

    if(all.length != 0){
        if(all.length > 1){

        }else{

            var allDatasSelector = s("[tab=system] [tab_data]");
            var allTargetsSelector = s("[tab=system] [tab_target]");
            var area = s("[tab=system] [tab_area]");
            var allDatas = {};
            var allTargets = [];

            allDatas = setAllDatas(allDatasSelector);
            allTargets = setAllTargets(allTargetsSelector);

            if(allTargets != 0){
                for(let i = 0; i < allTargets.length; i++){
                    h(allTargets[i], "click", function(){
                        showTarget(allTargets[i].getAttribute("tab_target"));
                    });
                }
            }

        }
    }

});
