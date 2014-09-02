function doDateFilterCallback(status, results) {
    if (status == 100) {
        kony.print("===============> service call initiated " + status);
    } else if (status == 200) {
        kony.print("===============> service call in progress " + status);
    } else if (status == 400 && results.opstatus == 0) {
        kony.print("===============> service call complete " + status);
        kony.print("=================> " + JSON.stringify(results));
        alert(JSON.stringify(results.item));
        //       if (results. != null) {
        //        
        //            var temp = [];
        //            for (var i = 0; i < results.subCategories.length; i++) {
        //            	
        //                temp.push({
        //                    "id": results.subCategories[i]["id"],
        //                    "name": results.subCategories[i]["name"],
        //                    "imgarrow": "rightarrow.png"
        //                });
        //            }
    }
}