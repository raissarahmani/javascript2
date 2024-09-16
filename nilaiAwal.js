 function searchData (nilaiAwal, nilaiAkhir, dataArray, callback) {
   if(nilaiAwal >= nilaiAkhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
   }
   else if (dataArray.length <= 5) {
      console.log("Jumlah data dalam array harus lebih dari 5");
   }
    else {
      const getData = dataArray.filter (x => x> nilaiAwal && x< nilaiAkhir);
      callback (getData);
   }
 }

  
   function orderData (getData) {
      if (getData.length == 0) {
         console.log("Nilai tidak ditemukan");
         return;
      }
      const result = getData.sort ((a,b) => a - b);
      console.log (result);
   }

searchData (5,20,[9,5,1,11,15,19], orderData); 
searchData (20,5,[9,5,1,11,15,19], orderData); 
searchData (5,20,[9,15,19], orderData); 
searchData (5,7,[9,5,1,11,15,19], orderData); 